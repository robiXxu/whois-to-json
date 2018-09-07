module.exports = (domain) => new Promise((resolve, reject) => {
  const targetDomain = typeof domain !== "undefined" ? domain.trim() : '';
  const { spawn } = require('child_process');

  const testRegex = /^(\s?)+([a-zA-Z\s])+(:)(\s)+([a-zA-Z0-9]|[:/\.-\s\+@,&])+$/gm;
  const nlRegex = /[\n\r]+/g;
  const spaceRegex = /[\s]+/g;

  // didn't want to add lodash just for flattenDeep :) 
  const flattenDeep = (arr) => 
    arr.reduce((flat, toFlatten) => 
      flat.concat(Array.isArray(toFlatten) ? 
        flattenDeep(toFlatten) : 
        toFlatten),[]);
  
  const whois = spawn('whois',[targetDomain]);

  whois.stdout.on('data', (data) => {
    
    const nestedArrays = data
      .toString()
      .match(testRegex)
      .map(line => line.replace(nlRegex,'|').split('|'));

    const jsonObject = flattenDeep(nestedArrays)
      .filter(l => l.length)
      .map(l => l.replace(spaceRegex, ' ').trim())
      .map(line => line.split(':'))
      .reduce((object, array) => {
        const key = array.shift().replace(spaceRegex, '');
        const value = array.join(':').trim();

        // if key already exist and value is not a array transform in array
        if( typeof object[key] !== "undefined" && !Array.isArray(object[key]) ) 
          object[key] = [object[key]];

        /**
         * If object[key] is a array
         * --- true: check if value that's about to be pushed isn't already there.
         * ------- true: check if object[key] has only 1 value
         * ------------ true: set object[key] value equal to first item.
         * ------------ false: return same value
         * ------- false: "push it" create a new array by destructuring old one and adding new value.
         * --- false: set value as it is if it's not a array
         */

        object[key] = Array.isArray(object[key]) ?
          (
            object[key]
              .map(v => v.toLowerCase())
              .includes(value.toLowerCase()) ?
            (
              (object[key].length === 1) ?
              object[key][0] :
              object[key]
            ) :
            [ ...object[key], value ]
          ) : 
          value;

        return object;
      }, 
      {});

    resolve(jsonObject);
  });

  whois.stderr.on('data', (data) => {
    const reason = data.toString().trim().replace(nlRegex, '');
    reject({
      domain: targetDomain,
      reason
    })
  });
  
  whois.on('close', (code) => {
    if( code !== 0) {
      reject({
        code,
        domain: targetDomain,
        reason: `child process exited with code ${code}`
      });
    }
  });

});
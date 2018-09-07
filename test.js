const whois = require('./index');

const checkDomain = (domain) => 
  whois(domain)
    .then(data => {
      console.log(JSON.stringify(data, null, 2));
    })
    .catch(console.error);

const testDomains = [
  '',
  // 'schiriac.com',
  // 'facebook.com',
  // 'usv.ro',
  // 'saveni.ro'
];

testDomains.forEach(checkDomain);
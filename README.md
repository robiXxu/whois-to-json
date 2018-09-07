# whois-to-json

A npm package that outputs json from whois command.

---
- [Install](#install)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Output](#output)
- [Errors](#errors)
- [Issues](#issues)
- [Contribute](#contribute)
- [License](#license)

---
## Install
```
npm install whois-to-json
```
---
## Dependencies
None with one mention:

If you are using Windows you need to download [Whois from Microsoft Website](https://docs.microsoft.com/en-us/sysinternals/downloads/whois), unzip and put :
- whois.exe -> [WindowsDriveLetter]\Windows\System32 ( for 32-bit systems ) 
- whois64.exe -> [WindowsDriveLetter]\Windows\SysWOW64 ( for 64-bit x86 systems )

---
## Usage
```
const whois = require('whois-to-json');

whois('saveni.ro')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(console.error);
```
---

## Output

For duplicate keys, a array is created which will contain all values (duplicate values are ignored)

```
{  
  refer:'whois.rotld.ro',
  domain:'RO',
  organisation:'National Institute for R&D in Informatics',
  address:[  
    'Bd. Averescu 8-10',
    'Bucharest 011454',
    'Romania',
    'Sector 1',
    '8-10, Bd. Averescu'
  ],
  contact:[  
    'administrative',
    'technical'
  ],
  name:[  
    'Ionut Eugen SANDU',
    '.ro TLD Tech Contact'
  ],
  phone:'+40 21 4057200',
  'fax-no':[  
    '+40 21 316 5340',
    '+40 21 316 1084'
  ],
  'e-mail':[  
    'ionut@rotld.ro',
    'dns@rotld.ro'
  ],
  nserver:[  
    'DNS-AT.ROTLD.RO 2001:628:453:bb:0:0:0:6 78.104.145.6',
    'DNS-RO.DENIC.DE 81.91.161.99',
    'PRIMARY.ROTLD.RO 192.162.16.18 2a03:5e80:0:4:192:162:16:18',
    'SEC-DNS-A.ROTLD.RO 192.162.16.20 2a03:5e80:0:4:192:162:16:20',
    'SEC-DNS-B.ROTLD.RO 193.230.31.230 2a03:5e80:0:5:193:230:31:230',
    'SNS-PB.ISC.ORG 192.5.4.1 2001:500:2e:0:0:0:0:1'
  ],
  'ds-rdata':'19267 8 2 499357E3CC1449108F1E2BB70A1B952D140871A50E41138786EB51A2316468EA',
  whois:'whois.rotld.ro',
  status:'ACTIVE',
  remarks:'Registration information: http://www.rotld.ro/',
  created:'1993-02-26',
  changed:'2018-05-11',
  source:'IANA',
  DomainName:'saveni.ro',
  RegisteredOn:'2008-08-07',
  ExpiresOn:'2018-09-07',
  Registrar:'ICI - Registrar',
  ReferralURL:'http://www.rotld.ro',
  DNSSEC:'Inactive',
  Nameserver:[  
    'ns1.digitalocean.com',
    'ns3.digitalocean.com',
    'ns2.digitalocean.com'
  ],
  DomainStatus:'PendingDelete'
}
```
---

## Errors

#### Program shows a warning but exit successfully ( eg. you provide a empty string )
```
{
  domain: '',
  reason 'whois: no default whois server'
}
```

#### Program exit with a code different than 0 ( code is added in case you want to treat the error )
```
{
  code: -1,
  domain: 'saveni.ro',
  reason: 'cannot connect()'
}
```

---

## Issues
Please [report](https://github.com/robiXxu/whois-to-json/issues) if you find any issues.

---

## Contribute 
If you want to contribute, feel free to do so. 

Open a [PR](https://github.com/robiXxu/whois-to-json/pulls) and tag me.

Thank you in advance for your contribution!

---
## License
MIT
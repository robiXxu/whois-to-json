# whois-to-json

A npm package that outputs json from whois command.

---
- [Install](#install)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Output](#output)
- [Error Cases](#error-cases)
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

If you are using Windows you need to install [Whois from Microsoft Website](https://docs.microsoft.com/en-us/sysinternals/downloads/whois), unzip and put :
- whois.exe -> [WindowsDriveLetter]\Windows\System32 ( for 32-bit systems ) 
- whois64.exe -> [WindowsDriveLetter]\Windows\SysWOW64 ( for 64-bit x86 systems )

---
## Usage
```
const whois = require('whois-to-json');

whois('schiriac.com')
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
  "refer": "whois.verisign-grs.com",
  "domain": "COM",
  "organisation": "VeriSign Global Registry Services",
  "address": [
    "12061 Bluemont Way",
    "Reston Virginia 20190",
    "United States"
  ],
  "contact": [
    "administrative",
    "technical"
  ],
  "name": "Registry Customer Service",
  "phone": "+1 703 925-6999",
  "fax-no": "+1 703 948 3978",
  "e-mail": "info@verisign-grs.com",
  "nserver": [
    "A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30",
    "B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30",
    "C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30",
    "D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30",
    "E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30",
    "F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30",
    "G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30",
    "H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30",
    "I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30",
    "J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30",
    "K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30",
    "L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30",
    "M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30"
  ],
  "ds-rdata": "30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CFC41A5766",
  "whois": "whois.verisign-grs.com",
  "status": "ACTIVE",
  "remarks": "Registration information: http://www.verisigninc.com",
  "created": "1985-01-01",
  "changed": "2017-10-05",
  "source": "IANA",
  "DomainName": "SCHIRIAC.COM",
  "RegistrarWHOISServer": "whois.namecheap.com",
  "RegistrarURL": "http://www.namecheap.com",
  "UpdatedDate": [
    "2018-08-08T10:53:13Z",
    "2018-08-08T10:53:13.99Z"
  ],
  "CreationDate": [
    "2017-09-07T20:15:47Z",
    "2017-09-07T20:15:47.00Z"
  ],
  "RegistryExpiryDate": "2020-09-07T20:15:47Z",
  "Registrar": [
    "NameCheap Inc.",
    "NAMECHEAP INC"
  ],
  "RegistrarIANAID": "1068",
  "RegistrarAbuseContactEmail": "abuse@namecheap.com",
  "RegistrarAbuseContactPhone": "+1.6613102107",
  "NameServer": [
    "AIDA.NS.CLOUDFLARE.COM",
    "MITCH.NS.CLOUDFLARE.COM"
  ],
  "DNSSEC": "unsigned",
  "URLoftheICANNWhoisInaccuracyComplaintForm": "https://www.icann.org/wicf/",
  "Domainname": "schiriac.com",
  "RegistrarRegistrationExpirationDate": "2020-09-07T20:15:47.00Z",
  "Reseller": "NAMECHEAP INC",
  "RegistryRegistrantID": "",
  "RegistrantName": "WhoisGuard Protected",
  "RegistrantOrganization": "WhoisGuard, Inc.",
  "RegistrantStreet": "P.O. Box 0823-03411",
  "RegistrantCity": "Panama",
  "RegistrantState/Province": "Panama",
  "RegistrantPostalCode": "",
  "RegistrantCountry": "PA",
  "RegistrantPhone": "+507.8365503",
  "RegistrantPhoneExt": "",
  "RegistrantFax": "+51.17057182",
  "RegistrantFaxExt": "",
  "RegistrantEmail": "99d47a72364440feab71057af5e6379a.protect@whoisguard.com",
  "RegistryAdminID": "",
  "AdminName": "WhoisGuard Protected",
  "AdminOrganization": "WhoisGuard, Inc.",
  "AdminStreet": "P.O. Box 0823-03411",
  "AdminCity": "Panama",
  "AdminState/Province": "Panama",
  "AdminPostalCode": "",
  "AdminCountry": "PA",
  "AdminPhone": "+507.8365503",
  "AdminPhoneExt": "",
  "AdminFax": "+51.17057182",
  "AdminFaxExt": "",
  "AdminEmail": "99d47a72364440feab71057af5e6379a.protect@whoisguard.com",
  "RegistryTechID": "",
  "TechName": "WhoisGuard Protected",
  "TechOrganization": "WhoisGuard, Inc.",
  "TechStreet": "P.O. Box 0823-03411",
  "TechCity": "Panama",
  "TechState/Province": "Panama",
  "TechPostalCode": "",
  "TechCountry": "PA",
  "TechPhone": "+507.8365503",
  "TechPhoneExt": "",
  "TechFax": "+51.17057182",
  "TechFaxExt": "",
  "TechEmail": "99d47a72364440feab71057af5e6379a.protect@whoisguard.com",
  "URLoftheICANNWHOISDataProblemReportingSystem": "http://wdprs.internic.net/"
}
```
---

## Error Cases

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
  domain: 'schiriac.com',
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
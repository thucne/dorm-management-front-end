import * as api from '../api/index';

import { GET_DASHBOARD, EDIT_DASHBOARD, DELETE_DASHBOARD } from '../constants/constants';

export const getDashboard = (whatDatabase) => async (dispatch) => {
    try {
        // const { data } = await api.getDatabase(whatDatabase);
        const fake = [{
            "id": 1,
            "first_name": "Ewen",
            "last_name": "Phonix",
            "email": "ephonix0@ifeng.com",
            "gender": "Agender",
            "ip_address": "201.40.190.7"
        }, {
            "id": 2,
            "first_name": "Alexis",
            "last_name": "Stote",
            "email": "astote1@mtv.com",
            "gender": "Bigender",
            "ip_address": "124.89.105.123"
        }, {
            "id": 3,
            "first_name": "Dale",
            "last_name": "Clissell",
            "email": "dclissell2@parallels.com",
            "gender": "Genderfluid",
            "ip_address": "99.198.96.45"
        }, {
            "id": 4,
            "first_name": "Johna",
            "last_name": "Prescote",
            "email": "jprescote3@macromedia.com",
            "gender": "Genderqueer",
            "ip_address": "6.92.199.172"
        }, {
            "id": 5,
            "first_name": "Boote",
            "last_name": "Roxby",
            "email": "broxby4@csmonitor.com",
            "gender": "Genderfluid",
            "ip_address": "114.241.242.65"
        }, {
            "id": 6,
            "first_name": "Bobbi",
            "last_name": "Emney",
            "email": "bemney5@infoseek.co.jp",
            "gender": "Polygender",
            "ip_address": "183.209.138.65"
        }, {
            "id": 7,
            "first_name": "Ardelis",
            "last_name": "Pemble",
            "email": "apemble6@exblog.jp",
            "gender": "Bigender",
            "ip_address": "50.185.111.218"
        }, {
            "id": 8,
            "first_name": "Raoul",
            "last_name": "Pinkstone",
            "email": "rpinkstone7@bigcartel.com",
            "gender": "Agender",
            "ip_address": "12.139.8.30"
        }, {
            "id": 9,
            "first_name": "Coriss",
            "last_name": "Braisby",
            "email": "cbraisby8@examiner.com",
            "gender": "Genderqueer",
            "ip_address": "52.213.254.93"
        }, {
            "id": 10,
            "first_name": "Ruprecht",
            "last_name": "Samwayes",
            "email": "rsamwayes9@wix.com",
            "gender": "Female",
            "ip_address": "78.190.118.22"
        },{
            "id": 11,
            "first_name": "Shadow",
            "last_name": "Clunie",
            "email": "scluniea@blinklist.com",
            "gender": "Genderfluid",
            "ip_address": "13.41.183.41"
          }, {
            "id": 12,
            "first_name": "Ber",
            "last_name": "Gouck",
            "email": "bgouckb@cnn.com",
            "gender": "Non-binary",
            "ip_address": "82.27.78.52"
          }, {
            "id": 13,
            "first_name": "Oneida",
            "last_name": "Leivers",
            "email": "oleiversc@skyrock.com",
            "gender": "Male",
            "ip_address": "41.110.135.76"
          }, {
            "id": 14,
            "first_name": "Gabbi",
            "last_name": "Thickett",
            "email": "gthickettd@fc2.com",
            "gender": "Polygender",
            "ip_address": "98.33.144.62"
          }, {
            "id": 15,
            "first_name": "Amelita",
            "last_name": "Simonson",
            "email": "asimonsone@nytimes.com",
            "gender": "Non-binary",
            "ip_address": "227.226.1.222"
          }, {
            "id": 16,
            "first_name": "Tait",
            "last_name": "Richel",
            "email": "trichelf@tamu.edu",
            "gender": "Genderfluid",
            "ip_address": "133.136.35.83"
          }, {
            "id": 17,
            "first_name": "Clifford",
            "last_name": "Moscrop",
            "email": "cmoscropg@cyberchimps.com",
            "gender": "Male",
            "ip_address": "4.73.37.99"
          }, {
            "id": 18,
            "first_name": "Berny",
            "last_name": "Brackley",
            "email": "bbrackleyh@networkadvertising.org",
            "gender": "Agender",
            "ip_address": "175.50.38.90"
          }, {
            "id": 19,
            "first_name": "Bronny",
            "last_name": "Malek",
            "email": "bmaleki@ox.ac.uk",
            "gender": "Bigender",
            "ip_address": "237.59.121.209"
          }, {
            "id": 20,
            "first_name": "Portie",
            "last_name": "Matissoff",
            "email": "pmatissoffj@hud.gov",
            "gender": "Male",
            "ip_address": "151.150.109.88"
          }, {
            "id": 21,
            "first_name": "Olenolin",
            "last_name": "Abbatucci",
            "email": "oabbatuccik@i2i.jp",
            "gender": "Non-binary",
            "ip_address": "104.21.29.110"
          }, {
            "id": 22,
            "first_name": "Aleta",
            "last_name": "Breach",
            "email": "abreachl@alibaba.com",
            "gender": "Bigender",
            "ip_address": "61.239.71.111"
          }, {
            "id": 23,
            "first_name": "Osgood",
            "last_name": "How to preserve",
            "email": "ohowtopreservem@dyndns.org",
            "gender": "Non-binary",
            "ip_address": "36.88.90.246"
          }, {
            "id": 24,
            "first_name": "Tracie",
            "last_name": "Tirrell",
            "email": "ttirrelln@ed.gov",
            "gender": "Genderfluid",
            "ip_address": "150.124.12.174"
          }, {
            "id": 25,
            "first_name": "Rosemaria",
            "last_name": "Masselin",
            "email": "rmasselino@umich.edu",
            "gender": "Genderfluid",
            "ip_address": "87.207.1.226"
          }, {
            "id": 26,
            "first_name": "Selena",
            "last_name": "Boyfield",
            "email": "sboyfieldp@symantec.com",
            "gender": "Non-binary",
            "ip_address": "70.35.32.106"
          }, {
            "id": 27,
            "first_name": "Olly",
            "last_name": "Bonnyson",
            "email": "obonnysonq@domainmarket.com",
            "gender": "Genderfluid",
            "ip_address": "1.208.221.121"
          }, {
            "id": 28,
            "first_name": "Randolph",
            "last_name": "Allans",
            "email": "rallansr@ocn.ne.jp",
            "gender": "Genderfluid",
            "ip_address": "176.67.117.146"
          }, {
            "id": 29,
            "first_name": "Alma",
            "last_name": "Larn",
            "email": "alarns@scientificamerican.com",
            "gender": "Female",
            "ip_address": "28.127.132.139"
          }, {
            "id": 30,
            "first_name": "Sadye",
            "last_name": "Brattan",
            "email": "sbrattant@about.com",
            "gender": "Agender",
            "ip_address": "70.88.196.147"
          }, {
            "id": 31,
            "first_name": "Shena",
            "last_name": "Klich",
            "email": "sklichu@wsj.com",
            "gender": "Bigender",
            "ip_address": "190.183.61.153"
          }, {
            "id": 32,
            "first_name": "Emma",
            "last_name": "Isgate",
            "email": "eisgatev@statcounter.com",
            "gender": "Bigender",
            "ip_address": "126.126.21.252"
          }, {
            "id": 33,
            "first_name": "Anallise",
            "last_name": "Aslen",
            "email": "aaslenw@deviantart.com",
            "gender": "Female",
            "ip_address": "144.34.122.243"
          }, {
            "id": 34,
            "first_name": "Gerri",
            "last_name": "Ethridge",
            "email": "gethridgex@geocities.com",
            "gender": "Genderqueer",
            "ip_address": "187.164.221.228"
          }, {
            "id": 35,
            "first_name": "Bernelle",
            "last_name": "Whetnall",
            "email": "bwhetnally@ucoz.com",
            "gender": "Genderqueer",
            "ip_address": "31.159.231.151"
          }, {
            "id": 36,
            "first_name": "Llewellyn",
            "last_name": "Badder",
            "email": "lbadderz@phpbb.com",
            "gender": "Genderfluid",
            "ip_address": "72.251.234.186"
          }, {
            "id": 37,
            "first_name": "Stephen",
            "last_name": "Bolland",
            "email": "sbolland10@dot.gov",
            "gender": "Genderfluid",
            "ip_address": "13.90.93.38"
          }, {
            "id": 38,
            "first_name": "Bibby",
            "last_name": "Tambling",
            "email": "btambling11@gov.uk",
            "gender": "Non-binary",
            "ip_address": "99.51.244.200"
          }, {
            "id": 39,
            "first_name": "Ida",
            "last_name": "Noteyoung",
            "email": "inoteyoung12@shop-pro.jp",
            "gender": "Polygender",
            "ip_address": "132.76.130.193"
          }, {
            "id": 40,
            "first_name": "Cathi",
            "last_name": "Croke",
            "email": "ccroke13@bloglines.com",
            "gender": "Agender",
            "ip_address": "89.229.4.81"
          }, {
            "id": 41,
            "first_name": "Loree",
            "last_name": "Conradsen",
            "email": "lconradsen14@weather.com",
            "gender": "Bigender",
            "ip_address": "120.47.109.228"
          }, {
            "id": 42,
            "first_name": "Ave",
            "last_name": "Glavias",
            "email": "aglavias15@wix.com",
            "gender": "Genderfluid",
            "ip_address": "218.198.193.114"
          }, {
            "id": 43,
            "first_name": "Rubina",
            "last_name": "Veare",
            "email": "rveare16@nsw.gov.au",
            "gender": "Bigender",
            "ip_address": "166.253.151.163"
          }, {
            "id": 44,
            "first_name": "Nikola",
            "last_name": "Skarman",
            "email": "nskarman17@ask.com",
            "gender": "Male",
            "ip_address": "242.230.60.22"
          }, {
            "id": 45,
            "first_name": "Thayne",
            "last_name": "Cropp",
            "email": "tcropp18@cmu.edu",
            "gender": "Polygender",
            "ip_address": "191.142.76.11"
          }, {
            "id": 46,
            "first_name": "Armin",
            "last_name": "Venditti",
            "email": "avenditti19@hubpages.com",
            "gender": "Female",
            "ip_address": "66.101.130.17"
          }, {
            "id": 47,
            "first_name": "Svend",
            "last_name": "Nunn",
            "email": "snunn1a@naver.com",
            "gender": "Non-binary",
            "ip_address": "36.142.35.24"
          }, {
            "id": 48,
            "first_name": "Davie",
            "last_name": "Avesque",
            "email": "davesque1b@smugmug.com",
            "gender": "Male",
            "ip_address": "248.159.74.174"
          }, {
            "id": 49,
            "first_name": "Melisse",
            "last_name": "Patria",
            "email": "mpatria1c@123-reg.co.uk",
            "gender": "Female",
            "ip_address": "21.170.178.227"
          }, {
            "id": 50,
            "first_name": "Nigel",
            "last_name": "McCrone",
            "email": "nmccrone1d@godaddy.com",
            "gender": "Agender",
            "ip_address": "87.220.156.38"
          }, {
            "id": 51,
            "first_name": "Phaidra",
            "last_name": "Woodstock",
            "email": "pwoodstock1e@noaa.gov",
            "gender": "Genderfluid",
            "ip_address": "115.231.2.40"
          }, {
            "id": 52,
            "first_name": "Elden",
            "last_name": "Macallam",
            "email": "emacallam1f@nhs.uk",
            "gender": "Genderfluid",
            "ip_address": "69.71.211.246"
          }, {
            "id": 53,
            "first_name": "Loren",
            "last_name": "Pretty",
            "email": "lpretty1g@thetimes.co.uk",
            "gender": "Male",
            "ip_address": "21.230.11.245"
          }, {
            "id": 54,
            "first_name": "Jonathon",
            "last_name": "Shufflebotham",
            "email": "jshufflebotham1h@hatena.ne.jp",
            "gender": "Polygender",
            "ip_address": "79.172.50.111"
          }, {
            "id": 55,
            "first_name": "Yvonne",
            "last_name": "Wigfall",
            "email": "ywigfall1i@wix.com",
            "gender": "Non-binary",
            "ip_address": "36.44.27.51"
          }, {
            "id": 56,
            "first_name": "Mag",
            "last_name": "Hewins",
            "email": "mhewins1j@xing.com",
            "gender": "Female",
            "ip_address": "50.215.233.105"
          }, {
            "id": 57,
            "first_name": "Monika",
            "last_name": "Brun",
            "email": "mbrun1k@cafepress.com",
            "gender": "Male",
            "ip_address": "162.80.221.181"
          }, {
            "id": 58,
            "first_name": "Fan",
            "last_name": "Izzett",
            "email": "fizzett1l@edublogs.org",
            "gender": "Female",
            "ip_address": "185.28.75.80"
          }, {
            "id": 59,
            "first_name": "Lucky",
            "last_name": "Marns",
            "email": "lmarns1m@nyu.edu",
            "gender": "Genderfluid",
            "ip_address": "99.150.114.128"
          }, {
            "id": 60,
            "first_name": "Hinze",
            "last_name": "Lafontaine",
            "email": "hlafontaine1n@barnesandnoble.com",
            "gender": "Female",
            "ip_address": "187.154.225.48"
          }, {
            "id": 61,
            "first_name": "Torrin",
            "last_name": "Caff",
            "email": "tcaff1o@nba.com",
            "gender": "Agender",
            "ip_address": "93.247.218.152"
          }, {
            "id": 62,
            "first_name": "Doralynn",
            "last_name": "Leppingwell",
            "email": "dleppingwell1p@1688.com",
            "gender": "Male",
            "ip_address": "48.69.177.102"
          }, {
            "id": 63,
            "first_name": "Abbie",
            "last_name": "O'Shee",
            "email": "aoshee1q@fda.gov",
            "gender": "Agender",
            "ip_address": "155.166.93.106"
          }, {
            "id": 64,
            "first_name": "Bea",
            "last_name": "Wingate",
            "email": "bwingate1r@ucoz.com",
            "gender": "Male",
            "ip_address": "76.34.141.40"
          }, {
            "id": 65,
            "first_name": "Corney",
            "last_name": "Nanelli",
            "email": "cnanelli1s@eventbrite.com",
            "gender": "Polygender",
            "ip_address": "209.149.51.42"
          }, {
            "id": 66,
            "first_name": "Tildie",
            "last_name": "Drable",
            "email": "tdrable1t@shinystat.com",
            "gender": "Bigender",
            "ip_address": "73.227.175.166"
          }, {
            "id": 67,
            "first_name": "Dalis",
            "last_name": "Laurence",
            "email": "dlaurence1u@usda.gov",
            "gender": "Male",
            "ip_address": "72.13.49.123"
          }, {
            "id": 68,
            "first_name": "Nickie",
            "last_name": "McCuis",
            "email": "nmccuis1v@aboutads.info",
            "gender": "Agender",
            "ip_address": "51.121.20.76"
          }, {
            "id": 69,
            "first_name": "Dorothea",
            "last_name": "Tomalin",
            "email": "dtomalin1w@java.com",
            "gender": "Non-binary",
            "ip_address": "214.32.203.62"
          }, {
            "id": 70,
            "first_name": "Maribeth",
            "last_name": "Dulson",
            "email": "mdulson1x@hexun.com",
            "gender": "Genderfluid",
            "ip_address": "253.123.217.62"
          }, {
            "id": 71,
            "first_name": "Kai",
            "last_name": "Dolder",
            "email": "kdolder1y@google.de",
            "gender": "Female",
            "ip_address": "94.72.56.166"
          }, {
            "id": 72,
            "first_name": "Jody",
            "last_name": "Bradberry",
            "email": "jbradberry1z@booking.com",
            "gender": "Male",
            "ip_address": "200.153.50.35"
          }, {
            "id": 73,
            "first_name": "Chelsie",
            "last_name": "Agastina",
            "email": "cagastina20@paypal.com",
            "gender": "Agender",
            "ip_address": "245.54.34.116"
          }, {
            "id": 74,
            "first_name": "Finley",
            "last_name": "McCrory",
            "email": "fmccrory21@liveinternet.ru",
            "gender": "Male",
            "ip_address": "226.147.131.37"
          }, {
            "id": 75,
            "first_name": "Floria",
            "last_name": "Bramah",
            "email": "fbramah22@bravesites.com",
            "gender": "Female",
            "ip_address": "80.244.95.8"
          }, {
            "id": 76,
            "first_name": "Eberto",
            "last_name": "Dabes",
            "email": "edabes23@nymag.com",
            "gender": "Genderqueer",
            "ip_address": "229.23.55.115"
          }, {
            "id": 77,
            "first_name": "Ora",
            "last_name": "Goodbarr",
            "email": "ogoodbarr24@prweb.com",
            "gender": "Male",
            "ip_address": "129.2.60.156"
          }, {
            "id": 78,
            "first_name": "Kelsy",
            "last_name": "Desport",
            "email": "kdesport25@feedburner.com",
            "gender": "Agender",
            "ip_address": "188.193.134.51"
          }, {
            "id": 79,
            "first_name": "Camellia",
            "last_name": "Strahan",
            "email": "cstrahan26@prnewswire.com",
            "gender": "Bigender",
            "ip_address": "93.40.187.187"
          }, {
            "id": 80,
            "first_name": "Zechariah",
            "last_name": "Kuhnel",
            "email": "zkuhnel27@samsung.com",
            "gender": "Polygender",
            "ip_address": "140.116.117.204"
          }, {
            "id": 81,
            "first_name": "Darda",
            "last_name": "Seabrooke",
            "email": "dseabrooke28@narod.ru",
            "gender": "Male",
            "ip_address": "152.165.18.106"
          }, {
            "id": 82,
            "first_name": "Bradford",
            "last_name": "Woolvett",
            "email": "bwoolvett29@ox.ac.uk",
            "gender": "Bigender",
            "ip_address": "238.213.39.9"
          }, {
            "id": 83,
            "first_name": "Hyatt",
            "last_name": "Fosse",
            "email": "hfosse2a@prlog.org",
            "gender": "Male",
            "ip_address": "101.27.18.44"
          }, {
            "id": 84,
            "first_name": "Freida",
            "last_name": "Loxton",
            "email": "floxton2b@mapy.cz",
            "gender": "Male",
            "ip_address": "92.242.113.113"
          }, {
            "id": 85,
            "first_name": "Kleon",
            "last_name": "Hamberstone",
            "email": "khamberstone2c@miibeian.gov.cn",
            "gender": "Polygender",
            "ip_address": "125.5.102.85"
          }, {
            "id": 86,
            "first_name": "Ania",
            "last_name": "Kristof",
            "email": "akristof2d@storify.com",
            "gender": "Female",
            "ip_address": "75.33.155.110"
          }, {
            "id": 87,
            "first_name": "Lorrin",
            "last_name": "Sybe",
            "email": "lsybe2e@archive.org",
            "gender": "Agender",
            "ip_address": "15.18.230.12"
          }, {
            "id": 88,
            "first_name": "Stefania",
            "last_name": "McLanachan",
            "email": "smclanachan2f@blogs.com",
            "gender": "Agender",
            "ip_address": "110.64.183.77"
          }, {
            "id": 89,
            "first_name": "Thorny",
            "last_name": "Brokenshaw",
            "email": "tbrokenshaw2g@people.com.cn",
            "gender": "Bigender",
            "ip_address": "28.207.76.69"
          }, {
            "id": 90,
            "first_name": "Oren",
            "last_name": "Chimes",
            "email": "ochimes2h@myspace.com",
            "gender": "Agender",
            "ip_address": "247.112.207.181"
          }, {
            "id": 91,
            "first_name": "Mallory",
            "last_name": "Lawdham",
            "email": "mlawdham2i@symantec.com",
            "gender": "Genderfluid",
            "ip_address": "211.250.223.68"
          }, {
            "id": 92,
            "first_name": "Jonah",
            "last_name": "Gillies",
            "email": "jgillies2j@msn.com",
            "gender": "Bigender",
            "ip_address": "138.14.153.214"
          }, {
            "id": 93,
            "first_name": "Maire",
            "last_name": "Minithorpe",
            "email": "mminithorpe2k@infoseek.co.jp",
            "gender": "Bigender",
            "ip_address": "58.34.143.38"
          }, {
            "id": 94,
            "first_name": "Brooke",
            "last_name": "Kobke",
            "email": "bkobke2l@ucoz.ru",
            "gender": "Bigender",
            "ip_address": "138.60.159.91"
          }, {
            "id": 95,
            "first_name": "Druci",
            "last_name": "Zuenelli",
            "email": "dzuenelli2m@seesaa.net",
            "gender": "Genderqueer",
            "ip_address": "188.231.254.98"
          }, {
            "id": 96,
            "first_name": "Trudy",
            "last_name": "Runnalls",
            "email": "trunnalls2n@jugem.jp",
            "gender": "Male",
            "ip_address": "127.138.207.238"
          }, {
            "id": 97,
            "first_name": "Lurlene",
            "last_name": "Horder",
            "email": "lhorder2o@miibeian.gov.cn",
            "gender": "Non-binary",
            "ip_address": "224.238.182.60"
          }, {
            "id": 98,
            "first_name": "Xylina",
            "last_name": "Cowtherd",
            "email": "xcowtherd2p@sphinn.com",
            "gender": "Bigender",
            "ip_address": "31.236.200.69"
          }, {
            "id": 99,
            "first_name": "Berny",
            "last_name": "Slowan",
            "email": "bslowan2q@army.mil",
            "gender": "Non-binary",
            "ip_address": "163.68.230.40"
          }, {
            "id": 100,
            "first_name": "Gussie",
            "last_name": "Balke",
            "email": "gbalke2r@nytimes.com",
            "gender": "Non-binary",
            "ip_address": "195.56.247.35"
          }];

        const fake1 = [{
            "id": 1,
            "email/username": "fmccorley0@baidu.com",
            "password": "xKl0I9CQ902X"
          }, {
            "id": 2,
            "email/username": "tgulliman1@wikipedia.org",
            "password": "75Y7V4R3sn0P"
          }, {
            "id": 3,
            "email/username": "mgawkroge2@google.ca",
            "password": "4YBty9k7bif"
          }, {
            "id": 4,
            "email/username": "pcutridge3@php.net",
            "password": "Gh1FWrRl"
          }, {
            "id": 5,
            "email/username": "chinkins4@geocities.jp",
            "password": "jwImxByn26I"
          }, {
            "id": 6,
            "email/username": "stebald5@accuweather.com",
            "password": "5B7cc8emq8"
          }, {
            "id": 7,
            "email/username": "tmclennan6@goodreads.com",
            "password": "WC6cUAqJ"
          }, {
            "id": 8,
            "email/username": "kkiehne7@hibu.com",
            "password": "lhalXPNkK"
          }, {
            "id": 9,
            "email/username": "gsebert8@nbcnews.com",
            "password": "sVmwdfQ"
          }, {
            "id": 10,
            "email/username": "eeverest9@dmoz.org",
            "password": "acpJtGM2"
          }, {
            "id": 11,
            "email/username": "mblasla@goo.gl",
            "password": "zIZ8Dd"
          }, {
            "id": 12,
            "email/username": "pmagrannellb@timesonline.co.uk",
            "password": "nx7gkVw1"
          }, {
            "id": 13,
            "email/username": "candric@hc360.com",
            "password": "3MWs2a7xf2"
          }, {
            "id": 14,
            "email/username": "mcuttlerd@drupal.org",
            "password": "v1Dc7AnV"
          }, {
            "id": 15,
            "email/username": "csautere@walmart.com",
            "password": "Mzrloyrlw0eP"
          }, {
            "id": 16,
            "email/username": "bmelloif@irs.gov",
            "password": "EgU0Naz"
          }, {
            "id": 17,
            "email/username": "cgrigorinig@tripod.com",
            "password": "GV6PQjOVq"
          }, {
            "id": 18,
            "email/username": "icawthryh@latimes.com",
            "password": "eARLYKhqSkJX"
          }, {
            "id": 19,
            "email/username": "sepiscopioi@amazon.de",
            "password": "wtOopT"
          }, {
            "id": 20,
            "email/username": "fbartkowiakj@google.ru",
            "password": "4iQnu0DpLX"
          }, {
            "id": 21,
            "email/username": "nchenek@elpais.com",
            "password": "ZdPG0O4YM"
          }, {
            "id": 22,
            "email/username": "mwistancel@a8.net",
            "password": "h40bY0Zl"
          }, {
            "id": 23,
            "email/username": "tblanchettem@engadget.com",
            "password": "dsJ1cg"
          }, {
            "id": 24,
            "email/username": "jhorsfieldn@i2i.jp",
            "password": "wJEakQD"
          }, {
            "id": 25,
            "email/username": "ewilcinskiso@auda.org.au",
            "password": "R2QYKLRT4"
          }, {
            "id": 26,
            "email/username": "rmessierp@tripadvisor.com",
            "password": "WmP2WrjUw6"
          }, {
            "id": 27,
            "email/username": "cfairbardq@about.me",
            "password": "HFKkBeZQ0Rt"
          }, {
            "id": 28,
            "email/username": "mgamlinr@behance.net",
            "password": "QYsVoqwfM"
          }, {
            "id": 29,
            "email/username": "vtorries@salon.com",
            "password": "I1Tw0G8"
          }, {
            "id": 30,
            "email/username": "jhovert@edublogs.org",
            "password": "dJN051fyf"
          }, {
            "id": 31,
            "email/username": "sorthmannu@techcrunch.com",
            "password": "mVtzkObLq"
          }, {
            "id": 32,
            "email/username": "ngolagleyv@51.la",
            "password": "Pen20UjbuB"
          }, {
            "id": 33,
            "email/username": "nguillotw@umn.edu",
            "password": "ykVHbMfP7pkF"
          }, {
            "id": 34,
            "email/username": "rjoynsonx@tumblr.com",
            "password": "6hs8tIJZ"
          }, {
            "id": 35,
            "email/username": "lhamshawy@jigsy.com",
            "password": "sS4f4Zj2"
          }, {
            "id": 36,
            "email/username": "ehattonz@wunderground.com",
            "password": "ulxCEpdQrO"
          }, {
            "id": 37,
            "email/username": "eveal10@simplemachines.org",
            "password": "A2mdH00DCAIJ"
          }, {
            "id": 38,
            "email/username": "lbichener11@berkeley.edu",
            "password": "7lwIAZ2f"
          }, {
            "id": 39,
            "email/username": "rhaddinton12@behance.net",
            "password": "leasSoLltP"
          }, {
            "id": 40,
            "email/username": "bglover13@hostgator.com",
            "password": "upmmRnnZuCEc"
          }, {
            "id": 41,
            "email/username": "evasenkov14@artisteer.com",
            "password": "fV5jpsvbEiN"
          }, {
            "id": 42,
            "email/username": "shuortic15@blogtalkradio.com",
            "password": "gyCWtNV1pFu"
          }, {
            "id": 43,
            "email/username": "fedger16@accuweather.com",
            "password": "GcAZlH"
          }, {
            "id": 44,
            "email/username": "wtheobald17@sina.com.cn",
            "password": "8SLCNw"
          }, {
            "id": 45,
            "email/username": "gmelley18@auda.org.au",
            "password": "JSQmhqzY"
          }, {
            "id": 46,
            "email/username": "ecowling19@ifeng.com",
            "password": "FzE9nLznM"
          }, {
            "id": 47,
            "email/username": "moroan1a@yahoo.com",
            "password": "9Zfuusvziu"
          }, {
            "id": 48,
            "email/username": "cstares1b@indiatimes.com",
            "password": "9BF5dNiJiW"
          }, {
            "id": 49,
            "email/username": "anozzolinii1c@opera.com",
            "password": "VUJIeF"
          }, {
            "id": 50,
            "email/username": "mlumpkin1d@bluehost.com",
            "password": "wPmbiChW"
          }, {
            "id": 51,
            "email/username": "sgook1e@xinhuanet.com",
            "password": "IHIREsu"
          }, {
            "id": 52,
            "email/username": "jelan1f@yellowpages.com",
            "password": "5H0LpG5oYC4"
          }, {
            "id": 53,
            "email/username": "ssermin1g@pbs.org",
            "password": "bghvVz25SNs"
          }, {
            "id": 54,
            "email/username": "ehaggeth1h@google.ca",
            "password": "t6makATIjH"
          }, {
            "id": 55,
            "email/username": "cfincher1i@intel.com",
            "password": "ARSTDBx1Mr"
          }, {
            "id": 56,
            "email/username": "dwhyman1j@ox.ac.uk",
            "password": "svqPaG"
          }, {
            "id": 57,
            "email/username": "wwyer1k@taobao.com",
            "password": "JVOpPPfnri"
          }, {
            "id": 58,
            "email/username": "bmattek1l@google.nl",
            "password": "g6ZqGyM"
          }, {
            "id": 59,
            "email/username": "cpinxton1m@patch.com",
            "password": "1ugZEmgl"
          }, {
            "id": 60,
            "email/username": "rmewrcik1n@state.gov",
            "password": "m6Gb3mtn"
          }, {
            "id": 61,
            "email/username": "gtills1o@bing.com",
            "password": "JMe7wGYUwS"
          }, {
            "id": 62,
            "email/username": "revesque1p@wikispaces.com",
            "password": "7mSzKJE0EWa"
          }, {
            "id": 63,
            "email/username": "tdiggell1q@google.com",
            "password": "A8XvX406p"
          }, {
            "id": 64,
            "email/username": "cfulun1r@github.io",
            "password": "x450OD5vp"
          }, {
            "id": 65,
            "email/username": "gtarbet1s@utexas.edu",
            "password": "xpxrGT6Gwy0"
          }, {
            "id": 66,
            "email/username": "fmcglashan1t@accuweather.com",
            "password": "6IpQN8UGRQv"
          }, {
            "id": 67,
            "email/username": "dmalec1u@kickstarter.com",
            "password": "2sjKQfyAE"
          }, {
            "id": 68,
            "email/username": "sjodkowski1v@va.gov",
            "password": "8VeFdbLz"
          }, {
            "id": 69,
            "email/username": "btroth1w@slate.com",
            "password": "bSlPxmz8"
          }, {
            "id": 70,
            "email/username": "lyarrall1x@unesco.org",
            "password": "ckGLKEzH"
          }, {
            "id": 71,
            "email/username": "tmaudett1y@hp.com",
            "password": "72DDT7ia3s"
          }, {
            "id": 72,
            "email/username": "gcrowden1z@photobucket.com",
            "password": "evzlNJmnT"
          }, {
            "id": 73,
            "email/username": "knevins20@tripadvisor.com",
            "password": "Ei73Rw010HE"
          }, {
            "id": 74,
            "email/username": "salwin21@discovery.com",
            "password": "J6fviRljheX"
          }, {
            "id": 75,
            "email/username": "alansbury22@youku.com",
            "password": "uFR3xxTuYQmp"
          }, {
            "id": 76,
            "email/username": "dgittose23@dot.gov",
            "password": "HJUSO7rqG2F"
          }, {
            "id": 77,
            "email/username": "boda24@slashdot.org",
            "password": "jtazY4wyxw6"
          }, {
            "id": 78,
            "email/username": "gstefi25@imdb.com",
            "password": "zzEGHBQRgp"
          }, {
            "id": 79,
            "email/username": "akibbey26@jimdo.com",
            "password": "trldDvic0Z"
          }, {
            "id": 80,
            "email/username": "hbrauner27@xrea.com",
            "password": "gKjAsgBBBjl"
          }, {
            "id": 81,
            "email/username": "htiffney28@wikispaces.com",
            "password": "4SodS1Djcj6"
          }, {
            "id": 82,
            "email/username": "gcluet29@marriott.com",
            "password": "HslSJdr3"
          }, {
            "id": 83,
            "email/username": "tcharteris2a@google.com.au",
            "password": "YJnTXKKfQ6M"
          }, {
            "id": 84,
            "email/username": "gbeininck2b@comsenz.com",
            "password": "mTXIoDBwq"
          }, {
            "id": 85,
            "email/username": "mbartolijn2c@house.gov",
            "password": "Ni4q4x2v"
          }, {
            "id": 86,
            "email/username": "fdoale2d@shutterfly.com",
            "password": "DNluj32"
          }, {
            "id": 87,
            "email/username": "gpinck2e@free.fr",
            "password": "48NtF6"
          }, {
            "id": 88,
            "email/username": "scorona2f@cbsnews.com",
            "password": "MtOj4zQ6ve"
          }, {
            "id": 89,
            "email/username": "mcullum2g@addthis.com",
            "password": "sE1UziNjMP"
          }, {
            "id": 90,
            "email/username": "gsolman2h@live.com",
            "password": "aAOqFs7ms"
          }, {
            "id": 91,
            "email/username": "asynan2i@pen.io",
            "password": "tAEyXk1Am3Hu"
          }, {
            "id": 92,
            "email/username": "eravelus2j@alexa.com",
            "password": "Ol1XHiVrCpI"
          }, {
            "id": 93,
            "email/username": "chatchard2k@de.vu",
            "password": "lEnXTxN"
          }, {
            "id": 94,
            "email/username": "nepton2l@msn.com",
            "password": "FfOyhkmSx"
          }, {
            "id": 95,
            "email/username": "bdubock2m@smh.com.au",
            "password": "1qpQF5b"
          }, {
            "id": 96,
            "email/username": "dcomazzo2n@gravatar.com",
            "password": "bE7AdmIB"
          }, {
            "id": 97,
            "email/username": "bsasser2o@merriam-webster.com",
            "password": "tzR74U0"
          }, {
            "id": 98,
            "email/username": "ksancto2p@buzzfeed.com",
            "password": "oyJoTFfpQnG"
          }, {
            "id": 99,
            "email/username": "hjex2q@dailymotion.com",
            "password": "I0xX8RyBRMl"
          }, {
            "id": 100,
            "email/username": "ahenrion2r@google.nl",
            "password": "fOr3PC"
          }];

        return dispatch({ type: GET_DASHBOARD, data: whatDatabase === 'accounts' ? fake1 : fake });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const editDashboard = (whatDatabase, oldRecordId, newRecord) => async (dispatch) => {
    try {
        // const { data } = await api.editRecord(whatDatabase, oldRecordId, newRecord);
        console.log('db ol new', whatDatabase, oldRecordId, newRecord);
        return dispatch({ type: EDIT_DASHBOARD, data: newRecord });
    } catch (error) {
        return { message: error.response.data.message }
    }
}

export const deleteDashboard = (whatDatabase, recordId) => async (dispatch) => {
    try {
        await api.deleteRecord(whatDatabase, recordId);

        return dispatch({ type: DELETE_DASHBOARD, data: recordId })
    } catch (error) {
        return { message: error.response.data.message }
    }
}
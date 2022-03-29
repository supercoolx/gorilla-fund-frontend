const countries = [
    {
        "label": "Afghanistan",
        "code": "93",
        "value": "AF"
    },
    {
        "label": "Aland Islands",
        "code": "358",
        "value": "AX"
    },
    {
        "label": "Albania",
        "code": "355",
        "value": "AL"
    },
    {
        "label": "Algeria",
        "code": "213",
        "value": "DZ"
    },
    {
        "label": "AmericanSamoa",
        "code": "1684",
        "value": "AS"
    },
    {
        "label": "Andorra",
        "code": "376",
        "value": "AD"
    },
    {
        "label": "Angola",
        "code": "244",
        "value": "AO"
    },
    {
        "label": "Anguilla",
        "code": "1264",
        "value": "AI"
    },
    {
        "label": "Antarctica",
        "code": "672",
        "value": "AQ"
    },
    {
        "label": "Antigua and Barbuda",
        "code": "1268",
        "value": "AG"
    },
    {
        "label": "Argentina",
        "code": "54",
        "value": "AR"
    },
    {
        "label": "Armenia",
        "code": "374",
        "value": "AM"
    },
    {
        "label": "Aruba",
        "code": "297",
        "value": "AW"
    },
    {
        "label": "Australia",
        "code": "61",
        "value": "AU"
    },
    {
        "label": "Austria",
        "code": "43",
        "value": "AT"
    },
    {
        "label": "Azerbaijan",
        "code": "994",
        "value": "AZ"
    },
    {
        "label": "Bahamas",
        "code": "1242",
        "value": "BS"
    },
    {
        "label": "Bahrain",
        "code": "973",
        "value": "BH"
    },
    {
        "label": "Bangladesh",
        "code": "880",
        "value": "BD"
    },
    {
        "label": "Barbados",
        "code": "1246",
        "value": "BB"
    },
    {
        "label": "Belarus",
        "code": "375",
        "value": "BY"
    },
    {
        "label": "Belgium",
        "code": "32",
        "value": "BE"
    },
    {
        "label": "Belize",
        "code": "501",
        "value": "BZ"
    },
    {
        "label": "Benin",
        "code": "229",
        "value": "BJ"
    },
    {
        "label": "Bermuda",
        "code": "1441",
        "value": "BM"
    },
    {
        "label": "Bhutan",
        "code": "975",
        "value": "BT"
    },
    {
        "label": "Bolivia, Plurinational State of",
        "code": "591",
        "value": "BO"
    },
    {
        "label": "Bosnia and Herzegovina",
        "code": "387",
        "value": "BA"
    },
    {
        "label": "Botswana",
        "code": "267",
        "value": "BW"
    },
    {
        "label": "Brazil",
        "code": "55",
        "value": "BR"
    },
    {
        "label": "British Indian Ocean Territory",
        "code": "246",
        "value": "IO"
    },
    {
        "label": "Brunei Darussalam",
        "code": "673",
        "value": "BN"
    },
    {
        "label": "Bulgaria",
        "code": "359",
        "value": "BG"
    },
    {
        "label": "Burkina Faso",
        "code": "226",
        "value": "BF"
    },
    {
        "label": "Burundi",
        "code": "257",
        "value": "BI"
    },
    {
        "label": "Cambodia",
        "code": "855",
        "value": "KH"
    },
    {
        "label": "Cameroon",
        "code": "237",
        "value": "CM"
    },
    {
        "label": "Canada",
        "code": "1",
        "value": "CA"
    },
    {
        "label": "Cape Verde",
        "code": "238",
        "value": "CV"
    },
    {
        "label": "Cayman Islands",
        "code": "1345",
        "value": "KY"
    },
    {
        "label": "Central African Republic",
        "code": "236",
        "value": "CF"
    },
    {
        "label": "Chad",
        "code": "235",
        "value": "TD"
    },
    {
        "label": "Chile",
        "code": "56",
        "value": "CL"
    },
    {
        "label": "China",
        "code": "86",
        "value": "CN"
    },
    {
        "label": "Christmas Island",
        "code": "61",
        "value": "CX"
    },
    {
        "label": "Cocos (Keeling) Islands",
        "code": "61",
        "value": "CC"
    },
    {
        "label": "Colombia",
        "code": "57",
        "value": "CO"
    },
    {
        "label": "Comoros",
        "code": "269",
        "value": "KM"
    },
    {
        "label": "Congo",
        "code": "242",
        "value": "CG"
    },
    {
        "label": "Congo, The Democratic Republic of the Congo",
        "code": "243",
        "value": "CD"
    },
    {
        "label": "Cook Islands",
        "code": "682",
        "value": "CK"
    },
    {
        "label": "Costa Rica",
        "code": "506",
        "value": "CR"
    },
    {
        "label": "Cote d'Ivoire",
        "code": "225",
        "value": "CI"
    },
    {
        "label": "Croatia",
        "code": "385",
        "value": "HR"
    },
    {
        "label": "Cuba",
        "code": "53",
        "value": "CU"
    },
    {
        "label": "Cyprus",
        "code": "357",
        "value": "CY"
    },
    {
        "label": "Czech Republic",
        "code": "420",
        "value": "CZ"
    },
    {
        "label": "Denmark",
        "code": "45",
        "value": "DK"
    },
    {
        "label": "Djibouti",
        "code": "253",
        "value": "DJ"
    },
    {
        "label": "Dominica",
        "code": "1767",
        "value": "DM"
    },
    {
        "label": "Dominican Republic",
        "code": "1849",
        "value": "DO"
    },
    {
        "label": "Ecuador",
        "code": "593",
        "value": "EC"
    },
    {
        "label": "Egypt",
        "code": "20",
        "value": "EG"
    },
    {
        "label": "El Salvador",
        "code": "503",
        "value": "SV"
    },
    {
        "label": "Equatorial Guinea",
        "code": "240",
        "value": "GQ"
    },
    {
        "label": "Eritrea",
        "code": "291",
        "value": "ER"
    },
    {
        "label": "Estonia",
        "code": "372",
        "value": "EE"
    },
    {
        "label": "Ethiopia",
        "code": "251",
        "value": "ET"
    },
    {
        "label": "Falkland Islands (Malvinas)",
        "code": "500",
        "value": "FK"
    },
    {
        "label": "Faroe Islands",
        "code": "298",
        "value": "FO"
    },
    {
        "label": "Fiji",
        "code": "679",
        "value": "FJ"
    },
    {
        "label": "Finland",
        "code": "358",
        "value": "FI"
    },
    {
        "label": "France",
        "code": "33",
        "value": "FR"
    },
    {
        "label": "French Guiana",
        "code": "594",
        "value": "GF"
    },
    {
        "label": "French Polynesia",
        "code": "689",
        "value": "PF"
    },
    {
        "label": "Gabon",
        "code": "241",
        "value": "GA"
    },
    {
        "label": "Gambia",
        "code": "220",
        "value": "GM"
    },
    {
        "label": "Georgia",
        "code": "995",
        "value": "GE"
    },
    {
        "label": "Germany",
        "code": "49",
        "value": "DE"
    },
    {
        "label": "Ghana",
        "code": "233",
        "value": "GH"
    },
    {
        "label": "Gibraltar",
        "code": "350",
        "value": "GI"
    },
    {
        "label": "Greece",
        "code": "30",
        "value": "GR"
    },
    {
        "label": "Greenland",
        "code": "299",
        "value": "GL"
    },
    {
        "label": "Grenada",
        "code": "1473",
        "value": "GD"
    },
    {
        "label": "Guadeloupe",
        "code": "590",
        "value": "GP"
    },
    {
        "label": "Guam",
        "code": "1671",
        "value": "GU"
    },
    {
        "label": "Guatemala",
        "code": "502",
        "value": "GT"
    },
    {
        "label": "Guernsey",
        "code": "44",
        "value": "GG"
    },
    {
        "label": "Guinea",
        "code": "224",
        "value": "GN"
    },
    {
        "label": "Guinea-Bissau",
        "code": "245",
        "value": "GW"
    },
    {
        "label": "Guyana",
        "code": "595",
        "value": "GY"
    },
    {
        "label": "Haiti",
        "code": "509",
        "value": "HT"
    },
    {
        "label": "Holy See (Vatican City State)",
        "code": "379",
        "value": "VA"
    },
    {
        "label": "Honduras",
        "code": "504",
        "value": "HN"
    },
    {
        "label": "Hong Kong",
        "code": "852",
        "value": "HK"
    },
    {
        "label": "Hungary",
        "code": "36",
        "value": "HU"
    },
    {
        "label": "Iceland",
        "code": "354",
        "value": "IS"
    },
    {
        "label": "India",
        "code": "91",
        "value": "IN"
    },
    {
        "label": "Indonesia",
        "code": "62",
        "value": "ID"
    },
    {
        "label": "Iran, Islamic Republic of Persian Gulf",
        "code": "98",
        "value": "IR"
    },
    {
        "label": "Iraq",
        "code": "964",
        "value": "IQ"
    },
    {
        "label": "Ireland",
        "code": "353",
        "value": "IE"
    },
    {
        "label": "Isle of Man",
        "code": "44",
        "value": "IM"
    },
    {
        "label": "Israel",
        "code": "972",
        "value": "IL"
    },
    {
        "label": "Italy",
        "code": "39",
        "value": "IT"
    },
    {
        "label": "Jamaica",
        "code": "1876",
        "value": "JM"
    },
    {
        "label": "Japan",
        "code": "81",
        "value": "JP"
    },
    {
        "label": "Jersey",
        "code": "44",
        "value": "JE"
    },
    {
        "label": "Jordan",
        "code": "962",
        "value": "JO"
    },
    {
        "label": "Kazakhstan",
        "code": "77",
        "value": "KZ"
    },
    {
        "label": "Kenya",
        "code": "254",
        "value": "KE"
    },
    {
        "label": "Kiribati",
        "code": "686",
        "value": "KI"
    },
    {
        "label": "Korea, Democratic People's Republic of Korea",
        "code": "850",
        "value": "KP"
    },
    {
        "label": "Korea, Republic of South Korea",
        "code": "82",
        "value": "KR"
    },
    {
        "label": "Kuwait",
        "code": "965",
        "value": "KW"
    },
    {
        "label": "Kyrgyzstan",
        "code": "996",
        "value": "KG"
    },
    {
        "label": "Laos",
        "code": "856",
        "value": "LA"
    },
    {
        "label": "Latvia",
        "code": "371",
        "value": "LV"
    },
    {
        "label": "Lebanon",
        "code": "961",
        "value": "LB"
    },
    {
        "label": "Lesotho",
        "code": "266",
        "value": "LS"
    },
    {
        "label": "Liberia",
        "code": "231",
        "value": "LR"
    },
    {
        "label": "Libyan Arab Jamahiriya",
        "code": "218",
        "value": "LY"
    },
    {
        "label": "Liechtenstein",
        "code": "423",
        "value": "LI"
    },
    {
        "label": "Lithuania",
        "code": "370",
        "value": "LT"
    },
    {
        "label": "Luxembourg",
        "code": "352",
        "value": "LU"
    },
    {
        "label": "Macao",
        "code": "853",
        "value": "MO"
    },
    {
        "label": "Macedonia",
        "code": "389",
        "value": "MK"
    },
    {
        "label": "Madagascar",
        "code": "261",
        "value": "MG"
    },
    {
        "label": "Malawi",
        "code": "265",
        "value": "MW"
    },
    {
        "label": "Malaysia",
        "code": "60",
        "value": "MY"
    },
    {
        "label": "Maldives",
        "code": "960",
        "value": "MV"
    },
    {
        "label": "Mali",
        "code": "223",
        "value": "ML"
    },
    {
        "label": "Malta",
        "code": "356",
        "value": "MT"
    },
    {
        "label": "Marshall Islands",
        "code": "692",
        "value": "MH"
    },
    {
        "label": "Martinique",
        "code": "596",
        "value": "MQ"
    },
    {
        "label": "Mauritania",
        "code": "222",
        "value": "MR"
    },
    {
        "label": "Mauritius",
        "code": "230",
        "value": "MU"
    },
    {
        "label": "Mayotte",
        "code": "262",
        "value": "YT"
    },
    {
        "label": "Mexico",
        "code": "52",
        "value": "MX"
    },
    {
        "label": "Micronesia, Federated States of Micronesia",
        "code": "691",
        "value": "FM"
    },
    {
        "label": "Moldova",
        "code": "373",
        "value": "MD"
    },
    {
        "label": "Monaco",
        "code": "377",
        "value": "MC"
    },
    {
        "label": "Mongolia",
        "code": "976",
        "value": "MN"
    },
    {
        "label": "Montenegro",
        "code": "382",
        "value": "ME"
    },
    {
        "label": "Montserrat",
        "code": "1664",
        "value": "MS"
    },
    {
        "label": "Morocco",
        "code": "212",
        "value": "MA"
    },
    {
        "label": "Mozambique",
        "code": "258",
        "value": "MZ"
    },
    {
        "label": "Myanmar",
        "code": "95",
        "value": "MM"
    },
    {
        "label": "Namibia",
        "code": "264",
        "value": "NA"
    },
    {
        "label": "Nauru",
        "code": "674",
        "value": "NR"
    },
    {
        "label": "Nepal",
        "code": "977",
        "value": "NP"
    },
    {
        "label": "Netherlands",
        "code": "31",
        "value": "NL"
    },
    {
        "label": "Netherlands Antilles",
        "code": "599",
        "value": "AN"
    },
    {
        "label": "New Caledonia",
        "code": "687",
        "value": "NC"
    },
    {
        "label": "New Zealand",
        "code": "64",
        "value": "NZ"
    },
    {
        "label": "Nicaragua",
        "code": "505",
        "value": "NI"
    },
    {
        "label": "Niger",
        "code": "227",
        "value": "NE"
    },
    {
        "label": "Nigeria",
        "code": "234",
        "value": "NG"
    },
    {
        "label": "Niue",
        "code": "683",
        "value": "NU"
    },
    {
        "label": "Norfolk Island",
        "code": "672",
        "value": "NF"
    },
    {
        "label": "Northern Mariana Islands",
        "code": "1670",
        "value": "MP"
    },
    {
        "label": "Norway",
        "code": "47",
        "value": "NO"
    },
    {
        "label": "Oman",
        "code": "968",
        "value": "OM"
    },
    {
        "label": "Pakistan",
        "code": "92",
        "value": "PK"
    },
    {
        "label": "Palau",
        "code": "680",
        "value": "PW"
    },
    {
        "label": "Palestinian Territory, Occupied",
        "code": "970",
        "value": "PS"
    },
    {
        "label": "Panama",
        "code": "507",
        "value": "PA"
    },
    {
        "label": "Papua New Guinea",
        "code": "675",
        "value": "PG"
    },
    {
        "label": "Paraguay",
        "code": "595",
        "value": "PY"
    },
    {
        "label": "Peru",
        "code": "51",
        "value": "PE"
    },
    {
        "label": "Philippines",
        "code": "63",
        "value": "PH"
    },
    {
        "label": "Pitcairn",
        "code": "872",
        "value": "PN"
    },
    {
        "label": "Poland",
        "code": "48",
        "value": "PL"
    },
    {
        "label": "Portugal",
        "code": "351",
        "value": "PT"
    },
    {
        "label": "Puerto Rico",
        "code": "1939",
        "value": "PR"
    },
    {
        "label": "Qatar",
        "code": "974",
        "value": "QA"
    },
    {
        "label": "Romania",
        "code": "40",
        "value": "RO"
    },
    {
        "label": "Russia",
        "code": "7",
        "value": "RU"
    },
    {
        "label": "Rwanda",
        "code": "250",
        "value": "RW"
    },
    {
        "label": "Reunion",
        "code": "262",
        "value": "RE"
    },
    {
        "label": "Saint Barthelemy",
        "code": "590",
        "value": "BL"
    },
    {
        "label": "Saint Helena, Ascension and Tristan Da Cunha",
        "code": "290",
        "value": "SH"
    },
    {
        "label": "Saint Kitts and Nevis",
        "code": "1869",
        "value": "KN"
    },
    {
        "label": "Saint Lucia",
        "code": "1758",
        "value": "LC"
    },
    {
        "label": "Saint Martin",
        "code": "590",
        "value": "MF"
    },
    {
        "label": "Saint Pierre and Miquelon",
        "code": "508",
        "value": "PM"
    },
    {
        "label": "Saint Vincent and the Grenadines",
        "code": "1784",
        "value": "VC"
    },
    {
        "label": "Samoa",
        "code": "685",
        "value": "WS"
    },
    {
        "label": "San Marino",
        "code": "378",
        "value": "SM"
    },
    {
        "label": "Sao Tome and Principe",
        "code": "239",
        "value": "ST"
    },
    {
        "label": "Saudi Arabia",
        "code": "966",
        "value": "SA"
    },
    {
        "label": "Senegal",
        "code": "221",
        "value": "SN"
    },
    {
        "label": "Serbia",
        "code": "381",
        "value": "RS"
    },
    {
        "label": "Seychelles",
        "code": "248",
        "value": "SC"
    },
    {
        "label": "Sierra Leone",
        "code": "232",
        "value": "SL"
    },
    {
        "label": "Singapore",
        "code": "65",
        "value": "SG"
    },
    {
        "label": "Slovakia",
        "code": "421",
        "value": "SK"
    },
    {
        "label": "Slovenia",
        "code": "386",
        "value": "SI"
    },
    {
        "label": "Solomon Islands",
        "code": "677",
        "value": "SB"
    },
    {
        "label": "Somalia",
        "code": "252",
        "value": "SO"
    },
    {
        "label": "South Africa",
        "code": "27",
        "value": "ZA"
    },
    {
        "label": "South Sudan",
        "code": "211",
        "value": "SS"
    },
    {
        "label": "South Georgia and the South Sandwich Islands",
        "code": "500",
        "value": "GS"
    },
    {
        "label": "Spain",
        "code": "34",
        "value": "ES"
    },
    {
        "label": "Sri Lanka",
        "code": "94",
        "value": "LK"
    },
    {
        "label": "Sudan",
        "code": "249",
        "value": "SD"
    },
    {
        "label": "Surilabel",
        "code": "597",
        "value": "SR"
    },
    {
        "label": "Svalbard and Jan Mayen",
        "code": "47",
        "value": "SJ"
    },
    {
        "label": "Swaziland",
        "code": "268",
        "value": "SZ"
    },
    {
        "label": "Sweden",
        "code": "46",
        "value": "SE"
    },
    {
        "label": "Switzerland",
        "code": "41",
        "value": "CH"
    },
    {
        "label": "Syrian Arab Republic",
        "code": "963",
        "value": "SY"
    },
    {
        "label": "Taiwan",
        "code": "886",
        "value": "TW"
    },
    {
        "label": "Tajikistan",
        "code": "992",
        "value": "TJ"
    },
    {
        "label": "Tanzania, United Republic of Tanzania",
        "code": "255",
        "value": "TZ"
    },
    {
        "label": "Thailand",
        "code": "66",
        "value": "TH"
    },
    {
        "label": "Timor-Leste",
        "code": "670",
        "value": "TL"
    },
    {
        "label": "Togo",
        "code": "228",
        "value": "TG"
    },
    {
        "label": "Tokelau",
        "code": "690",
        "value": "TK"
    },
    {
        "label": "Tonga",
        "code": "676",
        "value": "TO"
    },
    {
        "label": "Trinidad and Tobago",
        "code": "1868",
        "value": "TT"
    },
    {
        "label": "Tunisia",
        "code": "216",
        "value": "TN"
    },
    {
        "label": "Turkey",
        "code": "90",
        "value": "TR"
    },
    {
        "label": "Turkmenistan",
        "code": "993",
        "value": "TM"
    },
    {
        "label": "Turks and Caicos Islands",
        "code": "1649",
        "value": "TC"
    },
    {
        "label": "Tuvalu",
        "code": "688",
        "value": "TV"
    },
    {
        "label": "Uganda",
        "code": "256",
        "value": "UG"
    },
    {
        "label": "Ukraine",
        "code": "380",
        "value": "UA"
    },
    {
        "label": "United Arab Emirates",
        "code": "971",
        "value": "AE"
    },
    {
        "label": "United Kingdom",
        "code": "44",
        "value": "GB"
    },
    {
        "label": "United States",
        "code": "1",
        "value": "US"
    },
    {
        "label": "Uruguay",
        "code": "598",
        "value": "UY"
    },
    {
        "label": "Uzbekistan",
        "code": "998",
        "value": "UZ"
    },
    {
        "label": "Vanuatu",
        "code": "678",
        "value": "VU"
    },
    {
        "label": "Venezuela, Bolivarian Republic of Venezuela",
        "code": "58",
        "value": "VE"
    },
    {
        "label": "Vietnam",
        "code": "84",
        "value": "VN"
    },
    {
        "label": "Virgin Islands, British",
        "code": "1284",
        "value": "VG"
    },
    {
        "label": "Virgin Islands, U.S.",
        "code": "1340",
        "value": "VI"
    },
    {
        "label": "Wallis and Futuna",
        "code": "681",
        "value": "WF"
    },
    {
        "label": "Yemen",
        "code": "967",
        "value": "YE"
    },
    {
        "label": "Zambia",
        "code": "260",
        "value": "ZM"
    },
    {
        "label": "Zimbabwe",
        "code": "263",
        "value": "ZW"
    }
];

export default countries;
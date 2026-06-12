const CountryProfiles = [
    {
        name: "India",
        weight: 1420, //1420

        economy: {
            gdpPerCapitaUSD: 2695,
            gdpTotalBillionUSD: 3910
        },

        lifeExpectancy: {
            male: 66.5,
            female: 70.1
        },

        medianAge: {
            male: 29.1,
            female: 30.5
        },

        sex: [
            { name: "male", weight: 731 },
            { name: "female", weight: 688 }
        ],

        ethnicity: [
            { name: "Indo-Aryan", weight: 1022 },
            { name: "Dravidian", weight: 355 },
            { name: "Other", weight: 43 }
        ],

        religion: [
            { name: "Hindu", weight: 1133 },
            { name: "Muslim", weight: 202 },
            { name: "Christian", weight: 33 },
            { name: "Sikh", weight: 24 },
            { name: "Other / unspecified", weight: 28 }
        ],

        languages: [
            { name: "Hindi", weight: 619 },
            { name: "Bengali", weight: 114 },
            { name: "Marathi", weight: 98 },
            { name: "Telugu", weight: 95 },
            { name: "Tamil", weight: 81 },
            { name: "Gujarati", weight: 65 },
            { name: "Urdu", weight: 60 },
            { name: "Kannada", weight: 51 },
            { name: "Other", weight: 80 }
        ],

        locations: [
            { name: "New Delhi", weight: 33 },
            { name: "Mumbai", weight: 21 },
            { name: "Kolkata", weight: 15 },
            { name: "Bangalore", weight: 14 },
            { name: "Chennai", weight: 12 },
            { name: "Hyderabad", weight: 11 },
            { name: "Other / rural India", weight: 1314 }
        ],

        education: {
            averageIQ: {
                male: 77,
                female: 76
            }
        }
    },

    {
        name: "Germany",
        weight: 84,

        economy: {
            gdpPerCapitaUSD: 56104,
            gdpTotalBillionUSD: 4690
        },

        lifeExpectancy: {
            male: 79.6,
            female: 84.4
        },

        medianAge: {
            male: 45.5,
            female: 48.3
        },

        sex: [
            { name: "male", weight: 41.5 },
            { name: "female", weight: 42.5 }
        ],

        ethnicity: [
            { name: "German", weight: 71.7 },
            { name: "Turkish", weight: 1.5 },
            { name: "Ukrainian", weight: 1.2 },
            { name: "Syrian", weight: 0.9 },
            { name: "Romanian", weight: 0.8 },
            { name: "Polish", weight: 0.8 },
            { name: "Other / unspecified", weight: 7 }
        ],

        religion: [
            { name: "None", weight: 36.8 },
            { name: "Roman Catholic", weight: 20.8 },
            { name: "Protestant", weight: 19 },
            { name: "Muslim", weight: 3.1 },
            { name: "Other", weight: 4.3 }
        ],

        languages: [
            { name: "German", weight: 80 },
            { name: "Turkish", weight: 2 },
            { name: "Arabic", weight: 1.5 },
            { name: "Polish", weight: 1 },
            { name: "Russian", weight: 1 },
            { name: "English", weight: 45 }
        ],

        locations: [
            { name: "Berlin", weight: 3.6 },
            { name: "Hamburg", weight: 1.8 },
            { name: "Munich", weight: 1.6 },
            { name: "Cologne", weight: 1.1 },
            { name: "Frankfurt", weight: 0.8 },
            { name: "Other Germany", weight: 0 }
        ],

        education: {
            averageIQ: {
                male: 101,
                female: 100
            }
        }
    },

    {
        name: "Brazil",
        weight: 211, //221

        economy: {
            gdpPerCapitaUSD: 10616,
            gdpTotalBillionUSD: 2186
        },

        lifeExpectancy: {
            male: 72.6,
            female: 80.1
        },

        medianAge: {
            male: 34,
            female: 36.1
        },

        sex: [
            { name: "male", weight: 108.8 },
            { name: "female", weight: 112.6 }
        ],

        ethnicity: [
            { name: "Mixed", weight: 100 },
            { name: "White", weight: 96 },
            { name: "Black", weight: 23 },
            { name: "Indigenous", weight: 1.3 },
            { name: "Asian", weight: 0.9 }
        ],

        religion: [
            { name: "Roman Catholic", weight: 126 },
            { name: "Evangelical", weight: 60 },
            { name: "None", weight: 21 },
            { name: "Other", weight: 9 },
            { name: "Spiritism", weight: 4 },
            { name: "Umbanda / Candomblé", weight: 2.4 }
        ],

        languages: [
            { name: "Portuguese", weight: 215 },
            { name: "Spanish", weight: 10 },
            { name: "English", weight: 10 },
            { name: "German", weight: 1 },
            { name: "Italian", weight: 1 },
            { name: "Japanese", weight: 0.5 }
        ],

        locations: [
            { name: "São Paulo", weight: 22.6 },
            { name: "Rio de Janeiro", weight: 13.7 },
            { name: "Belo Horizonte", weight: 6.2 },
            { name: "Brasília", weight: 4.9 },
            { name: "Recife", weight: 4.3 },
            { name: "Porto Alegre", weight: 4.2 },
            { name: "Other Brazil", weight: 165.1 }
        ],

        education: {
            averageIQ: {
                male: 88,
                female: 87
            }
        }
    },

    {
        name: "Nigeria",
        weight: 244, //244

        economy: {
            gdpPerCapitaUSD: 1084,
            gdpTotalBillionUSD: 252
        },

        lifeExpectancy: {
            male: 60.4,
            female: 64.2
        },

        medianAge: {
            male: 19.1,
            female: 19.6
        },

        sex: [
            { name: "male", weight: 123.5 },
            { name: "female", weight: 120.8 }
        ],

        ethnicity: [
            { name: "Hausa", weight: 73 },
            { name: "Yoruba", weight: 38 },
            { name: "Igbo", weight: 37 },
            { name: "Fulani", weight: 15 },
            { name: "Tiv", weight: 6 },
            { name: "Kanuri / Beriberi", weight: 6 },
            { name: "Ibibio", weight: 4 },
            { name: "Ijaw / Izon", weight: 4 },
            { name: "Other", weight: 61 }
        ],

        religion: [
            { name: "Muslim", weight: 131 },
            { name: "Roman Catholic", weight: 26 },
            { name: "Other Christian", weight: 86 },
            { name: "Other", weight: 1.5 }
        ],

        languages: [
            { name: "English", weight: 120 },
            { name: "Hausa", weight: 73 },
            { name: "Yoruba", weight: 38 },
            { name: "Igbo", weight: 37 },
            { name: "Fulani", weight: 15 },
            { name: "Other indigenous languages", weight: 100 }
        ],

        locations: [
            { name: "Lagos", weight: 15.9 },
            { name: "Kano", weight: 4.3 },
            { name: "Ibadan", weight: 3.9 },
            { name: "Abuja", weight: 3.8 },
            { name: "Port Harcourt", weight: 3.5 },
            { name: "Benin City", weight: 1.9 },
            { name: "Other Nigeria", weight: 210.7 }
        ],

        education: {
            averageIQ: {
                male: 69,
                female: 68
            }
        }
    },

    {
        name: "Japan",
        weight: 123, //123

        economy: {
            gdpPerCapitaUSD: 32487,
            gdpTotalBillionUSD: 4028
        },

        lifeExpectancy: {
            male: 82.3,
            female: 88.2
        },

        medianAge: {
            male: 48.3,
            female: 51.3
        },

        sex: [
            { name: "male", weight: 59.9 },
            { name: "female", weight: 63.3 }
        ],

        ethnicity: [
            { name: "Japanese", weight: 120 },
            { name: "Chinese", weight: 0.7 },
            { name: "Vietnamese", weight: 0.5 },
            { name: "South Korean", weight: 0.4 },
            { name: "Other", weight: 1.5 }
        ],

        religion: [
            { name: "Shinto", weight: 60 },
            { name: "Buddhist", weight: 57 },
            { name: "Christian", weight: 1.4 },
            { name: "Other", weight: 5 }
        ],

        languages: [
            { name: "Japanese", weight: 121 },
            { name: "English", weight: 20 },
            { name: "Chinese", weight: 1 },
            { name: "Korean", weight: 0.5 },
            { name: "Vietnamese", weight: 0.5 }
        ],

        locations: [
            { name: "Tokyo", weight: 37.2 },
            { name: "Osaka", weight: 19 },
            { name: "Nagoya", weight: 9.6 },
            { name: "Kitakyushu-Fukuoka", weight: 5.5 },
            { name: "Shizuoka-Hamamatsu", weight: 2.9 },
            { name: "Sapporo", weight: 2.7 },
            { name: "Other Japan", weight: 46.1 }
        ],

        education: {
            averageIQ: {
                male: 107,
                female: 106
            }
        }
    }
]

const NamePools = {
    India: {
        male: ["Aarav", "Arjun", "Vihaan", "Aditya", "Rohan", "Kabir"],
        female: ["Aanya", "Diya", "Anika", "Priya", "Isha", "Kavya"],
        last: ["Sharma", "Patel", "Singh", "Kumar", "Reddy", "Gupta"]
    },

    Germany: {
        male: ["Noah", "Leon", "Paul", "Elias", "Lukas", "Felix", "Torben", "Bernhard", "Kevin", "Paul"],
        female: ["Emma", "Mia", "Hannah", "Emilia", "Lina", "Sofia", "Elisabeth", "Getrude", "Mathilda", "Erika", "Sabine"],
        last: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Wagner", "Meyer", "Becker", "Schäfer", "Bauer", "Wolf", "Schwarz", "Wolf", "Schröder", "Zimmermann", "Krause", "Lehmann"]
    },

    Brazil: {
        male: ["Miguel", "Arthur", "Heitor", "Davi", "Gabriel", "Lucas"],
        female: ["Maria", "Ana", "Julia", "Sofia", "Laura", "Isabella"],
        last: ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa"]
    },

    Nigeria: {
        male: ["Chinedu", "Emeka", "Tunde", "Ibrahim", "Musa", "David"],
        female: ["Amina", "Ngozi", "Blessing", "Funke", "Zainab", "Chioma"],
        last: ["Okafor", "Adebayo", "Musa", "Ibrahim", "Eze", "Balogun"]
    },

    Japan: {
        male: ["Haruto", "Yuto", "Sota", "Ren", "Daiki", "Kaito"],
        female: ["Yui", "Aoi", "Hina", "Sakura", "Mei", "Rin"],
        last: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito"]
    }
}
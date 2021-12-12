const express = require('express');

const app = express();

const cars = [
    {
        id: "1",
        name: "Mitsubishi Lancer",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "5",
        speed: "250",
        acc: "42.4",
        handling: "46.3",
        nitro: "54.8",
        mspeed: "270.1",
        macc: "55.03",
        mhandling: "53.79",
        mnitro: "68.19",
        stars: "3",
        blueprints: "5,8,30",
        ranks: "467,791,1094,1381"
    },
    {
        id: "2",
        name: "BMW Z4 LCI E89",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "5",
        speed: "250",
        acc: "58.6",
        handling: "39.02",
        nitro: "45.09",
        mspeed: "266.8",
        macc: "68.86",
        mhandling: "47.43",
        mnitro: "57.49",
        stars: "3",
        blueprints: "5,8,45",
        ranks: "518,791,1177,1381"
    },
    {
        id: "3",
        name: "SCG 003S",
        class: "B",
        type: "Rare",
        fuel: "5",
        refillTimeMin: "100",
        speed: "350",
        acc: "73",
        handling: "33.33",
        nitro: "50.68",
        mspeed: "368.8",
        macc: "79.44",
        mhandling: "38.58",
        mnitro: "63.1",
        stars: "4",
        blueprints: "40,18,24,36",
        ranks: "2211,2449,2824,3193,3519"
    },
    {
        id: "4",
        name: "Nissan GT R Nismo",
        class: "A",
        type: "Rare",
        fuel: "5",
        refillTimeMin: "180",
        speed: "315",
        acc: "77.5",
        handling: "48.8",
        nitro: "43.24",
        mspeed: "329.7",
        macc: "84.83",
        mhandling: "60.69",
        mnitro: "60.6",
        stars: "4",
        blueprints: "45,21,28,42",
        ranks: "2083,2324,2580,2875,3157"
    },
    {
        id: "5",
        name: "Icona Vulcano Titanium",
        class: "S",
        type: "Epic",
        fuel: "4",
        refillTimeMin: "300",
        speed: "370",
        acc: "75.7",
        handling: "35.26",
        nitro: "53.84",
        mspeed: "381.7",
        macc: "81.38",
        mhandling: "43.38",
        mnitro: "65.89",
        stars: "5",
        blueprints: "40,13,16,25,39",
        ranks: "2907,3061,3238,3412,3682,3957"
    },
    {
        id: "6",
        name: "Chevrolet Camaro LT",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "15",
        speed: "265",
        acc: "51.4",
        handling: "41.17",
        nitro: "48.53",
        mspeed: "284.1",
        macc: "64.81",
        mhandling: "48.39",
        mnitro: "63.29",
        stars: "3",
        blueprints: "5,12,30",
        ranks: "556,910,1238,1546"
    },
    {
        id: "7",
        name: "Nissan Leaf Nismo RC",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "15",
        speed: "220",
        acc: "69.4",
        handling: "38.17",
        nitro: "48.27",
        mspeed: "244.5",
        macc: "78.87",
        mhandling: "59.91",
        mnitro: "64.03",
        stars: "3",
        blueprints: "5,25,55",
        ranks: "311,761,1179,1569"
    },
    {
        id: "8",
        name: "Nissan 370Z Nismo",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "15",
        speed: "250",
        acc: "53.2",
        handling: "52.37",
        nitro: "41.85",
        mspeed: "268.5",
        macc: "66.61",
        mhandling: "81.83",
        mnitro: "67.07",
        stars: "3",
        blueprints: "10,12,30",
        ranks: "620,990,1335,1662"
    },
    {
        id: "9",
        name: "Volkswagen XL Sport Concept",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "15",
        speed: "270",
        acc: "46.9",
        handling: "49.35",
        nitro: "42.32",
        mspeed: "291.2",
        macc: "60.31",
        mhandling: "62.02",
        mnitro: "61.94",
        stars: "3",
        blueprints: "20,12,30",
        ranks: "706,1097,1463,1814"
    },
    {
        id: "10",
        name: "DS Automobiles DS E-Tense",
        class: "D",
        type: "Uncommon",
        fuel: "6",
        refillTimeMin: "15",
        speed: "250",
        acc: "59.5",
        handling: "45.09",
        nitro: "51.56",
        mspeed: "270.1",
        macc: "76.07",
        mhandling: "81.27",
        mnitro: "72.03",
        stars: "3",
        blueprints: "20,12,30",
        ranks: "799,1218,1610,1976"
    }
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send("<h2>Information about this API will live here.</h2><p>The cars api is at /api/cars.<p>");
});

app.get('/api/cars', (req, res) => {
    res.json(cars);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
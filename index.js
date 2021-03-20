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
    }
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/cars', (req, res) => {
    res.json(cars);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
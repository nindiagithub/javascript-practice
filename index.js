
// String and Number
const namaBuku = "Chronicles of Narnia S1";
const jumlahStock = 5;
console.log(`Buku berjudul ${namaBuku} mempunyai ${jumlahStock} stock`);

// Boolean
const adaStockUntukSeason2 = true;
const adaStockUntukSeason3 = false;
console.log(adaStockUntukSeason2);
console.log(adaStockUntukSeason3);

// Null
const conSeason3 = null;
console.log(conSeason3);

// Undefined
const conSeason4 = undefined;
console.log(conSeason4);

// Object

const narniaS1 = {
    namabuku: "Chronicles of Narnia S1",
    detail: {
        jumlahSeries: "3 series",
        rak: "rak ke 4A kolom 5",
        status: "best-seller"
    },
    series: [
        "Chronicles of Narnia S1 - White Witch",
        "Chronicles of Narnia S1 - Fair World",
        "Chronicles of Narnia S1 - Black Hole"
    ]
}

console.log(narniaS1.namabuku)
console.log(narniaS1["detail"]["rak"])
console.log(narniaS1.detail["status"])

// Array

const narniaS2 = [
    "Chronicles of Narnia S2 - New Beginning",
    "Chronicles of Narnia S2 - Prince of Caspian",
    "Chronicles of Narnia S1 - White Dragon"
]

console.log(narniaS2);


/*1. Buatlah sebuah filter function untuk menyaring nama 
participants yang huruf tengahnya mengandung huruf  "bebas" 
tapi namanya harus lebih dari 1 kata*/
var participants = [
    {
        name: "Muhammad Fardan",
        score: 10,
        hobbies: ["Ngoding", "Ngepush", "Ngegombal"]
    },
    {
        name: "Nur Saadah",
        score: 5,
        hobbies: ["Ngelawak", "Ngangenin", "Nyamanin"]
    },
    {
        name: "Nellammm Kharisa",
        score: 7,
        hobbies: ["Nyanyi Dangdut"]
    }
];
var filteredMiddleName = participants.filter(function(p) {

    //ambil total huruf
    var totalHuruf = p.name.length;

    //cari nilai tengah
    var nilaiTengah = totalHuruf / 2;

    //jika nilai tengah genap set bahwa dia genap, jika tidak berarti ganjil
    var isGenap = (nilaiTengah % 2 === 0) ? true : false;
    
    //set nilai index, jika nilai genap langsung kasih dari var nilai Tengah
    //jika ganjil bulatkan kek atas nilai tengah
    var index = isGenap ? nilaiTengah : Math.ceil(nilaiTengah);

    //gunakan variable index -1 untuk mengetahui index tengahnya
    return p.name[index  - 1].toLowerCase() === "m";
});

console.log("Filter Middle Name :", filteredMiddleName);
console.log("========================================================");
/*2. var kata = "aku suka makan nasi padang"
pecahlah variable tersebut menjadi array dengan ekspektasi 
output seperti berikut:
[
    "aku suka",
    "aku suka makan",
    "aku suka makan nasi",
    "aku suka makan nasi padang"
]*/
var kata ;
kata = ['aku','suka','makan','nasi','padang'];

for(var i = 0; i <=4; i+=1){
    console.log(kata.slice(0,i+1).join(' '));
}
console.log("====================================================");

/*3. Buatlah 1 contoh penggunaan array function 
-> map, filter, foreach, find, findIndex
notes : tidak boleh sama dengan contoh*/

//MAP
var numbers = [6, 42, 4, 81, 56, 33];
var team = [
    {
        name : 'fardan',
        age : 20,
    },
    {
        name : 'nur',
        age : 20,
    }
]
team.map(teamMember => teamMember.age -= 10)
console.log(team)
console.log("============MAP=====================")
// FILTEr
var numbers = [7, 10, 55, 66, 77, 89];
var filterNumbers = 
    numbers.filter(number => (number > 20 && number < 90));
    console.log(filterNumbers);
    console.log("===========FILTER=================")
// foreach
var film = ['Naruto','One Piece','Black Clover','Kimi no Nawa' ];
film.forEach(function(p){
    console.log(p);
    console.log("===================forEach=====================")
});
// Find
var heroes = [
    { nama: 'Superman' },
    { nama: 'CaptIndonesia' },
    { nama: 'Pitung' }
];

var pilihHero = '';

for (var i = 0; i < heroes.length; i++) {
    if (heroes[i].nama === 'Pitung') {
        pilihHero = heroes[i];
        break;
    }
}
console.log(pilihHero);

// FINDINDEX
var array = [10, 32, 8, 30, 44];

function isLargeNumber(element) {
  return element > 10;
}
console.log(array.findIndex(isLargeNumber));
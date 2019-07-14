//Bollean
var status = "Nikah";
var nama = "fardan";
if(status == "Nikah" || nama =="fardan"){
    console.log("Maka : " + true)
}else{
    console.log("Maka : " + false);
}

//Array
var data_array = ['Data 1','Data 2','Data 3','Data 4'];
    console.log(data_array);

//Object
var data_object = {
    id : 1,
    nama_makanan : "kebab",
    harga   : 20.000
};
console.log(data_object);

// Array Of Object
var data_array_of_object = {
    {
        id_object : 2,
        nama_object : "Nama kamu",
        data_object : data_object
    },
    {
        id_object : 3,
        nama_object : "Nama Dia",
        data_object : data_array
    }
};
console.log(data_array_of_object);

var oke =[
    {
        nama : "Muhammad fardan",
        age : 20,
        gender : "Male"
    },
    {
        nama : "Annisa",
        age   : 22,
        gender : "FeMale"
    },
    {
        nama : "Susi",
        age : 25,
        gender : "Male"
    }
];

var i = 0;

while(i < oke.length){
    var no = i+1;
    console.log("Ini Urutan Ke = " + no++ +" "+oke[i].nama + " - " + oke[i].age + " - " + oke[i].gender);
    i++;
};
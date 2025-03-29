console.log('masuk')
let hasil = 0
let kolom1 = 0
let kolom2 = 0
let kolom3 = 0
let kat = "-"

function tampilhasil(param1, param2){
    document.getElementById("hasil").innerHTML = param1 + "( Score " + param2 + " )"
}

function kategori(parameter){
    if(parameter >= -8 && parameter <= -2){
        kat = "LOW"
    }else if(parameter >= -1 && parameter <= 2){
        kat = "MODERATE"
    }else if(parameter >= 3 && parameter <= 17){
        if (document.getElementById('kolom212').checked == true){
            kat = "EXTREME"
        }else{
            kat = "HIGH"
        }
    }else if(parameter >= 18 && parameter <= 30){
        kat = "EXTREME"
    }else{
        kat = "-"
    }
    tampilhasil(kat,parameter)
    return kat
}

function myFunction1(parameter) {
    var checkbox = document.getElementById(parameter)
    if (checkbox.checked) {
        kolom1 = kolom1 - 1
    } else {
        kolom1 = kolom1 + 1
    }
    hasil = kolom1 + kolom2 + kolom3
    kategori(hasil)
}

function myFunction2(parameter) {
    var checkbox = document.getElementById(parameter)
    if (checkbox.checked) {
        kolom2 = kolom2 + 2
    } else {
        kolom2 = kolom2 - 2
    }
    hasil = kolom1 + kolom2 + kolom3
    kategori(hasil)
}

function myFunction3(parameter) {
    var checkbox = document.getElementById(parameter)
    if (checkbox.checked) {
        kolom3 = kolom3 + 3
    } else {
        kolom3 = kolom3 - 3
    }
    hasil = kolom1 + kolom2 + kolom3
    kategori(hasil)
}

document.getElementById('refresh').addEventListener("click", function (e) {
    document.getElementById("kolom11").checked = false;
    document.getElementById("kolom12").checked = false;
    document.getElementById("kolom13").checked = false;
    document.getElementById("kolom14").checked = false;
    document.getElementById("kolom15").checked = false;
    document.getElementById("kolom16").checked = false;
    document.getElementById("kolom17").checked = false;
    document.getElementById("kolom18").checked = false;

    document.getElementById("kolom211").checked = false;
    document.getElementById("kolom212").checked = false;
    document.getElementById("kolom213").checked = false;
    
    document.getElementById("kolom221").checked = false;
    document.getElementById("kolom222").checked = false;
    document.getElementById("kolom223").checked = false;
    document.getElementById("kolom224").checked = false;
    document.getElementById("kolom225").checked = false;

    document.getElementById("kolom31").checked = false;
    document.getElementById("kolom32").checked = false;
    document.getElementById("kolom33").checked = false;
    document.getElementById("kolom34").checked = false;

    hasil = 0
    kolom1 = 0
    kolom2 = 0
    kolom3 = 0
    kat = ""
    document.getElementById("hasil").innerHTML = "-"

    // window.location.reload()
})

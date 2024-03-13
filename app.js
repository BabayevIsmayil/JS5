// var name = prompt("adin nedi ?"); 
// var age = +prompt("yasin necedi ?")



// adimi ve yasimi sorussun
// adimin uzunlugu ve yasimin cemi 25 50xal 
// 25-10 arasindadirsa 30xal 
// 10-5 arasindadirsa 10xal 
// 5-1 arasindadirsa 0xal 
// eger menim adim 3 herfden balacadirsa xeberdarliq etsin


var ad = prompt("Adiniz nədir?");
var yas = prompt("Neçə yasindasiniz?");

// Adin uzunlugu ve yasheddini  hesaplasin
var aduzunlugu = ad.length;
var yasheddi = aduzunlugu + parseInt(yas);

// xali hesaplasin
var xal;

if (yasheddi >= 50) {
    xal = 50;
} else if (yasheddi >= 25) {
    xal = 30;
} else if (yasheddi >= 10) {
    xal = 10;
} else if (yasheddi >= 5) {
    xal = 0;
} else {
    xal = 0;
}

// Eger ad 3 herfden balacadirsa xeberdarliq etsin
if (aduzunlugu < 3) {
    alert("Diqqet! Adiniz 3 herften balacadir. Xəbərdarliq!");
}

// Mene xali goster
alert("xaliniz: " + xal);



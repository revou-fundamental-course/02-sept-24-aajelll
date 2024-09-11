function calculateArea1() { //LUAS SEGITIGA
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;
  var hasilLuas = 0.5 * alas * tinggi; //rumus
  document.getElementById("result1").innerHTML = //menambahkan text pada html untuk hasilnya 
    "Luas Segitiga: 1/2 x " + alas + " x " + tinggi + "<br>" +
    "Luas Segitiga: " + hasilLuas;
}

function calculateArea2() { //KELILING SEGITIGA
  var sisi1 = parseFloat (document.getElementById("sisi1").value); //mengambil nilai dari input pada sisi1
  var sisi2 = parseFloat (document.getElementById("sisi2").value);
  var sisi3 = parseFloat (document.getElementById("sisi3").value);
  var hasilKeliling = sisi1 + sisi2 + sisi3;
  document.getElementById("result2").innerHTML =
    "Keliling Segitiga: " + sisi1 + " + " + sisi2 + " + " + sisi3 + "<br>" +
    "Keliling Segitiga: " + hasilKeliling;
}

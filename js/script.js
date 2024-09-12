function calculateArea1() { //LUAS SEGITIGA
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;

  if (alas == '' || tinggi == ''|| alas.includes('e') || tinggi.includes('e')) {
    alert('Masukkan Nilai Terlebih Dahulu');
    return;
  }
  var hasilLuas = 0.5 * alas * tinggi; //rumus

  document.getElementById("result1").innerHTML = //menambahkan text pada html untuk hasilnya 
    "Luas Segitiga: 1/2 x " + alas + " x " + tinggi + "<br>" +
    "Luas Segitiga: " + hasilLuas;
}

function calculateArea2() { //KELILING SEGITIGA
  var sisi1 = document.getElementById("sisi1").value; //mengambil nilai dari input pada sisi1
  var sisi2 = document.getElementById("sisi2").value;
  var sisi3 = document.getElementById("sisi3").value;

  if (sisi1 == '' || sisi2 == '' || sisi3 == '' || isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) { //NaN atau not a number digunakan untuk input yang tidak valid
    alert('Masukkan Nilai Terlebih Dahulu');
    return;
  }

  sisi1 = parseFloat(sisi1);
  sisi2 = parseFloat(sisi2);
  sisi3 = parseFloat(sisi3);

  var hasilKeliling = sisi1 + sisi2 + sisi3;
  
  document.getElementById("result2").innerHTML =
    "Keliling Segitiga: " + sisi1 + " + " + sisi2 + " + " + sisi3 + "<br>" +
    "Keliling Segitiga: " + hasilKeliling;
}

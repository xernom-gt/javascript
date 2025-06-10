function hitungSegitiga() {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let luas = 0.5 * alas * tinggi;
    let miring = Math.sqrt(alas*2 + tinggi*2);
    let keliling = alas + tinggi + miring;
    document.getElementById('output').innerText =
      'Luas: ' + luas + ', Keliling (asumsi segitiga siku-siku): ' + keliling;
  }
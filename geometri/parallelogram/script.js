function hitungJajargenjang() {
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);
    let miring = parseFloat(document.getElementById('miring').value);
    let luas = alas * tinggi;
    let keliling = 2 * (alas + miring);
    document.getElementById('output').innerText =
      'Luas: ' + luas + ', Keliling: ' + keliling;
  }
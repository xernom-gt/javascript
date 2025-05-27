function TAX(){
    const value = Number(document.getElementById('harga').value);
    let pajak = value * (11 / 100);
    let total = value + pajak;

    const hasil = document.getElementById('hasil')
    hasil.innerHTML = '';


    console.log(hasil)

    let harga = document.createElement('p');
    harga.textContent = `Harga: Rp ${value}`;
    let tax = document.createElement('p');
    tax.textContent = `Pajak: Rp ${pajak}`;
    let all = document.createElement('p');
    all.textContent = `Total: Rp ${total}`;

    hasil.appendChild(harga);
    hasil.appendChild(tax);
    hasil.appendChild(all);

}

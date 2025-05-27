function konversimatauang(){
    const matauang = Number(document.getElementById("Rupiah").value);
    let convert = matauang / 15000;
    document.getElementById('hasil').innerText= convert + ' USD'
}
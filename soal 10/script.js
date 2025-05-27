function convert(){
    const age = Number(document.getElementById('age').value);
    let convert = 2025 - age;
    let final = convert;

    document.getElementById('hasil').innerText = 'umur kamu di 2025 adalah ' + final
}
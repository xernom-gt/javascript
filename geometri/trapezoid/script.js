function process(){
    const a = Number(document.getElementById('a').value)
    const b = Number(document.getElementById('b').value)
    const t = Number(document.getElementById('t').value)

    let result = 1/2 * (a+b) * t

    document.getElementById('hasil').innerText = 'hasilnya adalah ' + result
}
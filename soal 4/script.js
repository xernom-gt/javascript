function Rectangle(){
    const length = Number(document.getElementById('lenght').value)
    const width = Number(document.getElementById('width').value)
    let result = 2 * (length * width)
    document.getElementById('result').innerText = 'hasilnya adalah : ' + result + ' cm2'
}
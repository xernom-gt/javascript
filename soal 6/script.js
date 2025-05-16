function kite(){
    const value = Number(document.getElementById('short').value)
    const value2 = Number(document.getElementById('long').value)
    let result = 2 * (value * value2)
    document.getElementById('result').innerHTML = 'hasilnya adalah : ' + result + ' cm2' 
}
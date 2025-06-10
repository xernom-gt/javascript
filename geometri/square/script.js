function count(){ 
    let value = Number(document.getElementById('value1').value)
    let result1 = value * value
    console.log(value*value)
    document.getElementById('result').innerText ='hasilnya adalah : '+ result1 + ' cm2'
}
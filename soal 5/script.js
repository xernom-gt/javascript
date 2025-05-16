function Circle() {
    const radius = Number(document.getElementById('circle-radius').value)   
    if (radius % 7 === 0){
        let result = 2 * 22/7 * radius
        document.getElementById('result').innerText = 'hasilnya adalah : ' + result + ' cm2'
    }
    
    else {
        let result2 = 2 * 3.14 * radius
        document.getElementById('result').innerText = 'hasilnya adalah : ' + result2 + ' cm2'
    }
}
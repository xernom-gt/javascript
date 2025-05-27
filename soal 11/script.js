function process(){
    const value = Number(document.getElementById('angka').value)
    
    if (value % 2 === 0){
        document.getElementById('hasil').innerText = 'bilangan ini adalah genap' 
    }
    
    else {
        document.getElementById('hasil').innerText = 'bilangan ini adalah ganjil' 
    }
}
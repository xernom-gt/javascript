function convertToFahrenheit() {
    const celcius = Number(document.getElementById('celcius').value)
    let AF = (celcius * 9/5) + 32
    document.getElementById('hasil').innerText = AF + 'F'
    return AF
}

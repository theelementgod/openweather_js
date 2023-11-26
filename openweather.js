const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const cityZip = form[0].value
    openWeatherData(cityZip)
})

const openWeatherData = async (cityZip) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${cityZip},us&appid=e35a420e82dbb84f0597aa668af49f1c&metric=imperial`)
    const data = await response.json()
    const tempHigh = `((((${data['main']['temp_max']})-273.15)*1.8)+32)`
    const tempLow = `((((${data['main']['temp_min']})-273.15)*1.8)+32)`
    document.body.innerHTML = `
        <div class="card border-dark" style="width:400px">
                <div class="card-body">
                    <h3>Weather for ${data['name']}:</h3>
                    <p class="card-ability">High: ${tempHigh}°F</p>
                    <p class="card-ability">Low: ${tempLow}°F</p>
                    <p class="card-ability">Forcast: ${data['weather']['0']['description']}</p>
                    <p class="card-ability">Humidity: ${data['main']['humidity']}%</p>

                </div>
            </div>
    `
    console.log(data)
    console.log`(typeof ${data['main']['temp_max']})`
}

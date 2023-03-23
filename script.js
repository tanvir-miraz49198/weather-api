document.getElementById("search").addEventListener('click', function(){
    const result = document.getElementById("result").value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ result +'&appid=03a72295695e1d0b5037064384a9655e')
   .then(res => res.json())
   .then(data => {
    const city = data.name;
    const tem = data.main.temp;
    temp = tem - 273.15;
    const description = data.weather[0].description;

    const ans1 = document.getElementById("city").innerText = city;
    const temperature = document.getElementById("temp").innerText = temp.toFixed(2) ;
    const weather = document.getElementById("lead").innerText = description
    })
    .catch((res)=>alert("Please type right city"))
  })

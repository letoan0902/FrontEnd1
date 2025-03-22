const weatherData = [
    {
        city: "Hà Nội",
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    {
        city: "Hồ Chí Minh",
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    {
        city: "Đà Nẵng",
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
];

let button = document.getElementById("button");
let input = document.getElementById("input");
let result = document.getElementById("result");

button.addEventListener("click",function(){
    result.innerHTML="";
    if(input.value==""){
        result.innerHTML += `<p style="color: red;">Hãy nhập tên thành phố!</p>`
    } else {
        let cityList = weatherData.filter(element => element.city.toLowerCase().includes(input.value.toLowerCase()));
        if(cityList.length==0){
            result.innerHTML += `<p style="color: red;">Không tìm thấy thành phố nào!</p>`
        }
        cityList.forEach(element=> {
            result.innerHTML += `
            <h2 id="textBody">${element.city}</h2>
            <table>
                <tr>
                    <td id="icon">${element.icon}</td>
                    <td id="temperature">${element.temperature}°C</td>
                    <td id="info">
                        <p id="description">${element.description}</p>
                        <p id="humidity">Độ ẩm: ${element.humidity}%</p>
                        <p id="windSpeed">Tốc độ gió: ${element.windSpeed} km/h</p>
                    </td>
                </tr>
            </table>`;
        });
    }
});

console.log("weather app");
 functionfetchAPI(){
 const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=UFSHJ6CKHYGJ597DRV94R8TQ5';
 fetch(url)
 .then((res)=>res.json())
 .then(console.log);
}
fetchAPI();

function renderUI(data){
    const days = data.days;
    console.log(days);
    const row = document.createElement("tr");
    const cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th")
    cell2.innerText = 'Maximun Temp';
    row.appendChild(cell2);

    const cell3 = document.createElement("th")
    cell3.innerText = 'Maximun Temp';
    row.appendChild(cell3);

    root.append(row)
}
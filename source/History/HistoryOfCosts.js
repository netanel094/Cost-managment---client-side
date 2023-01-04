function showByMonth() {

    let date = document.getElementById("date").value;
    let year = date.split("-")[0];
    let month = date.split("-")[1];
    console.log(year, month);

    let keys = Object.keys(localStorage);

    // Loop through the keys and get the values
    for (var i = 0; i < keys.length; i++) {


        var key = keys[i];
        var value = localStorage.getItem(key);
        const myOB = JSON.parse(value);

        if (key != "i" && myOB.Date_.split("-")[0] == year && myOB.Date_.split("-")[1] == month) {
            document.write(key);
            document.write(value + "<br>");
        }
    }
}



function showByYear() {

    let date = document.getElementById("year").value;
    let year = date;
    console.log(year);

    let keys = Object.keys(localStorage);


    var table = '<table class="table table-dark"><thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Description</th><th scope="col">Sum</th></tr></thead><tbody>'

    // Loop through the keys and get the values
    for (var i = 0; i < keys.length; i++) {

        var key = keys[i];
        var value = localStorage.getItem(key);
        const myOB = JSON.parse(value);

        table += '<tr>';
            if (key != "i" && myOB.Date_.split("-")[0] == year) 
            {
                table += '<td>' + value["Date_"] + '</td>';
                table += '<td>' + value["Category"] + '</td>';
                table += '<td>' + value.Name + '</td>';
                table += '<td>' + value.Sum + '</td>';
            };
        table += "</tr>"
    }

    table += `</tbody></table>`;
    document.getElementById("result").innerHTML= table;
}

// Netanel Yomtovian 207498700
// Itay Yaakov 206777989
// Kobi Nissim 313202996

class LocalStorageWrapper {
  constructor() {
    this.storage = window.localStorage;
  }

  async addItem(Name, Sum, Category, date, i) {
    try {
      const data = { Name: Name, Sum: Sum, Category: Category, Date_: date };

      await this.storage.setItem("item" + i, JSON.stringify(data));
    } catch (error) {
      console.error("failed to add item" + error);
    }
  }
}

async function createItem(name, sum, category, date, i) {
  const storage = new LocalStorageWrapper();
  await storage.addItem(name, sum, category, date, i);
  i++;
  await localStorage.setItem("i", i);
  openPopup();
}

async function showByYear() {
  let date = document.getElementById("year").value;
  let year = date;
  let total = 0;
  console.log(year);

  let keys = await Object.keys(localStorage);

  var table =
    '<table class="table table-dark"><thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Description</th><th scope="col">Sum</th></tr></thead><tbody>';

  // Loop through the keys and get the values
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = await localStorage.getItem(key);
    var new_value = JSON.parse(value);
    const myOB = JSON.parse(value);

    table += "<tr>";
    if (key != "i" && myOB.Date_.split("-")[0] == year) {
      table += "<td>" + new_value.Date_ + "</td>";
      table += "<td>" + new_value.Category + "</td>";
      table += "<td>" + new_value.Name + "</td>";
      table += "<td>" + new_value.Sum + "</td>";
      total += parseInt(new_value.Sum);
    }
    table += "</tr>";
  }

  table += `</tbody></table>`;
  document.getElementById("result").innerHTML = table;
  document.getElementById("total").innerHTML = `The total amount is: ${total}`;
}

async function showByMonth() {
  let date = document.getElementById("date").value;
  let year = date.split("-")[0];
  let month = date.split("-")[1];
  let total = 0;
  console.log(year, month);

  let keys = await Object.keys(localStorage);
  var table =
    '<table class="table table-dark"><thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Description</th><th scope="col">Sum</th></tr></thead><tbody>';

  // Loop through the keys and get the values
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = await localStorage.getItem(key);
    var new_value = JSON.parse(value);
    const myOB = JSON.parse(value);
    table += "<tr>";
    if (
      key != "i" &&
      myOB.Date_.split("-")[0] == year &&
      myOB.Date_.split("-")[1] == month
    ) {
      table += "<td>" + new_value.Date_ + "</td>";
      table += "<td>" + new_value.Category + "</td>";
      table += "<td>" + new_value.Name + "</td>";
      table += "<td>" + new_value.Sum + "</td>";
      total += parseInt(new_value.Sum);
    }
    table += "</tr>";
  }
  table += `</tbody></table>`;
  document.getElementById("result").innerHTML = table;
  document.getElementById("total").innerHTML = `The total amount is: ${total}`;
}

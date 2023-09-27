let employerdata = JSON.parse(localStorage.getItem("form-details"));

let reject = [];

let count = 0;

displaydata(employerdata);

function displaydata(employerdata) {
  employerdata.map(function (elem, index, array) {
    console.log(employerdata);

    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = elem.name;

    let col2 = document.createElement("td");
    col2.innerText = elem.email;

    // let col3 = document.createElement("td");
    // col3.innerText = elem.password;

    let col4 = document.createElement("td");
    col4.innerText = elem.phone;

    let col5 = document.createElement("td");
    col5.innerText = elem.industry;

    let col6 = document.createElement("td");
    col6.innerText = elem.description;

    let col7 = document.createElement("td");
    col7.innerText = elem.address;

    let col8 = document.createElement("td");
    col8.innerText = elem.city;

    let col9 = document.createElement("td");
    col9.innerText = elem.state;

    let col10 = document.createElement("td");
    col10.innerText = elem.postalcode;

    //  var col11 = document.createElement("button");
    // col11.innerText = "Delete Data";
    // col11.addEventListener("click", function () {
    //     rejt(elem);
    //     window.localStorage.clear();
    // })

    let col11 = document.createElement("button");
    col11.innerText = "Delete";
    col11.color = "white";
    col11.addEventListener("click", function () {
      rejt(elem);
      employerdata.splice(index, 1); // Remove the element from the array
      localStorage.setItem("form-details", JSON.stringify(employerdata)); // Update localStorage
      // displaydata(employerdata); // Update the table
    });

    var count = document.querySelector("#form-details");

    count.innerText = index + 1;

    row.append(col1, col2, col4, col5, col6, col7, col8, col9, col10, col11);
    document.querySelector("tbody").append(row);
  });
}

function rejt(elem) {
  reject.push(elem);
  localStorage.setItem("rejected", JSON.stringify(reject));
}

// chat gpt

// let employerdata = JSON.parse(localStorage.getItem("form-details")) || [];
// let reject = [];

// displaydata(employerdata);

// function displaydata(employerdata) {
//     employerdata.forEach(function (elem, index) {
//         let row = document.createElement("tr");

//         let col1 = document.createElement("td");
//         col1.innerText = elem.name;

//         // Create other columns here

//         let col11 = document.createElement("button");
//         col11.innerText = "Delete Data";
//         col11.addEventListener("click", function () {
//             rejt(elem);
//             employerdata.splice(index, 1); // Remove the element from the array
//             localStorage.setItem("form-details", JSON.stringify(employerdata)); // Update localStorage
//             displaydata(employerdata); // Update the table
//         });

//         row.append(col1, /* other columns */, col11);
//         document.querySelector("tbody").appendChild(row);
//     });
// }

// function rejt(elem) {
//     reject.push(elem);
//     localStorage.setItem("rejected", JSON.stringify(reject));
// }

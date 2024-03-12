rates = {};

const url = "http://localhost:3000/api/v1/rates";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = () => {
  console.log(xhr.response);
  rates = JSON.parse(xhr.responseText);
};
xhr.send();

function exchange(inputCurrency, outputCurrency, amount, rates) {
  return amount * rates[inputCurrency][outputCurrency];
}

function validateForm() {
  let x = parseInt(document.forms["my-form"]["amount"].value, 10);
  if (x > 0) {
    return true;
  }
  return false;
}

function handleSubmit(event) {
  event.preventDefault();
  if (!validateForm()) {
    alert("Please, enter a positive number");
    return;
  }
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  let total = exchange(
    formProps.inputCurrency,
    formProps.outputCurrency,
    formProps.amount,
    rates
  );
  const output = document.getElementById("result");
  output.textContent = total;
}

window.addEventListener("load", function () {
  const d = new Date();
  let text = d.toLocaleString();
  document.getElementById("demo").innerHTML = text;

  const form = document.getElementById("my-form");
  form.addEventListener("submit", handleSubmit);
  const url = "http://localhost:3000/api/v1/currencies";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => {
    console.log(xhr.response);
    arr = JSON.parse(xhr.responseText);

    arr.forEach(function (item) {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.symbol}</td>
        <td>${item.currency}</td>
        <td>${item.buy}</td>
        <td>${item.sell}</td>
        `;
      document.querySelector("table").append(row);
    });
  };
  xhr.send();

  let interval = setInterval(() => {
    const url = "http://localhost:3000/api/v1/currencies";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      console.log(xhr.response);
      arr = JSON.parse(xhr.responseText);
    };
    xhr.send();
  }, 60000);
});

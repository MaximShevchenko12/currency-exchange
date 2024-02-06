let rates = {
    UAH: {
        UAH: 1,
        USD: 0.026,
        EUR: 0.024,
        GBR: 0.021,
        CNY: 0.19,
        PLN: 0.1,
    },
    USD: {
        USD: 1,
        UAH: 38.08,
        EUR: 0.92,
        GBR: 0.79,
        CNY: 7.11,
        PLN: 3.98,
    },
    EUR: {
        EUR: 1,
        UAH: 41.56,
        USD: 1.08,
        GBR: 0.86,
        CNY: 7.76,
        PLN: 4.36,
    }, 
    GBR: {
        EUR: 1.16,
        UAH: 48.14,
        USD: 1.26,
        GBR: 1,
        CNY: 9,
        PLN: 5.04,
    }, 
    CNY: {
        EUR: 0.13,
        UAH: 5.35,
        USD: 0.14,
        GBR: 0.11,
        CNY: 1,
        PLN: 0.55,
    },
    PLN: {
        EUR: 0.22,
        UAH: 9.5,
        USD: 0.25,
        GBR: 0.19,
        CNY: 1.79,
        PLN: 1,
    }
  }

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
    let total = exchange(formProps.inputCurrency, formProps.outputCurrency, formProps.amount, rates);
    const output = document.getElementById("result");
    output.textContent = total;
  }
  
  window.addEventListener('load', function() {
    
    const form = document.getElementById("my-form"); 
    form.addEventListener("submit", handleSubmit);
    let arr = [
      { symbol: '$', currency: 'Dollar', buy: '37.00', sell: '37.45' },
      { symbol: '&#8364', currency: 'Euro', buy: '40.00', sell: '40.65' },
      { symbol: '&#163', currency: 'Pound', buy: '46.15', sell: '46.95' },
      { symbol: '&#65509', currency: 'Yuan', buy: '5.05', sell: '5.45' },
      { symbol: 'z&#x142', currency: 'Zloty', buy: '9.20', sell: '9.35' },
    ];
  
    arr.forEach(function(item) {
      let row = document.createElement('tr')
      row.innerHTML = `
      <td>${item.symbol}</td>
      <td>${item.currency}</td>
      <td>${item.buy}</td>
      <td>${item.sell}</td>
      `
      document.querySelector('table').append(row)
    });
  });
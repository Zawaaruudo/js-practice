document.getElementById('convert-btn').addEventListener('click', async () => {
  // Get values from the input fields and dropdowns
  const amount = parseFloat(document.getElementById('amount').value);
  const sourceCurrency = document.getElementById('source-currency').value;
  const targetCurrency = document.getElementById('target-currency').value;

  // Basic input validation
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  // API URL (example: ExchangeRate-API)
  const apiKey = 'a8800268116cbbd574ebd856Y';
  const apiUrl = `https://v6.exchangerate-api.com/v6/a8800268116cbbd574ebd856/latest/${sourceCurrency}`;

  try {
    // Fetch exchange rates data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result === 'error') {
      throw new Error('Failed to fetch exchange rates');
    }

    // Get the exchange rate for the target currency
    const exchangeRate = data.conversion_rates[targetCurrency];

    if (!exchangeRate) {
      throw new Error('Invalid target currency');
    }

    // Perform the conversion
    const convertedAmount = amount * exchangeRate;

    // Display the result
    document.getElementById('result').textContent = convertedAmount.toFixed(2);
  } catch (error) {
    console.error(error);
    alert('Error: ' + error.message);
  }
});

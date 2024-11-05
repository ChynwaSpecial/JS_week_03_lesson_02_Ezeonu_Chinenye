async function fetchWeatherData() {
    const apiKey = '55d3b226b3efb21971a78c06405e849e';
    const city = 'Aba';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const responseDiv = document.getElementById('response');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      responseDiv.innerHTML = `Response status: ${response.status} - Successful AJAX request.`;

    } catch (error) {
      document.getElementById('response').innerHTML = 'Request failed, check internet connectivity';
      console.error('Fetch error:', error);
    }
  }
  
  fetchWeatherData();
  
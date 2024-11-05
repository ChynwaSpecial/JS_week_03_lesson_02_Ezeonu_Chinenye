async function postWeatherData() {
    const apiKey = '55d3b226b3efb21971a78c06405e849e';
    const url = 'https://api.openweathermap.org/data/2.5/weather';
  
    const data = {
      q: 'Aba',
      appid: apiKey,
      units: 'metric'
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const statusDiv = document.getElementById('status');
  
      if (response.ok) {
        statusDiv.innerHTML = 'Successful POST request';
        document.body.style.backgroundColor = 'green';
      } else {
        statusDiv.innerHTML = 'POST request failed. Please check your internet connectivity.';
        document.body.style.backgroundColor = 'red';
      }
    } catch (error) {
      const statusDiv = document.getElementById('status');
      statusDiv.innerHTML = 'POST request failed. Please check your internet connectivity.';
      document.body.style.backgroundColor = 'red';
      console.error('Fetch error: ', error);
    }
  }
  
  postWeatherData();
  
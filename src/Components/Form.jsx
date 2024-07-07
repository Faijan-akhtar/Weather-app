import React, { useEffect, useState } from 'react'
import { Box, InputBase, Button, styled } from '@mui/material'
import { green } from '@mui/material/colors';




const Container = styled(Box)({
  backgroundColor: "#445A6F",
  padding: 10,
  borderRadius:'0 20px 0 0'

});
const Input = styled(InputBase)({
  color: 'white'
});
const GetButton = styled(Button)({
  marginRight: '20px',
  backgroundColor: '#e67e22'
});








function Form() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchWeatherData = () => {
    const location = city && country ? `${city},${country}` : city || country;
    const url = `http://api.weatherapi.com/v1/current.json?key=26493191ee6542528a493022240607&q=${location}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
       setWeather(data);
       console.log(weather)
        setError(null);
      })
      .catch(error => {
        setError(error.toString());
        setWeather(null);
      });
  };
  const handaleWeader = (e) => {
    e.preventDefault();
    fetchWeatherData()
  };


  return (
    
   
 <>

 
 <Container>

      <Box>
        
        <Input placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} />
        <Input placeholder='Enter country' value={country} onChange={(e) =>setCountry(e.target.value)} />
        <GetButton variant="contained" onClick={handaleWeader}>GET WEATHER</GetButton>
        
      </Box>
     
      


    </Container>
   
    
 
    
    {error && <Box>Error: {error}</Box>}
      {!error && weather && (
     
          <div style={{marginLeft:"20px"}}>

<h2 style={{color:"green"}}>Weather in {weather.location.name}, {weather.location.country}</h2>
<p style={{color:'red'}}>Temperature: {weather.current.temp_c}°C</p>

<div style={{display:'flex' }}>
<p style={{color:'grey'}}>Condition: {weather.current.condition.text}</p>
<img src={weather.current.condition.icon} alt="Weather icon" />
</div>
<p style={{color:'greenyellow'}}>wind-speed:{weather.current.wind_kph}Km/h</p>
<p style={{color:'blue' }}>last_updated:{weather.current.last_updated}</p>
</div>
       
        
      )}
     
  
 </>

    
  

  )
}

export default Form

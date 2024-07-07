import axios from "axios";
const API_KEY = "8d2a110b6ad468ae1a0e459757cf659d";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const GetWeather = async () => {
  try {
    let respons = await axios.get(
      `${API_URL}?q=${city},${country}&appid${API_KEY}&unit=metric`
    );
    return respons.data;
  } catch (error) {
    console.log("error", error.message);
    return error.response;
  }
};
export default GetWeather;
// 26493191ee6542528a493022240607
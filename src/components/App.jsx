import { useState, useEffect } from 'preact/hooks';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import ForecastSection from './ForecastSection';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [searchHistory, setSearchHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load search history from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('json');
    if (stored) {
      try {
        const history = JSON.parse(stored);
        setSearchHistory(history);
        if (history.length > 0) {
          setCity(history[history.length - 1]);
        }
      } catch (e) {
        console.error('Error loading search history:', e);
      }
    }
  }, []);

  // Fetch weather data
  const fetchWeatherData = async (latitude = 51.5074, longitude = -0.1278) => {
    setLoading(true);
    try {
      const params = {
        latitude,
        longitude,
        daily: ["temperature_2m_max", "temperature_2m_min", "sunrise", "sunset"],
        hourly: ["temperature_2m", "precipitation_probability", "precipitation", "rain", "relative_humidity_2m"],
        current: ["temperature_2m", "relative_humidity_2m"],
        wind_speed_unit: "mph",
        temperature_unit: "fahrenheit",
        precipitation_unit: "inch",
        timezone: "auto"
      };

      const queryString = Object.entries(params)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map(v => `${key}=${encodeURIComponent(v)}`).join("&");
          }
          return `${key}=${encodeURIComponent(value)}`;
        })
        .join("&");

      const url = `https://api.open-meteo.com/v1/forecast?${queryString}`;
      const response = await fetch(url);
      const data = await response.json();

      // Format the data
      const formattedData = {
        current: {
          time: data.current?.time ? new Date(data.current.time) : null,
          temperature_2m: data.current?.temperature_2m,
          relative_humidity_2m: data.current?.relative_humidity_2m,
        },
        hourly: {
          time: data.hourly?.time?.map(t => new Date(t)) || [],
          temperature_2m: data.hourly?.temperature_2m || [],
          precipitation_probability: data.hourly?.precipitation_probability || [],
          precipitation: data.hourly?.precipitation || [],
          rain: data.hourly?.rain || [],
          relative_humidity_2m: data.hourly?.relative_humidity_2m || [],
        },
        daily: {
          time: data.daily?.time?.map(t => new Date(t)) || [],
          temperature_2m_max: data.daily?.temperature_2m_max || [],
          temperature_2m_min: data.daily?.temperature_2m_min || [],
          sunrise: data.daily?.sunrise?.map(t => new Date(t)) || [],
          sunset: data.daily?.sunset?.map(t => new Date(t)) || [],
        }
      };

      setWeatherData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setLoading(false);
    }
  };

  // Initial weather fetch (London default)
  useEffect(() => {
    // Default to London coordinates
    fetchWeatherData(51.5074, -0.1278);
  }, []);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    
    // Add to search history
    const newHistory = [...searchHistory, searchCity];
    setSearchHistory(newHistory);
    localStorage.setItem('json', JSON.stringify(newHistory));

    // TODO: Geocode city name to coordinates, then fetch weather
    // For now, just fetch default location
    fetchWeatherData(51.5074, -0.1278);
  };

  return (
    <div>
      <section className="section">
        <div className="hero parallax-img fullscreen u-position-relative">
          <Header onSearch={handleSearch} searchHistory={searchHistory} />
          <CurrentWeather weatherData={weatherData} city={city} />
        </div>
      </section>

      <section className="section">
        <ForecastSection weatherData={weatherData} />
      </section>

      <footer className="footer mt-10">
        <h5 className="title text-light">
          <i className="fas fa-meteor"></i>Meteorcast
        </h5>
        <div className="content">
          <div className="divider"></div>
        </div>
        <p className="subtitle">Natasha Harrington © 2018.</p>
      </footer>
    </div>
  );
};

export default App;

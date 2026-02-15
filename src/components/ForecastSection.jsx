import { useState } from 'preact/hooks';
import WeatherCard from './WeatherCard';

const ForecastSection = ({ weatherData }) => {
  const [activeTab, setActiveTab] = useState('five-day');

  if (!weatherData || !weatherData.daily) {
    return null;
  }

  const { daily } = weatherData;

  const formatDate = (dateObj, includeWeekday = true) => {
    const options = includeWeekday 
      ? { weekday: 'long', month: 'long', day: 'numeric' }
      : { month: 'long', day: 'numeric' };
    return dateObj.toLocaleString('en-US', options);
  };

  const getWeatherIcon = () => {
    // Default icon - can be enhanced based on weather conditions
    return 'fas fa-cloud-rain';
  };

  // Generate 5-day forecast
  const fiveDayForecast = daily.time.slice(0, 5).map((date, index) => ({
    date: formatDate(date),
    icon: getWeatherIcon(),
    high: Math.round(daily.temperature_2m_max[index]),
    low: Math.round(daily.temperature_2m_min[index])
  }));

  // Generate 7-day forecast
  const sevenDayForecast = daily.time.slice(0, 7).map((date, index) => ({
    date: formatDate(date),
    icon: getWeatherIcon(),
    high: Math.round(daily.temperature_2m_max[index]),
    low: Math.round(daily.temperature_2m_min[index])
  }));

  // Generate hourly forecast (next 24 hours)
  const hourlyForecast = weatherData.hourly?.time.slice(0, 24).map((date, index) => ({
    date: date.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' }),
    icon: getWeatherIcon(),
    high: Math.round(weatherData.hourly.temperature_2m[index]),
    low: Math.round(weatherData.hourly.precipitation_probability[index]) + '%'
  })) || [];

  return (
    <section className="" id="forecast">
      <div className="">
        {/* Tabs */}
        <div className="">
          <ul>
            <li className={`${activeTab === 'hourly' ? 'selected' : ''}`}>
              <div 
                id="hourly-tab" 
                className=""
                onClick={() => setActiveTab('hourly')}
              >
                Hourly
              </div>
            </li>
            <li className={`${activeTab === 'five-day' ? 'selected' : ''}`}>
              <div 
                id="five-day-tab" 
                className=""
                onClick={() => setActiveTab('five-day')}
              >
                5 Day
              </div>
            </li>
            <li className={`${activeTab === 'seven-day' ? 'selected' : ''}`}>
              <div 
                id="seven-day-tab" 
                className=""
                onClick={() => setActiveTab('seven-day')}
              >
                7 Day
              </div>
            </li>
          </ul>
        </div>

        {/* Five Day Forecast */}
        {activeTab === 'five-day' && (
          <div className="five-day-div">
            <div className="">
              {fiveDayForecast.map((day, index) => (
                <WeatherCard 
                  key={index}
                  date={day.date}
                  icon={day.icon}
                  high={day.high}
                  low={day.low}
                />
              ))}
            </div>
          </div>
        )}

        {/* Seven Day Forecast */}
        {activeTab === 'seven-day' && (
          <div className="seven-day-div">
            <div className="">
              {sevenDayForecast.map((day, index) => (
                <WeatherCard 
                  key={index}
                  date={day.date}
                  icon={day.icon}
                  high={day.high}
                  low={day.low}
                />
              ))}
            </div>
          </div>
        )}

        {/* Hourly Forecast */}
        {activeTab === 'hourly' && (
          <div className="hourly-div">
            <div className="">
              {hourlyForecast.map((hour, index) => (
                <WeatherCard 
                  key={index}
                  date={hour.date}
                  icon={hour.icon}
                  high={hour.high}
                  low={hour.low}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ForecastSection;

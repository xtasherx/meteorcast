import { formatDate, formatTime } from '../utils/dateHelpers';

const CurrentWeather = ({ weatherData, city = 'London' }) => {
  if (!weatherData || !weatherData.current) {
    return (
      <div className="">
        <div className="current-div">
          <h1 className="city">Loading...</h1>
        </div>
      </div>
    );
  }

  const { current, daily } = weatherData;
  const currentDate = new Date();

  return (
    <div className="hero-body">
      <div className="current-div content">
        <img src="#" alt="" className="main-icon" />
        <h1 className="city">{city}</h1>
        <h3 className="dateDisp">
          {formatDate(currentDate)}
        </h3>
        
        <h3 className="temp">
          {Math.round(current.temperature_2m)}°F
        </h3>
        <h4 className="feelsLike" id="feelsLike">
          Feels like {Math.round(current.temperature_2m)}°F.
        </h4>
        
        <div className="">
          <div className="">
            <div className="current">
              <ul className="" id="current-1">
                <li className="wind">Wind: --mph</li>
                <li className="humidity">
                  Humidity: {Math.round(current.relative_humidity_2m)}%
                </li>
              </ul>
            </div>
            
            <div className="current">
              <ul className="" id="current-2">
                {daily && daily.temperature_2m_max && daily.temperature_2m_max[0] && (
                  <>
                    <li>
                      <h4 className="high">
                        High: {Math.round(daily.temperature_2m_max[0])}°F
                      </h4>
                    </li>
                    <li>
                      <h4 className="low">
                        Low: {Math.round(daily.temperature_2m_min[0])}°F
                      </h4>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="current">
              <ul className="" id="current-3">
                {daily && daily.sunrise && daily.sunrise[0] && (
                  <>
                    <li className="sunrise">
                      Sunrise: {formatTime(daily.sunrise[0])}
                    </li>
                    <li className="sunset">
                      Sunset: {formatTime(daily.sunset[0])}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        
        <a href="#forecast">
          <button className="">See Forecast</button>
        </a>
      </div>
    </div>
  );
};

export default CurrentWeather;

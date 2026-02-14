import { formatDate, formatTime } from '../utils/dateHelpers';

const CurrentWeather = ({ weatherData, city = 'London' }) => {
  if (!weatherData || !weatherData.current) {
    return (
      <div className="hero-body">
        <div className="content u-text-center current-div">
          <h1 className="city text-light title">Loading...</h1>
        </div>
      </div>
    );
  }

  const { current, daily } = weatherData;
  const currentDate = new Date();

  return (
    <div className="hero-body">
      <div className="content u-text-center current-div">
        <img src="#" alt="" className="main-icon" />
        <h1 className="city text-light title">{city}</h1>
        <h3 className="dateDisp font-light subtitle">
          {formatDate(currentDate)}
        </h3>
        
        <h3 className="temp headline-4 title">
          {Math.round(current.temperature_2m)}°F
        </h3>
        <h4 className="feelsLike font-light text-light subtitle" id="feelsLike">
          Feels like {Math.round(current.temperature_2m)}°F.
        </h4>
        
        <div className="content">
          <div className="row text-light">
            <div className="current col-4 font-bold u-text-Center">
              <ul className="no-bullets" id="current-1">
                <li className="wind">Wind: --mph</li>
                <li className="humidity font-alt">
                  Humidity: {Math.round(current.relative_humidity_2m)}%
                </li>
              </ul>
            </div>
            
            <div className="current col-4 font-bold u-text-Center">
              <ul className="no-bullets" id="current-2">
                {daily && daily.temperature_2m_max && daily.temperature_2m_max[0] && (
                  <>
                    <li>
                      <h4 className="high text-dark">
                        High: {Math.round(daily.temperature_2m_max[0])}°F
                      </h4>
                    </li>
                    <li>
                      <h4 className="low text-dark">
                        Low: {Math.round(daily.temperature_2m_min[0])}°F
                      </h4>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div className="current col-4 font-bold u-text-center">
              <ul className="no-bullets" id="current-3">
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
          <button className="btn-small btn-dark">See Forecast</button>
        </a>
      </div>
    </div>
  );
};

export default CurrentWeather;

const WeatherCard = ({ date, icon, high, low }) => {
  return (
    <div className="row u-text-center">
      <div className="col-3">{date}</div>
      <div className="col-3">
        <i className={icon}></i>
      </div>
      <div className="col-3 text-orange-500 font-bold">High: {high}°F</div>
      <div className="col-3">Low: {low}°F</div>
    </div>
  );
};

export default WeatherCard;

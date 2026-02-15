const WeatherCard = ({ date, icon, high, low }) => {
  return (
    <div className="">
      <div className="">{date}</div>
      <div className="">
        <i className={icon}></i>
      </div>
      <div className="">High: {high}°F</div>
      <div className="">Low: {low}°F</div>
    </div>
  );
};

export default WeatherCard;

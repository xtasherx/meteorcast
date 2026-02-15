import { useState } from 'preact/hooks';
import SearchBar from './SearchBar';

const Header = ({ onSearch, searchHistory = [] }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleHistoryClick = (city) => {
    onSearch(city);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header header-fixed u-flex">
      <div className="header-brand">
        <div className="nav-item">
          <h4 className="">
            <i className="fas fa-meteor"></i>Meteorcast
          </h4>
        </div>
      </div>

      <div className={`header-nav ${isNavOpen ? 'active' : ''}`} id="nav">
          <div className="nav-left">
            <div className='nav-item has-sub toggle-hover' id='dropdown'>
                <a className="nav-dropdown-link">
                    Recent Searches
                </a>
                <ul className="dropdown-menu dropdown-animated" id="history-buttons">
                {searchHistory.map((city, index) => (
                    <li key={index}>
                    <a onClick={() => handleHistoryClick(city)}>
                        {city.toLowerCase()}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
          </div>
          <div className='nav-right'>
                <SearchBar onSearch={onSearch}/>
          </div>
      </div>
    </div>
  );
};

export default Header;

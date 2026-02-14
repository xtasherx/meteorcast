import { useState } from 'preact/hooks';

const Header = ({ onSearch, searchHistory = [] }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
      setSearchValue('');
    }
  };

  const handleHistoryClick = (city) => {
    onSearch(city);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="header u-position-absolute header-clear header-animated">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <h4 className="title">
            <i className="fas fa-meteor"></i>Meteorcast
          </h4>
        </div>
        <div 
          className={`nav-item nav-btn ${isNavOpen ? 'active' : ''}`}
          style={{ cursor: 'pointer', display: 'block', position: 'relative', marginLeft: 'auto' }}
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`header-nav ${isNavOpen ? 'active' : ''}`} id="nav">
        <div className="nav-right">
          <div className="nav-item has-sub toggle-hover" id="dropdown">
            <a className="nav-dropdown-link text-light">
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
          <form className="form-group" onSubmit={handleSearch}>
            <input
              type="search"
              className="form-group-input input-small searchbox"
              placeholder="Chicago"
              value={searchValue}
              onInput={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="form-group-btn btn-small search-btn">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;

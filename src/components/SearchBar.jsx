import { useState } from 'preact/hooks';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = searchValue.trim();
    if (trimmedValue) {
      onSearch(trimmedValue);
      setSearchValue('');
    }
  };

  return (
    <div className="nav-item">
        <div className="form-group" onSubmit={handleSubmit}>
            <input
            type="search"
            className="searchbox form-group-input"
            placeholder="Chicago"
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="search-btn form-group-btn">
            Go
            </button>
        </div>
    </div>
  );
};

export default SearchBar;
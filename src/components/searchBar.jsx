import "./searchBar.css"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="search">
        
        <input
          type="text"
          placeholder="¿Qué buscas?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>

      </div>
    );
  };

  export default SearchBar;
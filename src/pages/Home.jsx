import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  const { data, handleSearchOption } = props;
  const search = useRef();
  const [ input, setInput ] = useState('');
  // console.log(search.current);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchOption(`name/${input}`);
          setInput('');
        }} 
        className='search-ui container'>
        <input 
          type="search" 
          placeholder='search' 
          size="30"
          ref={search}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn" type="submit">search</button>
      </form>
      <section className="main flex-container">
      {
        // 데이터 로딩 채크
        data.length > 0 ? 
          data.map((country) => {
            return (
              <Link 
                to={`/detail/${country.altSpellings[0]}`}
                className="card" 
                key={country.altSpellings[0]}
              >
                <img src={country.flags.svg} alt="" width="100%" />
                <div className="text">
                  <h3>{country.name.common} {country.translations.kor.common}</h3>
                  <p className="population"><b>Population: </b>{country.population.toLocaleString()}</p>
                  <p className='region'><b>Region: </b>{country.continents[0]}</p>
                  <p className="capital">
                    <b>Capital: </b>{country.capital ? country.capital[0] : null }
                  </p>
                </div>
              </Link>
            )}) : 'loading...'
      }
      </section>
    </div>
  )
}

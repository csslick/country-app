// url parameter로 데이터 index값 참조
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const params = useParams();
  console.log(params);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    // 국가코드로 조회
    fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data);
      })    
  }, []);
 
  console.log(country)
 
  // 언어관련 자료 {}에서 value 값만 가져와야 됨
  // const languageValues = Object.values(country[0].languages);

  return (
    <div className='detail'>
      <section className="main container">
        <div className="back-link">
          <Link to='/' className='btn'>Back</Link>
        </div>
        <article>
          <h2>{params.id}</h2>
          {
            country.length > 0 ? (
            <div className="detail-article">
              <figure>
                <img src={country[0].flags.svg} alt="" width="100%" />
              </figure>
              <div className="text">
                <h3>{country[0].name.common} {country[0].translations.kor.common}</h3>
                <p className="population"><b>Population: </b>{country[0].population.toLocaleString()}</p>
                <p className='region'><b>Region: </b>{country[0].continents[0]}</p>
                <p className="capital">
                  <b>Capital: </b>{country[0].capital ? country[0].capital[0] : "" }
                </p>
                <p className="sub-region"><b>Sub Region: </b>{country[0].subregion}</p>
                <p className="domain"><b>Top Level Domain: </b>{country[0].altSpellings[0]}</p>
                <p className="lang">
                  <b>Languages: </b>
                  {Object.values(country[0].languages).join(', ')}
                </p>
              </div>
            </div>) : null
          }
        </article>
      </section>
    </div>
  )
}

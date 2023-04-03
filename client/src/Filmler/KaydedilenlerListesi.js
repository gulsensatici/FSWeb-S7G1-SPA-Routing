import React from 'react';
import { useHistory, Link} from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  let history = useHistory();

  function handleClick(){
    history.push("/");
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen filmler:</h3>
      {props.list.map((movie) => (
        <Link to ={`/filmler/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      
      <div className="home-button" onClick={handleClick}>Anasayfa</div>
      
    </div>
  );
}

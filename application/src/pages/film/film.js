import {React ,useEffect, useState} from 'react';
import '../film/film.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { useParams} from 'react-router-dom';

const auth = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjkxMjMzZmI0NTk5N2ExZTIxOTBmMzcwYTE2YTMwMiIsInN1YiI6IjY0OTAxNTJmMmY4ZDA5MDBlMzg2ODIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z_pt-qopvTk-L1prSbBKzlGjyL8Gyq78YDMeASXUKvU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', auth)
    .then(response => response.json())
    .catch(err => console.error(err));

 const Film = () => {
    
    const [populaires, setPopulaires] = useState([]);
    const [top, setTop] = useState([])
    const idFilm = useParams().id;
    
    const getFilm = async () => {
      
      const reponse = await fetch('https://api.themoviedb.org/3/movie/popular?language=fr-fr', auth)
      .then(response => response.json())
      .then(data => setPopulaires(data.results))
      .then(console.log(populaires))
      .catch(err => console.error(err));
  
    }

    useEffect(()=>{
     getFilm();
        },[])
        
        const currentFilm = populaires.filter(data => data.id ==idFilm) 
        const infos = currentFilm[0]
        const baseUrl = 'https://image.tmdb.org/t/p/w780'
        const imagePath = `${infos && infos.poster_path}`
        const imgUrl = `${baseUrl}/${imagePath}`
        
        
    
     return (
        <div className='film_container'>
            <Header />
            <Banner />
            <img className='img_film'  src={imgUrl} alt={infos && infos.title}/>
            <h1 className='title_film'>{infos && infos.title}</h1>
            <h2 className='resume_film'> Résumé : <br/>{infos && infos.overview}</h2>
            
            <div className='infos_fim'>
              <h2 className='note_film'>{infos && infos.vote_average}/10 sur {infos && infos.vote_count} votants </h2>
              <h2 className='date_film'>Date de sortie : {infos && infos.release_date}</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Film;
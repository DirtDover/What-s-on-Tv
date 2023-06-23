import {React ,useEffect, useState} from 'react';
import '../film/film.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { useParams, Navigate } from 'react-router-dom';

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
    const idFilm = useParams().id;
    
    useEffect(()=>{
     fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', auth)
            .then(response => response.json())
            .then(data => setPopulaires(data.results))
            .then(console.log(populaires))
            .catch(err => console.error(err));

        },[])
    
        const currentFilm = populaires.filter(data => data.id ==idFilm) 
    
    console.log(currentFilm)
    
     return (
        <div>
            <Header />
            <Banner />
            <h1>{currentFilm.title}</h1>
            <h2>{currentFilm.overview}</h2>
            <Footer />
        </div>
    );
};

export default Film;
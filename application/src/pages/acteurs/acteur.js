import {React ,useEffect, useState} from 'react';
import '../acteurs/acteur.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { useParams} from 'react-router-dom';
import Card from '../../components/Card';

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

 const Acteur = () => {
    
    const [populaires, setPopulaires] = useState([]);
    const idActeur = useParams().id;
    
    const getActeur = async () => {
      
      const reponse = await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', auth)
      .then(response => response.json())
      .then(data => setPopulaires(data.results))
      .then(console.log(populaires))
      .catch(err => console.error(err));
  
    }

    useEffect(()=>{
     getActeur();
        },[])
    
        const currentActeur = populaires.filter(data => data.id ==idActeur) 
        const infos = currentActeur
        console.log(currentActeur)
        const baseUrl = 'https://image.tmdb.org/t/p/original'
        const imagePath = `${infos[0] && infos[0].profile_path}`
        const imgUrl = `${baseUrl}/${imagePath}`
        console.log(infos)
        
        
    
     return (
        <div>
            <Header />
            <Banner />
            <img  src={imgUrl} alt={infos[0] && infos[0].name}/>
            <h1>{infos[0] && infos[0].name}</h1>
            <h2>{infos[0] && infos[0].known_for_department}</h2>
            <h2>Connu pour : </h2>
            <Footer />
        </div>
    );
};

export default Acteur;
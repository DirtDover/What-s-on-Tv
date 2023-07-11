import {React ,useEffect, useState} from 'react';
import'../catégoriesId/categoriesId.css';
import { useParams} from 'react-router-dom';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
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

    

const CategoriesId = () => {

    const idCat = useParams().id;
    const [filmCat, setfilmCat] = useState([]);

    const getfilmCat = async () => {
      
        const reponse = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${idCat}}`,auth)
        .then(response => response.json())
        .then(data => setfilmCat(data.results))
        .then(console.log(filmCat))
        .catch(err => console.error(err));
    
      }
  
      useEffect(()=>{
       getfilmCat();
          },[])

    return (
        <div className='cat_container'>
         <Header />
         <Banner /> 
         <main className="filmCat_container">
            {filmCat.slice(0,8).map((films)=>{ 
                return <Card  key={films.id} title={films.title} cover={films.poster_path}/>
        })}
        </main> 
         <Footer /> 
        </div>
    );
};

export default CategoriesId;
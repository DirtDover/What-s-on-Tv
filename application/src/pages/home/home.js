import React, { useEffect, useState } from 'react';
import "../home/home.css"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
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


    const Home = () => {

        const [populaire, setPopulaire] = useState([]);
        const [recent, setRecent] = useState([]);
        const [people, setPeople] = useState([]);
        const [toprated, setToprated] = useState([]);
        
          useEffect(()=>{
            fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', auth)
            .then(response => response.json())
            .then(data => setPopulaire(data.results))
            .then(console.log(populaire))
            .catch(err => console.error(err));

            fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', auth)
            .then(response => response.json())
            .then(data => setRecent(data.results))
            .then(console.log(recent))
            .catch(err => console.error(err));

            fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', auth)
            .then(response => response.json())
            .then(data => setPeople(data.results))
            .then(console.log(people))
            .catch(err => console.error(err));

            fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', auth)
            .then(response => response.json())
            .then(data => setToprated(data.results))
            .then(console.log(toprated))
            .catch(err => console.error(err));
          },[])
          

    return (

        <div className='home_container'>
            <Header />
            <Banner />
            <main className='main_container'>
                <div className="nouveaute_container">
                <h1 className="nouveaute_title">A l'affiche</h1>
                {recent.slice(0,7).map((recents)=> (
                       <Card key={recents.id} id={recents.id} title={recents.title}/>
                    ))}
                </div>
                <div className="populaire_container">
                  <h1 className="populaire_title">Les plus populaires</h1>
                {populaire.slice(0,7).map((populaires)=> (
                       <Card key={populaires.id} id={populaires.id} title={populaires.title}/>
                    ))}
                </div>
                <div className="acteur_container">
                  <h1 className="acteur_title">Acteurs les plus populaires</h1>
                {people.slice(0,7).map((peoples)=> (
                       <Card key={peoples.id} id={peoples.id} title={peoples.name}/>
                    ))}
                </div>
                <div className="top_container">
                  <h1 className="top_title">Films les mieux notés</h1>
                {toprated.slice(0,7).map((toprateds)=> (
                       <Card key={toprateds.id} id={toprateds.id} title={toprateds.title}/>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;


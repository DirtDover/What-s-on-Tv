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

        const [tag, setTag] = useState([]);
        const [recent, setRecent] = useState([]);
        const [people, setPeople] = useState([]);
        const [toprated, setToprated] = useState([]);
        
          useEffect(()=>{
            fetch('https://api.themoviedb.org/3/genre/movie/list?language=en')
            .then(response => response.json())
            .then(data => setTag(data.genres))
            .then(console.log(tag))
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
                {recent.map((recents)=> (
                       <Card key={recents.id} id={recents.id} title={recents.title}/>
                    ))}
                </div>
                <div className="tags_container">
                {tag.map((tags)=> (
                       <Card key={tags.id} id={tags.id} title={tags.name}/>
                    ))}
                </div>
                <div className="acteur_container">
                {people.map((peoples)=> (
                       <Card key={peoples.id} id={peoples.id} title={peoples.name}/>
                    ))}
                </div>
                <div className="top_container">
                {toprated.map((toprateds)=> (
                       <Card key={toprateds.id} id={toprateds.id} title={toprateds.title}/>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;


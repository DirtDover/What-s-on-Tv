import React, { useState } from 'react';
import "../home/home.css"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';

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

        const [tag, setTag] = useState([],[]);
        const Tags = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjkxMjMzZmI0NTk5N2ExZTIxOTBmMzcwYTE2YTMwMiIsInN1YiI6IjY0OTAxNTJmMmY4ZDA5MDBlMzg2ODIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z_pt-qopvTk-L1prSbBKzlGjyL8Gyq78YDMeASXUKvU'
            }
          };
          
          fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', Tags)
            .then(response => response.json())
            .then(data => setTag(data.genres))
            .then(console.log(tag))
            .catch(err => console.error(err));

    return (

    

        <div className='home_container'>
            <Header />
            <Banner />
            <main className='main_container'>
                <div className="nouveaute_container">
                    <h1>Test</h1>
                </div>
                <div className="tags_container">
                <h1>Test</h1>
                </div>
                <div className="acteur_container">
                <h1>TEst</h1>
                </div>
                <div className="real_container">
                <h1>TEst</h1>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
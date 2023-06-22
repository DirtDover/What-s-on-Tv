import React, { useEffect, useState } from 'react';
import '../catégories/categories.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';

const Categories = () => {

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

        const [tag, setTag] = useState([]);
        
        useEffect(()=>{
          fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', auth)
          .then(response => response.json())
          .then(data => setTag(data.genres))
          .then(console.log(tag))
          .catch(err => console.error(err));
        },[])

    return (

        

        <div className='categories_container'>
            <Header />
            <Banner />
            <main className='main_container_categories'>
            <div className="categorie_container">
                {tag.map((tags)=> (
                       <Card key={tags.id} id={tags.id} title={tags.name}/>
                    ))}
            </div>        
            </main>
            <Footer />
        </div>
    );
};

export default Categories;
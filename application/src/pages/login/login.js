import React from 'react';
import '../login/login.css'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Login = () => {
    return (
        <div className='login_container'>
          <Header />  
          <Banner />
          <div class="container_titre">
            <h1 id="login_titre">Log In </h1>
        </div>
          <form class="container_input">
            <p class="input_p1" id="e_mail">E-mail</p>
            <input class="email" type="email"/>
            <p class="erreur_email">Erreur dans l’identifiant ou le mot de passe</p>
            <p class="input_p2" id="password">Mot de passe</p>
            <input class="password" type="password"/>
            <p class="erreur_password">Erreur dans l’identifiant ou le mot de passe</p>
            <button type="button" class="btn_login">Se connecter</button>
        </form>
        <p class="mdp_oublié"> <a href="#">Mot de passe oublié</a></p>
          <Footer />  
        </div>
    );
};

export default Login;
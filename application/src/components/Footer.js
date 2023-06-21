import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='footer_container'>
            <form action="" className="form_container">
                <div className="contact_group">
                    <input type="text" name='user_name' required placeholder='Entrez votre nom' className='contact_input'/>
                    <input type='email' name='user_email' required placeholder='Entrez votre E-Mail' className='contact_input' />
                </div>
                <textarea name='user_projets' required placeholder='Entrez votre message' className='textarea_input' />
                <button type='submit' className='contact_btn'>Envoyer votre message</button>
            </form>
            <div className="signature_container">
                <h2 className="signature_title">What's on Tv</h2>
                <p className="signature_texte">Tous droits réservés</p>
            </div>
        </div>

    );
};

export default Footer;
import React, { useState } from 'react';
import '../styles/collapse.css';
import arrow from '../assets/arrow.png';

const Collapse = ({title, content, id}) => {
    
    const [visible, setVisible]= useState(false)
    
    
    return visible ? (
        <div className='collapse-container'>
            <button key={id} className='btn-collapse' onClick={() => setVisible(false)}>{title}
            <img  className={visible ? 'arrow-up' : 'arrow'} src={arrow} alt="show content"  />
            </button>
            <div className='collapse-content'>
                <p className='collapse-content-text'>{content}</p>
            </div>
        </div>
    ) : 
    ( <div className='collapse-container'>
<button className='btn-collapse' onClick={() => setVisible(true)}>{title}
<img  className='arrow' src={arrow} alt="show content"  /></button>
   </div>
    );
};

export default Collapse;
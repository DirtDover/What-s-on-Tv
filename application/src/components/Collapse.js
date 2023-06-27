import React, { useState } from 'react';
import '../styles/collapse.css';
import arrow from '../assets/arrow.png';

const Collapse = ({title, content, id}) => {
    
    const [visible, setVisible]= useState(false)
    
    
    return visible ? (
        <div className='collapse_container'>
            <button key={id} className='btn_collapse' onClick={() => setVisible(false)}>{title}
            <img  className={visible ? 'arrow-up' : 'arrow'} src={arrow} alt="show content"  />
            </button>
            <div className='collapse_content'>
                <p className='collapse_content_text'>{content}</p>
            </div>
        </div>
    ) : 
    ( <div className='collapse_container'>
<button className='btn_collapse' onClick={() => setVisible(true)}>{title}
<img  className='arrow' src={arrow} alt="show content"  /></button>
   </div>
    );
};

export default Collapse;
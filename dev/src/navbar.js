import React from 'react'
import logo from '../src/navbar/logo.png'
import '../src/navbar.css'
import formfitness from '../src/navbar/form-fitness.png'
const navbar = () => {
  return (
   <>
   <nav className='main-nav'>
     <div classname ='logo'>
        <img src={logo} className='png-logo' alt='logo'></img>
     </div>
     <div className='form'>
     <img src={formfitness} className='png-form' alt='logo'></img>
     </div>
   </nav>
   </>
  );
}

export default navbar;

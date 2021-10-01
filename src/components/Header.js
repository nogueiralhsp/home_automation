import React from 'react'
import { LoginUser } from './index'


const Header = () => (
     <header className="header">
          <div className='header-logo'>
               <h2>Home Automation Project</h2>
               <p>72 Happy Street <br />Springfield</p>
          </div>
          <div>
               <LoginUser />
          </div>
     </header>
);

export default Header
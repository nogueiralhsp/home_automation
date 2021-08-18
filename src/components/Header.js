import React from 'react'

import {
     Messages, Forcast
} from '../components'


const Header = () => (
     <header className="header">
          <div>
               <h2>Test your Home Automation</h2>
               <p>72 Happy Street <br />Springfield</p>
          </div>

          <div className="header-forcast">
               <Forcast />
          </div>

     </header>
);

export default Header
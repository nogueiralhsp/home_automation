import React from 'react'
import { Forcast, LoginUser } from './index'


const Header = () => (
     <header className="header">
          <div>
               <Forcast />
          </div>
          <div>
               <LoginUser />
          </div>
     </header>
);

export default Header
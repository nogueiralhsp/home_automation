import React from 'react';
import {
  Temperature_Control
} from '../components'
import { FaLightbulb } from 'react-icons/fa'

export default function HouseFront() {

  return (
    <div className="card_root">
      <div className='card-title'>
        <h2>House </h2>
      </div>
      <div className='card-items'>
          <Temperature_Control/>
      </div>
      <div className='card-items'>
        <h3>Lights</h3>
        <a href="" className='button-test'><FaLightbulb className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Front Door {true ? ' = On' : ' = Off'}</a>
        <a href="" className='button-test'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Driveway {true === !true ? ' = On' : ' = Off'}</a>
      </div>
    </div>
  );
}
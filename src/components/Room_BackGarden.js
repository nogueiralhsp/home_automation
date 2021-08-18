import React from 'react';
import { FaLightbulb } from 'react-icons/fa'


export default function BackGarden() {


  return (
    <div className="card_root">
    <div className='card-title'>
      <h2>Garden </h2>
    </div>
    <div className='card-items'>
      <h3>Lights</h3>
      <a href="" className='button'><FaLightbulb className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Upper Level {true ? ' = On' : ' = Off'}</a>
      <a href="" className='button'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Lower Level {true === !true ? ' = On' : ' = Off'}</a>
      <a href="" className='button'><FaLightbulb className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Hot Tub {true ? ' = On' : ' = Off'}</a>
    </div>
  </div>
  );
}
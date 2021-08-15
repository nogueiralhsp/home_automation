import React from 'react';
import {FaLightbulb} from 'react-icons/fa'
import Card from '@material-ui/core/Card';

export default function HouseFront() {

  return (
    <Card className="card_root">
      <div className="details">
        House
        Lights
        <div className='card-items'>
          <a href=""><FaLightbulb className={true ? 'iconStatusOn' : 'iconStatusOff'}/> Front Door {true ? ' = On' : ' = Off'}</a>
        </div>
        <div className='card-items'>
          <a href=""><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'}/> Driveway {true === !true ? ' = On' : ' = Off'}</a>
        </div>
      </div>
    </Card>
  );
}
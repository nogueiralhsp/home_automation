import React from 'react';
import { FaLightbulb, FaDoorClosed, FaDoorOpen } from 'react-icons/fa'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles((theme) => ({

}));

export default function Garage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="card_root">
      <div className='card-title'>
        <h2>Garage</h2>
      </div>

      <div className='card-items'>
        <h3>Lights</h3>
        <a href="" className='button-test'><FaLightbulb className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Light 1 {true === !true ? ' = On' : ' = Off'}</a>
        <a href="" className='button-test'><MeetingRoomIcon className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Light 2 {true === !true ? ' = On' : ' = Off'}</a>
      </div>
      <div className='card-items'>
        <h3>Doors</h3>
        <a href="" className='button-test'><FaDoorClosed className={true ? 'iconStatusOn' : 'iconStatusOff'} /> Front Door {true === !true ? ' = On' : ' = Off'}</a>
        <a href="" className='button-test'><FaDoorOpen className={true === !true ? 'iconStatusOn' : 'iconStatusOff'} /> Back Door {true === !true ? ' = On' : ' = Off'}</a>
      </div>
    </div>
  );
}
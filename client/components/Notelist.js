import React from 'react';
import Noteentry from './Noteentry';

import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';


var Notelist = (props) => (
  <Well className='noteList'>
    <h1 >Notes:</h1>
    <ul>
      
    </ul>
    <a href='#'>Load More</a>
  </Well>
);

export default Notelist;
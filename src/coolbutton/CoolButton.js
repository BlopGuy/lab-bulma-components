import React from 'react';
import 'bulma/css/bulma.css';

const CoolButton = props => {
    console.log(props);
    return (
      <div>
        <button className = 'button'> Button </button>
      </div>
    );
  };

export default CoolButton;
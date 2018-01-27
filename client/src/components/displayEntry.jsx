import React from 'react';

const DisplayEntry = ({tweet}) => {
  return (
    <div>
      <div className="display-tweet">
        {tweet}
      </div>
    </div>
  );

};

export default DisplayEntry;
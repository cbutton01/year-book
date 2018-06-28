import React from 'react';
import PropTypes from 'prop-types';

const BORDER = {
  border: '2px solid #333'
}

function Profile(props){
  return(
    <div style={BORDER}>
      <img src={props.image}></img>
      <h3>
        {props.name}
      </h3>
    </div>
  );
}


Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Profile;

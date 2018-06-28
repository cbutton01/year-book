import React from 'react';
import PropTypes from 'prop-types';

function Profile(props){
  return(
    <div>
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

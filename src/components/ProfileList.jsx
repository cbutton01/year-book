import React from 'react';
import Profile from './Profile';

const PROFILE_LIST = [
  {
    image: 'https://vignette.wikia.nocookie.net/vsbattles/images/1/12/Isaac_.png/revision/latest?cb=20170402080922',
    name: 'Isaac'
  },
  {
    image: 'http://pixelartmaker.com/art/bd8c19ecda5bc7f.png',
    name: 'Samson'
  }
];

const GRID = {
  textAlign: 'center',
  display: 'grid',
  padding: '10px',
  gridTemplateRows: '1fr'
};

const BORDER = {
  border: '2px solid red'
};

function ProfileList(){
  return(
    <div style={GRID}>
      <div>
        {PROFILE_LIST.map((profile, index) =>
          <Profile
            image={profile.image}
            name={profile.name}
            key={index}
            />
        )}
      </div>
    </div>
  );
}

export default ProfileList;

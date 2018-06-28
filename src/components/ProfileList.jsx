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
  },
  {
    image: 'https://opwnworld.files.wordpress.com/2014/11/azazel.png',
    name: 'Azazel'
  },
  {
    image: 'https://d1u5p3l4wpay3k.cloudfront.net/bindingofisaacre_gamepedia/0/0c/Boss_Krampus.png?version=b754992be9f6e131a477db80648a21b1',
    name: 'Krampus'
  }
];

const GRID = {
  textAlign: 'center',
  display: 'grid',
  padding: '10px',
  gridTemplateColumns: 'repeat(3, 1fr)'
};

function ProfileList(){
  return(
    <div style={GRID}>
        {PROFILE_LIST.map((profile, index) =>
          <Profile
            image={profile.image}
            name={profile.name}
            key={index}
            />
        )}
    </div>
  );
}

export default ProfileList;

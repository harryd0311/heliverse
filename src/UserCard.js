import React from 'react';

const UserCard = ({ user, addToTeam }) => {
  const { id, first_name, last_name, domain, gender, available, avatar } = user;

  const handleAddToTeam = () => {
    addToTeam(user);
  };

  return (
    <div className="card">
      {/* <div className="avatar"> */}
        <img src={avatar} alt="User Avatar" />
      {/* </div> */}
      <h3>{`${first_name} ${last_name}`}</h3>
      <p>Domain: {domain}</p>
      <p>Gender: {gender}</p>
      <p>Availability: {available ? 'Available' : 'Not Available'}</p>
      <button onClick={handleAddToTeam}>Add to Team</button>
    </div>
  );
};

export default UserCard;

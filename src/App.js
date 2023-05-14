import React, { useState } from 'react';
import userData from './userData.json';
import UserCard from './UserCard';
 
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [team, setTeam] = useState([]);
  const [showTeamCards, setShowTeamCards] = useState(false);
  const usersPerPage = 20;

  // Filter users based on search query and selected filters
  const filteredUsers = userData.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const searchMatch = fullName.includes(searchQuery.toLowerCase());
    const domainMatch = selectedDomain === '' || user.domain === selectedDomain;
    const genderMatch = selectedGender === '' || user.gender === selectedGender;
    const availabilityMatch =
      selectedAvailability === '' || user.available.toString() === selectedAvailability;

    return searchMatch && domainMatch && genderMatch && availabilityMatch;
  });

  // Calculate the indexes of the users to be displayed on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search query change
  const handleSearch = (e) => {
    setCurrentPage(1); // Reset to first page when search query changes
    setSearchQuery(e.target.value);
  };

  // Handle domain filter change
  const handleDomainFilter = (e) => {
    setCurrentPage(1); // Reset to first page when domain filter changes
    setSelectedDomain(e.target.value);
  };

  // Handle gender filter change
  const handleGenderFilter = (e) => {
    setCurrentPage(1); // Reset to first page when gender filter changes
    setSelectedGender(e.target.value);
  };

  // Handle availability filter change
  const handleAvailabilityFilter = (e) => {
    setCurrentPage(1); // Reset to first page when availability filter changes
    setSelectedAvailability(e.target.value);
  };

  // Handle adding user to team
  const addToTeam = (user) => {
    const domainExistsInTeam = team.some((teamMember) => teamMember.domain === user.domain);
    if (!domainExistsInTeam && user.available) {
      setTeam([...team, user]);
    }
  };

  const removeFromTeam = (userId) => {
    setTeam(team.filter((member) => member.id !== userId));
  };

  const handleDoneClick = () => {
    setShowTeamCards(showTeamCards===true ? false:true);
  };

  return (
    <div className="App">
      <h1>HELIVERSE</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select value={selectedDomain} onChange={handleDomainFilter}>
          <option value="">All Domains</option>
          {/* Replace with your domain options */}
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="IT">IT</option>
        </select>
        <select value={selectedGender} onChange={handleGenderFilter}>
          <option value="">All Genders</option>
          {/* Replace with your gender options */}
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select value={selectedAvailability} onChange={handleAvailabilityFilter}>
          <option value="">All Availability</option>
          {/* Replace with your availability options */}
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>
      <div className="card-container">
        {currentUsers.map((user) => (
          <UserCard key={user.id} user={user} addToTeam={addToTeam} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map(
          (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
      <div className="team">
        <h2>Team</h2>
        {team.length > 0 ? (
          <ul>
            {team.map((member) => (
              <li key={member.id}><h4 className='no-member'> {member.first_name} {member.last_name}
              <button onClick={() => removeFromTeam(member.id)}>Remove</button></h4></li>
            ))}
          </ul>
        ) : (
          <p className='no-member'>No members in the team yet.</p>
        )}
      </div>
      <div className="team">
        {/* <h2>Team</h2> */}
        {/* Show team cards when "Done" button is clicked */}
        {showTeamCards && team.length > 0 ? (
          <div className="card-container">
            {team.map((member) => (
              <UserCard key={member.id} user={member} addToTeam={addToTeam} />
            ))}
          </div>
        ) : (
          <p></p>
        )}
        {!showTeamCards && team.length > 0 ? (
          <p></p>
        ) : (
          <p></p>
        )}
        {!showTeamCards && team.length > 0 && (
          <button onClick={handleDoneClick}>Done</button>
        )}
        {showTeamCards && team.length > 0 && (
          <button onClick={handleDoneClick}>Clear</button>
        )}
      </div>
    </div>
  );
}

export default App;

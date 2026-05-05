import PropTypes from 'prop-types' 

function ProfileCard({name, age, isMember, hobbies, onClickHobby}){

  return (
    <div className='profile-card'>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Member Status: {isMember ? "Active Member" : "Guest"}</h3>
      <h3>Hobbies</h3>
      <ul>
        {
          hobbies.map((hobby, index) => {
            return <li key={index} onClick={() => onClickHobby(hobby)}>{hobby}</li>;
          })}
      </ul>
    </div>
  );
}

ProfileCard.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMember: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
}

export default ProfileCard;
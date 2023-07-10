import React from 'react';
import './userSettings.css';
import axios from "axios"

function UserSettings () {
  const performClick = (evt) => {
    evt.preventDefault();
    var profileInfo = {
      name: evt.target.elements.name.value,
      email: evt.target.elements.email.value,
      username: evt.target.elements.username.value,
      password: evt.target.elements.password.value,
      bio: evt.target.elements.bio.value,
      interests: evt.target.elements.interests.value,
    };
    axios.put("http://localhost:3001/pages/userSettings",profileInfo).then(function(response){
      console.log(response);
    });
    
    }
  
  return (
    <div>
      <h1 className="section-title">Profile Settings</h1>
      <form className='profile-settings'
              id="saveChanges"
              onSubmit={performClick}
            >
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" defaultValue="John Doe" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" defaultValue="johndoe@example.com" />
      </div>
      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" defaultValue="johndoe" />
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-field">
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </textarea>
      </div>
      <div className="form-field">
        <label htmlFor="interests">Interests</label>
        <select id="interests" name="interests">
          <option value="travel">Travel</option>
          <option value="fashion">Fashion</option>
          <option value="food">Food</option>
          <option value="art">Art</option>
        </select>
      </div>
      <div className="form-field">
        <button>Save Changes</button>
      </div>
      </form>
    </div>
  );
};

export default UserSettings;
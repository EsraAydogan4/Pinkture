import React from 'react';
import './userSettings.css';

const UserSettings = () => {
  return (
    <div className="profile-settings">
      <h1 className="section-title">Profile Settings</h1>
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
    </div>
  );
};

export default UserSettings;
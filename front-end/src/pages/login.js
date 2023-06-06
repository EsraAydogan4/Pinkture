import React, { useEffect } from 'react';

function Login() {
  useEffect(() => {
    const loginForm = document.querySelector('form');
    const cancelBtn = document.querySelector('.cancelbtn');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = loginForm.elements.uname.value;
      const password = loginForm.elements.psw.value;

      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(response => {
          if (response.ok) {
            console.log('Login successful!');
          } else {
            console.error('Login failed!');
          }
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    });

    cancelBtn.addEventListener('click', function() {
      console.log('Login canceled!');
    });
  }, []);
  
  const cancelBtnStyles = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" name="uname" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="psw" />
        </label>
        <br />
        <button type="submit">Login</button>
        <button className="cancelbtn" type="button">Cancel</button>
      </form>
    </div>
  );
}

export default Login;

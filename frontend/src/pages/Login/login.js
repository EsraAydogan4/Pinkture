import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  return (
    <header>
      <form>
        <div className="container">
          <div style={{ width: "100%", borderRadius: "20px", margin: "100px 10px" }}></div>
          <h1>Giriş Yap</h1>
          <label htmlFor="uname"><b>Kullanıcı adı</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Parola</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <div className="clearfix">
            <button type="login-button" className="cancelbtn">İptal</button>
            <Link to="/pages/UserPage/" className="signupbtn">Giriş yap</Link>
          </div>
          <div className="container">
            <button className='registerbtn'>
              <span style={{ color: '#f8186f' }} className="girisyap">
                {' '}
                <a href="register">Hesabın yok mu? Kayıt ol.</a>
              </span>
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default Login;

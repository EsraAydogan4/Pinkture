
import React from 'react';
import './Register.css'; // CSS dosyasını import et

function Register() {
  return (
    <form action="/action_page.php" style={{ border: '1px solid #ccc' }}>
      <div className="logo">
        <a href="index.html">
          <img src="./Pinkture.jpg" alt="Site Logosu" />
        </a>
      </div>
      <div className="container">
        <h1>Kayıt Ol</h1>
        <p>Gerekli alanları doldurun.</p>
        <hr />

        <label htmlFor="name"><b>Ad</b></label>
        <input type="text" placeholder="Enter your name" name="text" required />

        <label htmlFor="lastname"><b>Soyad</b></label>
        <input type="text" placeholder="Enter last name" name="text" required />

        <label htmlFor="username"><b>Kullanıcı adı</b></label>
        <input type="text" placeholder="Enter username" name="text" required />

        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw"><b>Parola</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <label htmlFor="psw-repeat"><b>Parola tekrar</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

        <label>
          <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Beni hatırla!
        </label>

        <div className="clearfix">
          <button type="button" className="cancelbtn">İptal</button>
          <button type="submit" className="signupbtn">Kayıt ol</button>
        </div>
        <div className="container">
          <button>
            <span style={{ color: '#f8186f' }} className="girisyap">
              {' '}
              <a href="login">Zaten bir hesabın var mı? Giriş Yap.</a>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
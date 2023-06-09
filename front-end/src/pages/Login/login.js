import React from 'react';
import './Login.css'; // CSS dosyasını import et

function Login() {
  return (
    <header>
      <form action="action_page.php" method="post">
        <div className="logo">
          <a href="index.html">
            <img src="./Pinkture.jpg" alt="Site Logosu" />
          </a>
        </div>
        <div className="container">
        <h1>Giriş Yap</h1>
          <label htmlFor="uname"><b>Kullanıcı adı</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />

          <label htmlFor="psw"><b>Parola</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />

          <button type="submit">Giriş Yap</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Beni hatırla
          </label>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">İptal</button>
          <button>
            <span style={{ color: '#f8186f' }} className="register">
              {' '}
              <a href="register">Kayıt Ol!</a>
            </span>
          </button>
          <span className="psw">
             <a href="#">Prolamı unuttum!</a>
          </span>
        </div>
      </form>
    </header>
  );
}

export default Login;


import React from 'react';
import './Register.css'; // CSS dosyasını import et

function Register() {
  return (
    
    
    // <header>
    //   <form action="/action_page.php" style={{ border: '1px solid #ccc' }}>
    //   <div className="logo">
    //     <a href="index.html">
    //       <img src="./Pinkture.jpg" alt="Site Logosu" />
    //     </a>
    //   </div>
    //   <div className="container">
    //   <div>  width={"100%"} border-radius= {"40px"} margin= {"40px 40px"}</div>
    //     <h1>Kayıt Ol</h1>
    //     <p>Gerekli alanları doldurun.</p>
        

    //     <label htmlFor="name"><b>Ad</b></label>
    //     <input type="text" placeholder="Enter your name" name="text" required />

    //     <label htmlFor="lastname"><b>Soyad</b></label>
    //     <input type="text" placeholder="Enter last name" name="text" required />

    //     <label htmlFor="username"><b>Kullanıcı adı</b></label>
    //     <input type="text" placeholder="Enter username" name="text" required />

    //     <label htmlFor="email"><b>Email</b></label>
    //     <input type="text" placeholder="Enter Email" name="email" required />

    //     <label htmlFor="psw"><b>Parola</b></label>
    //     <input type="password" placeholder="Enter Password" name="psw" required />

    //     <label htmlFor="psw-repeat"><b>Parola tekrar</b></label>
    //     <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

    //     {/* <label>
    //       <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Beni hatırla!
    //     </label> */}
    //     </div>



    <header>
      <form action="action_page.php" method="post">
        <div className="logo">
          <a href="index.html">
            <img src="./Pinkture.ico" alt="Site Logosu" />
          </a>
        </div>
        <div className="container">
        <div>  width={"100%"} border-radius= {"20px"} margin= {"30px 20px"}</div>
        <h1>Kayıt Ol</h1>
          <label htmlFor="name"><b>Ad</b></label>
          <input type="text" placeholder="Adınız" name="text" required />

          <label htmlFor="lastname"><b>Soyad</b></label>
         <input type="text" placeholder="Soyadınız" name="text" required />

          <label htmlFor="uname"><b>Kullanıcı adı</b></label>
          <input type="text" placeholder="Kullanıcı adınız" name="uname" required />

          <label htmlFor="email"><b>Eposta</b></label>
         <input type="text" placeholder="example@gmail.com" name="email" required />

          <label htmlFor="psw"><b>Parola</b></label>
          <input type="password" placeholder="parolanız" name="psw" required />

          {/* <button type="submit">Kaydet</button> */}
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Beni hatırla
          </label> */}
        </div>

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
      
    </form>
    </header>
  );
}

export default Register;
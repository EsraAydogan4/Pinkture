import { useState } from 'react';
import React from 'react';
import './Register.css'; // CSS dosyasını import et

export default function Register() {

  const [name, setname]=useState('');
  const [surname, setsurname]=useState('');
  const [email, setemail]=useState('');
  const [username, setusername]=useState('');
  const [password, setpassword]=useState('');

  async function register(ev){
    ev.preventDefault();
    await fetch('http://localhost:3000/pages/register',{
      method: 'POST',
      body:JSON.stringify({name,surname,username,email,password}),
      headers: {'Content-Type':'application/json'},
    })
  }

  return(
    <form className='register' onSubmit={register}>
      <h1>Kayıt Ol</h1>
      <input type="text" placeholder="Adınız" name="text" value={name} onChange={ev=> setname(ev.target.value)} required />
      <input type="text" placeholder="Soyadınız" name="text" value={surname} onChange={ev=> setsurname(ev.target.value)} required />
      <input type="text" placeholder="Kullanıcı adınız" name="uname" value={username} onChange={ev=> setusername(ev.target.value)} required />
      <input type="text" placeholder="example@gmail.com" name="email" value={email} onChange={ev=> setemail(ev.target.value)} required />
      <input type="password" placeholder="Parolanız" name="psw" value={password} onChange={ev=> setpassword(ev.target.value)} required />
      <button className='registerbtn'>Kayıt Ol</button>
    </form>
    
  )
  // return (
  //   <header>
  //     <form action="/register" method="post">
  //       <div className="logo">
  //         <a href="index.html">
  //           <img src="./Pinkture.ico" alt="Site Logosu" />
  //         </a>
  //       </div>
  //       <div className="container">
  //       <div>  width={"100%"} border-radius= {"20px"} margin= {"30px 20px"}</div>
  //       <h1>Kayıt Ol</h1>
  //         <label htmlFor="name"><b>Ad</b></label>
  //         <input type="text" placeholder="Adınız" name="text" required />

  //         <label htmlFor="lastname"><b>Soyad</b></label>
  //        <input type="text" placeholder="Soyadınız" name="text" required />

  //         <label htmlFor="uname"><b>Kullanıcı adı</b></label>
  //         <input type="text" placeholder="Kullanıcı adınız" name="uname" required />

  //         <label htmlFor="email"><b>Eposta</b></label>
  //        <input type="text" placeholder="example@gmail.com" name="email" required />

  //         <label htmlFor="psw"><b>Parola</b></label>
  //         <input type="password" placeholder="parolanız" name="psw" required />

  //         {/* <button type="submit">Kaydet</button> */}
  //         {/* <label>
  //           <input type="checkbox" checked="checked" name="remember" /> Beni hatırla
  //         </label> */}
  //       </div>

  //       <div className="clearfix">
  //         <button type="button" className="cancelbtn">İptal</button>
  //         <button type="submit" className="signupbtn">Kayıt ol</button>
  //       </div>
  //       <div className="container">
  //         <button>
  //           <span style={{ color: '#f8186f' }} className="girisyap">
  //             {' '}
  //             <a href="login">Zaten bir hesabın var mı? Giriş Yap.</a>
  //           </span>
  //         </button>
  //       </div>
      
  //   </form>
  //   </header>
  // );
}
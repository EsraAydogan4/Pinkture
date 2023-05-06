import logo from './logo.svg';
import './App.css';
import {Add, Chat, Notifications, FavoriteRounded, Person, QuestionMark} from "@mui/icons-material";
import MenuContainer from './Components/MenuContainer';



function App() {
  return (
    <div className="App">
      <div className="menuContainer">
      <img src="./Pinkture.jpg" width="24" height="24" 
      alt="Web Sitesi Logosu" />    

        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />}/>
            <MenuContainer icon={<Notifications />}/>
            <MenuContainer icon={<Chat />}/>
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />}/>
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />}/>
            <MenuContainer icon={<Add />}/>
          </div>
        </div>  
      </div>
      <main> </main>
    </div>
  );
}


export default App;

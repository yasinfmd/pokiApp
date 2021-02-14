import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routers from './router/index.js'
import ThemeContext , {themes} from './context/themeContext'
import Theme from './components/Theme'
import { useState } from 'react';
import { SWITCH_DARK, SWITCH_LIGHT } from './const';
function App() {
  const [theme,setTheme]=useState(themes.dark)
  const toggleTheme=()=>{

    theme===themes.dark?setTheme(themes.light):setTheme(themes.dark)
  }
  return (
    <div>
        <Header/>
        <Theme  theme={theme} themeText={theme===themes.dark?SWITCH_LIGHT:SWITCH_DARK} onClick={()=>{
          toggleTheme()
        }} />
        <div className="appContainer" style={theme}>
        <Routers />
        </div>
        <Footer/>
      </div>
  );
}

export default App;

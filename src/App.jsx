// import './App.css';
import { ThemeContext, ThemeProvider } from '@emotion/react';
import { darkTheme } from './theme/darktheme';
import Navbar from './page/Navbar/Navbar';
import Home from"./page/Home/Home";
import "./App.css";
import Auth from './page/Auth/Auth';

function App() {
  const user=true
  return (
    <ThemeProvider theme={darkTheme}> 
{/* 
       {user? <div>
          <Navbar/>
           <Home/> 
        </div>:<Auth/> } */}

        <Auth/>
     
     


    </ThemeProvider>
  );
}

export default App;

import React from 'react'
import Header from './components/Header_footer/header'
import './resources/styles.css'
import Featured from "./components/featured";
import {Element} from 'react-scroll'
function App() {
  return (
    <div className="App">
      <header className="App-header">

          <>
          <Header
  />
              <Element name="featured">
                  <Featured />

              </Element>
          </>
         </header>
    </div>
  );
}

export default App;

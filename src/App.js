import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import navData from './navbarData'
import dataItems from './data' 


function App() {
  const dataCategory = dataItems.map(dataItem => dataItem.category)

  function toggleDisplay(desc) {
    for (let i = 0; i < dataCategory.length; i++){
      if (desc == dataCategory[i]){
        return(true)
      }else {
        return (true)
      }
    }
  }
  console.log(toggleDisplay())
  const navIcons = navData.map(data => {
    return <Navbar 
              key = {data.id}
              img={data.img} 
              desc={data.desc}
              toggleHandler={toggleDisplay}
            />
  })
  
  const mainData = dataItems.map(data => {
    return <Main 
              key={data.id}
              data={data}
              display={toggleDisplay()}
            /> 
  })
  return (
    <section className="App">
        <section className="header-nav-wrapper">
          <Header />
          <div className="navbar"> {navIcons} </div>
        </section>
        
        <div className="main-section">{mainData}</div>
    </section>
  );
}
export default App;

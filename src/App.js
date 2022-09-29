import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import NavData from './navbarData'
import dataItems from './data' 


function App() {
  //looping over every data using .map
  const navIcons = NavData.map(data => {
    return <Navbar 
              img={data.img}
              text={data.desc}
            />
  })

  const mainData = dataItems.map(data => {
    return <Main 
              key={data.id}
              data={data}
            /> 
  })


  return (
    <section className="App">
        <section className="header-nav-wrapper">
          <Header />
          
          <div className="navbar">
          {navIcons}
          </div>
        </section>
        

        <div className="main-section">
          {mainData}
        </div>

    </section>
  );
}
export default App;

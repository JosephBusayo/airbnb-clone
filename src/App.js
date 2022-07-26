import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navbar from './components/Navbar';

import NavData from './navbarData'
import dataItems from './data' 


function App() {
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
    <div className="App">
        <Header />

        <div className="navbar">
        {navIcons}
        </div>
        
        <div className="main-section">
          {mainData}
        </div>
    </div>
  );
}
export default App;

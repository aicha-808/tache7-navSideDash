
import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar } from './Components/Navbar/Navbar'; 
import { SideBar } from "./Components/sidebar/SideBar";
import { Dashboard } from "./Components/dashboard/Dashboard";
import { AboutUs } from "./Components/pages/AboutUs";
import { Products } from "./Components/pages/Products";
import { Services } from "./Components/pages/Services";
import './App.css';

function App() {
    const listes = [
      {
        title:'Dashboard', url:'#dashboard', cName:'text-decoration-none '
      },
      {
          title:'About us', url:'#aboutus', cName:'text-decoration-none  text-warning'
      },
      {
          title:'Products', url:'#products', cName:'text-decoration-none  text-light '
      },
      {
          title:'Services', url:'#services', cName:'text-decoration-none text-light'
      }
    ];
    //  state
    const [selectItems, setSelectItems] = useState('')
  // comportements

    function recherche(val) {
      setSelectItems(val)
    }
    function validation() {
      alert('success')
    }
    function contAboutus(liste) {
      setSelectItems(liste)
    }
  return (
    <div className="App container-fluid px-0">
     <div className="row">
        <div className="col-sm-12">
          <Navbar bradName="BrandName"  imgSrcPath="@" recherche={recherche}
            validation={validation} contAboutus={contAboutus} /> 
        </div>
        <div className="col-sm-2">
          <SideBar liens={listes} selectItems={selectItems} contAboutus={contAboutus} />
        </div>
        <div className="col-sm-10">
          {selectItems === "Dashboard" && <Dashboard />}
          {selectItems === "About us" && <AboutUs />}
          {selectItems === "Products" && <Products />}
          {selectItems === "Services" && <Services />} 
        </div>
      </div>
    </div>
  );
}

export default App;

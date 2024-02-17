import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { MenuItems } from "./MenuItems";
import { ListItems } from "./ListeItem";
import { Bouton } from './Bouton';
import { Forme } from "./Forme";

export const Navbar = ({bradName, imgSrcPath, recherche, validation, contAboutus, selectItems}) => {
  
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#e">{bradName} {imgSrcPath}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {MenuItems.map((items, index) => 
            <ListItems key={index} cName={selectItems === items.cName ? "nav-link active" : ""}
             url={items.url} title={items.title} onClick={() => contAboutus(items.title)} />
            )}
          </ul>   
          <Forme  onChange={recherche} value='lien' />
          <Bouton onClick={validation} nom='Connect' />
          </div>
        </div>
      </nav>
    )
}

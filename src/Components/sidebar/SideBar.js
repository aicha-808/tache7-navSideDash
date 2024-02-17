import { ListItems } from "../Navbar/ListeItem";
export const SideBar = ({liens, selectItems, contAboutus}) => {
  
    const link = (
        <ul className=""> 
            {liens.map((liste, index) =>
                <ListItems key={index} title={liste.title} cName={selectItems === liste.cName? "active" : ""} 
                url={liste.url} onClick={() => contAboutus(liste.title)} />
            )}
         </ul>
    ) 
    
    return(
        <main className="sidebar bg-secondary pt-4">
           {link}
           <hr />
        </main>     
    )
}
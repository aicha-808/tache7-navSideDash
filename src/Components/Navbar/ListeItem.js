export const ListItems = ({cName, url, title, onClick}) => {
    return <li className="mx-3"   > 
            <a className={cName} href={url} onClick={(event) => onClick(event.preventDefault)} >{title}</a>
            </li>;  
}

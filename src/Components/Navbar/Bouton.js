export const Bouton = (props) => {
    return(
        <button className='btn btn-warning border-0'
        onClick={(event) =>props.onClick(event.preventDefault())}
        > 
        {props.nom}
        </button>
    )
}
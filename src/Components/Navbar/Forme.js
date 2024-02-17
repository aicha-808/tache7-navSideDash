
export const Forme = ({value, onChange}) => {

    return(
        <div className="p-3 ">
            <input className="form-control" type='search' placeholder='search' value={value}
             onChange={(event) => onChange(event.target.value)} />
        </div>     
    )
}

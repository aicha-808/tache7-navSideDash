
export const Dashboard = () => {
  const evolution = [
    {
      titre:'Produit1', total:50, vendu:45, lien: "voir plus"
    },
    {
      titre:'Produit2', total:70, vendu:60, lien: "voir plus"
    },
    {
      titre:'Produit3', total:30, vendu:25, lien: "voir plus"
    }
    ]
    return(
      <div className="container pages">
        <div className="row">
            {evolution.map((result, index) =>
            <div className="col-sm-4 mb-3">
              <div className="card shadow-sm" key={index}>
                <div className="card-body ">
                  <h4 className="card-title">{result.titre}</h4>
                  <p className="card-text">Total: {result.total} </p>
                  <p className="card-text">Vendu: {result.vendu} </p>
                  <a href="#products" className="btn btn-warning">{result.lien}</a>
                </div>
              </div>
              </div>)}
        </div>
      </div>
    )
}
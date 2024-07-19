import "./Artist.css"
export default function Artist({name,image}){
    return <li className="card artist">
    <div id="image">  <img  src={image} alt="artist" />  </div>
     <div className="card-body">
       <p className="artist-name">{name}</p>
     </div>
   </li>
}
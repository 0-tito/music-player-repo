import "./PopularSong.css"
export default function PopularSong({image,title,artist}){
    return (
  <li className="card popuplar-song">
 <div id="card-image"> <img  src={image} alt="song image" /> </div>
  <div className="card-body">
    <p className="card-title">{title}</p>
    <p className="card-text">{artist}</p>
    <a href="#" className="btn btn-secondary"> play </a>
  </div>
</li>
    )
    }



{/* <li  className='song-card'>
<div id='card-image'>  <img src={image} alt='' />  </div>
 <p>{title}</p>
 <p>{artist}</p>
</li> */}
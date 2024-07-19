import "./logo.css"

export default function Logo({children}){
    return (
      <div id='logo'>
       <img className="img-fluid" src={children} alt="" />
      </div>
    )
    }
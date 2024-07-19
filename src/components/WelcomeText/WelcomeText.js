import "./WelcomeText.css"
export default function WelcomeText({userName,children}){
    return (
     <div className='welcome-text'> 
      <h1> {`hello ${userName}`}</h1>
      <p>{children}</p>
      </div>
    )
    }
import "./menuButton.css"

export default function MenuButton({Children}){
    return (
      <button className="menuBtn"> {Children}</button>
    )
}
import "./FooterBtn.css"

export default function FooterBtn({children}){
     return <>
     <li className="footer-btn"> <button> {children}</button> </li>
     </>
}
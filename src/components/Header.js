import MenuButton from './Menu-button/MenuButton.js';
import Logo from './Logo/Logo.js';
import WelcomeText from "./WelcomeText/WelcomeText.js";
import SearchBar from './SearchBar/SearchBar.js';
import componentsImg from "../assets/images/components.png";

export default function Header(){
    return <section className="App-header container">
    <div className='row justify-content-between align-items-center'> 
    <Logo >{componentsImg}</Logo> 
    <MenuButton>Main menu</MenuButton>
    </div>
<WelcomeText  userName={`Ajiri oghene`}> listen to the best songs of 2024</WelcomeText>
<SearchBar />
</section>
}
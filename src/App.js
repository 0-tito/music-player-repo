
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"


// avaliable components
import Header from './components/Header.js';
 import PupolarSongs from './components/PupularSongs.js';
 import Artists from './components/Artists.js';
 import FooterBtn from './components/FooterBtn/FooterBtn.js';

function App() {
  return (
    <>
<Header />
<PupolarSongs />
 <Artists />
 <menu className='footer-menu'> 
     <ul className='Footer-menuList'>
       <FooterBtn>Home</FooterBtn>
       <FooterBtn>Fav</FooterBtn>
       <FooterBtn>playlist</FooterBtn>
       <FooterBtn>all songs</FooterBtn>
     </ul>
 </menu>
    </>
  );
}
// let token = undefined
// async function getToken(){
//     const clientId = `3c1f1b4007f14bc0b62a51457dd36abc`
//     const  clientSecret = `90c9ddf5e754496883cf1241be1103cf`
//    let response = await fetch("https://accounts.spotify.com/api/token", {
//    method: `POST`,
//    headers: {
//            "Content-Type": "application/x-www-form-urlencoded",
//            "Authorization": `Basic ` + btoa(clientId + `:`+ clientSecret)
//        },
//        body: `grant_type=client_credentials`
//    });
//    let data =  await response.json() 
//    console.log(data.access_token)
//    return data.access_token
// }
// token = getToken()
// console.log(token)

//  async function getWebApi(endpoint,method,body){
// let response =  await fetch(`https://api.spotify.com/${endpoint}`, {
//    headers: {
//       Authorization: `bearer ${token}`
//    }.
//    method,
//    body: JSON.stringify(body)
// })

// await response.json()
// console.log(response)
// };
export default App;
 
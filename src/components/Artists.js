import Artist from './Artist/Artist.js';
import titomg from "../assets/images/ai-tito.jpg";
import newOne from "../assets/images/jsx-ui.png"
import newImG from "../assets/images/drake2.jpg"

import SongSection from "./Structure/SongSection"

export default function Artists(){
   return  <SongSection title="Artists" text="see all" className="artists" head="header"> 
  <ul className="artist-list">
   <Artist name="drake" image={titomg}/> 
   <Artist name="michael" image={newOne} />
   <Artist name="drakeAg" image={newImG} />
  </ul> 
 </SongSection>
}
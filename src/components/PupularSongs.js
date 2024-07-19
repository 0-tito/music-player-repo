import drake1Img from "../assets/images/drake1.jpg"
import drake2Img from "../assets/images/drake2.jpg"
import configImg from "../assets/images/config.png"
import titoImg from "../assets/images/ai-tito.jpg"

import PopularSong from './PopularSong/PopularSong.js';
import SongSection from "./Structure/SongSection.js";

export default function PupolarSongs() {
return <SongSection title="popular songs" text="see all" className='popular-songs' head="header" >
 <ul className="song-list">
  <PopularSong title={"dance monkey"} artist={"tones and i"} image={titoImg} />
  <PopularSong title={"fake friends"} artist={"drake"} image={drake1Img} />
  <PopularSong title={"hehe"} artist={"new one"} image={drake2Img} />
  <PopularSong title={"new shet"} artist={"my guy"} image={configImg} />
 </ul> 
</SongSection>
}
import { FaCaretRight, FaExternalLinkAlt } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Tile from "./Tile";

export default function Intro() {
  return (
    <BrowserRouter>
      <div className='intro-container'>
        <div className='intro-div'>
          <Tile 
            basis="col-start-2 md:col-start-3 col-end-6 row-start-2" 
            color="from-blue-400 via-sky-400 to-amber-400 hover:from-blue-300 hover:via-sky-300 hover:to-amber-300"
          >
            <div>
              Hi, I'm Edmund 👋. <br/>
              <span className='text-emphasis'>Welcome to my personal website.</span><br/>
              I am interested in data science and web3. <br/>
              I am amateurishly obsessed with beautiful math proofs. <br/>
            </div>
          </Tile>
          <Tile 
            basis="col-start-3 md:col-start-4 col-end-6 row-start-1" 
            color="from-amber-400 to-red-400 hover:from-amber-300 hover:to-red-300"
          >
            <Link to='#projects' smooth>Projects <div className='icon'><FaCaretRight /></div></Link> <br/>
            <Link to='#courses' smooth>Courses Done <div className='icon'><FaCaretRight /></div></Link> <br/>
            <a href='https://www.linkedin.com/in/edmund-wu-551b60230/' target='_blank'> Linkedin <div className='icon text-xs'><FaExternalLinkAlt /></div></a> <br/>
          </Tile>
        </div>
      </div>
    </BrowserRouter>
  )
}
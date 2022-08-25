import React from "react";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AccordionLayout from "./AccordionLayout";
import Tile from "./Tile";


export default function Courses() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div id='courses'>
      <div className='title'>
        Courses.
      </div>
      <div className='courses-div'>
        <Tile 
          basis="lg:basis-2/3" 
          color="from-stone-400 to-slate-400"
        >
          <strong><a href='https://www.mcgill.ca/mathstat/undergraduate/programs/b-sc/honours-statistics-and-computer-science-b-sc' target='_blank'>
            Major - Honours statistics and computer science <div className="icon text-xs"><FaExternalLinkAlt /></div>.
          </a></strong>
          <div className="accordion">
            <AccordionLayout 
              title="McGill Comp classes"
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <AccordionLayout 
              title="McGill Math classes"
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <AccordionLayout 
              title="Online courses"
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            {(activeIndex === 1) && (
              <div className="accordion-content">
                Comp202; Comp206; Comp250.
              </div>
            )}
            {(activeIndex === 2) && (
              <div className="accordion-content">
                Math222; Math235; Math247; Math254; Math255.
              </div>
            )}
            {(activeIndex === 3) && (
              <div className="accordion-content">
                Udemy web dev (2021) <br/>
                Google data analyst certification. <a href='https://www.credly.com/badges/a1cbdfd2-b3d5-4e44-b5cb-fb4e6db3deae?source=linked_in_profile' target='_blank'>Show credentials <div className="icon text-xs"><FaExternalLinkAlt /></div></a>. <br/>
                Deep learning certification from deeplearning.AI. <a href='https://www.credly.com/badges/a5a45bfa-8c25-40dc-9ad6-ce7fd0f8e24c?source=linked_in_profile' target='_blank'>Show credentials <div className="icon text-xs"><FaExternalLinkAlt /></div></a>. <br/>
              </div>
            )}
          </div>
        </Tile>
      </div>
    </div>
  )
}
  
import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const AccordionLayout = ({ title, index, activeIndex, setActiveIndex }: {title: string, index: number, activeIndex: number, setActiveIndex:any}) => {
  
  function handleSetIndex(index:number) {
    if (activeIndex === index) {setActiveIndex(0);};
    (activeIndex !== index) && setActiveIndex(index);
  };

  return (
    <div onClick={() => handleSetIndex(index)}>
        <button className='accordion-expand-button'>
            {title}
          <div className='accordion-icon'>
            {
            (activeIndex === index) 
            ? <div className='icon'><FaCaretUp /></div>
            : <div className='icon'><FaCaretDown /></div>
            }
          </div>
        </button>
    </div>
  );
};

export default AccordionLayout;
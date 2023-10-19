import React, {useState }from 'react'
import {GoChevronLeft} from 'react-icons/go'
import {GoChevronDown} from 'react-icons/go'
const Panel = ({children , header}) => {
    const [panel, setPanel] = useState(false)
     const handleClick = ()=>{
        setPanel(!panel)
     }
  return (
    <div className=' bg-gray-100 rounded-3xl' >
        <div className='flex justify-between items-center m-20'>
         <div>
            {header}
         </div>
         <div onClick={handleClick}>
          {panel ? <GoChevronDown/> : <GoChevronLeft/>}  
         </div>
        </div>
        
        {panel &&  <div>{children}</div> }
        
        
        </div>
  )
}

export default Panel
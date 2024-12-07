import React from 'react'

const Forms = (props) => {
  return (
    <div className="forms-area">
    <div className="form-images">
        <span>
        {
            props.insuranceTypes.map((item, index) => (
        <span onClick={()=> props.setselectedIndex(index)}>
           {
            item.images
           }
           <p className={index === props.selectedIndex ? 'active' : "" } >{item.title}</p>
        </span>
            ))
        }
        </span>
    </div>
    <div className="form-contents">
       {
        (props.insuranceTypes[props.selectedIndex].fields).map((item,index)=>(
          <>
            <span>
            <p>{item.label}</p>
            <input type="text" placeholder={item.placeholder} />
        </span>
          </>
        ))
       }
       
        
       <button>View Price</button>
    </div> 
 </div>
  )
}

export default Forms
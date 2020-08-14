import React from 'react';
import data from '../MenuData/data.json';
import './CSS/Modal.css'

function ModalComponent(props) {
  let categoryComponent=Object.keys(data).map((category,index)=>{
    return(<h6 onClick={()=>props.scrolltocategory(category)} key={index}>{category}</h6>)
  })
  let Modal=()=>{
    return(

      <div className="modal-Main">
        <div className="modal-content">
          {categoryComponent}
        </div>
      </div>
    )
  }
  let Backdrop=()=>{
    return(<div className="backdrop" onClick={props.onHide}/>)
  }
  return (
    props.show?<><Backdrop/><Modal/></>:null
  );
}

export default ModalComponent;

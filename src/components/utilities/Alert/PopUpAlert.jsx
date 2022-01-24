import { faWeight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const PopUpAlert = ({content,closeModal,addingStyle}) => {
    return (
        <div className="alert-for-all-web" >
            <div id="demo-modal3" class="modal">
            <div class="modal__content" style={addingStyle && {margin: "0px 0px 200px 0px",width:"60%",height:"350px" }}>
                <div class="alert-main-area" style={addingStyle &&{display:"flex",alignItems:"center"}}>
                    {
                        (!addingStyle) && <h2>{content}</h2>
                       
                    }
                    {
                        (addingStyle)&&
                        <>
                        <p style={{color:"#df2c8a",flex:"0 0 50%"}}>{content}</p> 
                        <img src="/contents/assets/images/popUp.jpg" style={{width:"100%",height:"350px"}} alt="" />
                        </>
                        
                    }
                    
                    {
                       (!addingStyle) && <button class="warning" onClick={closeModal}>Ok</button>
                    }
                    
                </div>  
                <a href class="modal__close" onClick={closeModal}>&times;</a>
            </div>
        </div>
        </div>
    )
}

export default PopUpAlert

import React from 'react';
import Popup from 'reactjs-popup';
import '../../index.css';
import Media from '../mock/popupData';

export default function PopupComp() {
    return(
        <div>{Media.map((item) =>{
            return(
                <Popup sx={{width:"50%"}}
                    trigger={ 
                    File.type === 'image'
                    ? <img src={item.url} style={{width:'50%'}}/>
                    : <video src={item.url} muted />
                }
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                        &times;
                        </button>
                        
                        
                        

                        <div className="actions" style={{width:'auto'}}>
                        <iframe src={item.url} type=""></iframe>
                        
                        </div>
                    </div>
                    )}
                </Popup>
            )
        })}
            
        </div>
    )
}
  

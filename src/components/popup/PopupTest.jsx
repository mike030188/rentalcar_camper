import React from 'react';
import Media from '../mock/popupData';
import { Container } from './Popup.style';
import { useState } from 'react';

const PopupApp = () => {
    const [file, setFile] = useState(null);

    return (
        <Container>
            <div className="media-container">
                {
                    Media.map((file, index)=> (
                        <div className="media" key={index} onClick={() => setFile(file)}>
                            {
                                file.type === 'image'
                                ? <img src={file.url} alt="" />
                                // add #t=0.001 to load video thumbnail on mobile
                                : <video src={`${file.url}#t=0.001`} muted preload='metadata'/>
                            }
                        </div>
                    ))
                }
            </div>

            <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
                <span onClick={() => setFile(null)}>&times;</span>

                {
                    file?.type === 'video'
                    ? <video style={{height:'50%'}} src={file?.url} muted autoPlay controls/>
                    : <img src={file?.url} alt="" />
                }

            </div>
        </Container>
    )
}

export default PopupApp;
import React from 'react';
import { GridContainer, HeadWrapper } from '../styles/CampingPlace.style';
import placeContent from '../mock/placeContent';

const CampingPlaceComp = () => {
  return (
    <div style={{background:' #FAFAFA'}}>
        <HeadWrapper>
            <h5>Home / Camping place</h5>            
            <h1>Camping places</h1>
        </HeadWrapper>
        <GridContainer>{placeContent.map((item) => {
            return (              
                <div key={item.id}>      
                  <img src={item.imgUrl} alt="Camping Place" />
                  <h3>{item.place}</h3>
                  <p>{item.location}</p>                        
                </div>              
            )
          })}
        </GridContainer>
    </div>
  )
}

export default CampingPlaceComp;
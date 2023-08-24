import React from 'react';
import { GridContainer, HeadWrapper } from '../styles/CampingPlace.style';
import placeContent from '../mock/placeContent';
import { Link } from 'react-router-dom';

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
                <Link to='/campinglocation' style={{textDecoration: 'none'}}>  
                  <img src={item.imgUrl} alt="Camping Place" />
                </Link>
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
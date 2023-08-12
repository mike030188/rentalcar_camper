import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import NavbarComp from '../navbar/Navbar';
import FooterComp from '../footer/Footer';
import { Button, DetailWrap, FlexDown, FlexUp, HeadWrapper, ItemInfo, MainWrapper } from '../styles/CarInfo.style';
import content from '../mock/content';
import CardComp from './Card';
import { Link, useParams } from 'react-router-dom';
import carData from '../mock/carData';
import BasicTabs from '../tabs/Tabs';


const CarInfo = () => {

  const { id } = useParams();

  const singleCarData = carData.find((data)=> data.id === parseInt(id))
  
  /* if (!carData) { 
    return <div>No car data found!</div>
  } */
  
  // console.log("data:", singleCarData);


  return (
    <div style={{background:' #FAFAFA'}}>

      <NavbarComp/>

      <HeadWrapper>          
        <h2>Aidal</h2>
        <div style={{display:'flex', }}>
          <Link to="/cart">
            <Button add style={{marginRight:'12px'}}>ADD TO CART</Button>
          </Link>
          <Button>COMPARE</Button>
        </div>          
      </HeadWrapper>

      <MainWrapper>  
      <Zoom>
        <DetailWrap >

          {/* Error was occured on Image tag */}

          <img src={singleCarData.photo} alt="campingCar" style={{width:'50%', height:'100%'}}/>

          <ItemInfo>
            <FlexUp>              
              <div style={{display:'flex', flexDirection:'column'}} >
                <h2>{singleCarData.name}</h2>
                <p>{singleCarData.date}</p>
              </div>
              <div style={{paddingLeft:'22%'}}>
                  <h1>{singleCarData.cost}W</h1>
              </div>
            </FlexUp>
            <FlexDown>
              <div>
                <ul style={{fontWeight:'600' ,}}>
                  <li>Company</li>
                  <li>People</li>
                  <li>License type</li>
                </ul>
              </div>
              <div>
                <ul style={{fontWeight:'400' ,}}>
                  <li>{singleCarData.company}</li>
                  <li>{singleCarData.people}</li>
                  <li>{singleCarData.license}</li>
                </ul>
              </div>
            </FlexDown>
          </ItemInfo>          
        </DetailWrap>  
      </Zoom>

        <div>{content.map((item, index) => (
          <Bounce left>
          <CardComp key={index} item={item}/>
          </Bounce>))}

        </div>

        <div style={{paddingLeft:'70px', marginTop:'-130px', marginBottom:'154px'}}>
          <Button add style={{marginRight:'12px'}}>ADD TO CART</Button>
          <Button style={{border:'2px solid #006DAB', color:'#006DAB'}}>COMPARE</Button>
        </div>
      </MainWrapper>  

      <BasicTabs/>

      <FooterComp/>

    </div>
  )
}

export default CarInfo
import React from 'react'
import { Flex, ImageWrapper, Info, InfoItemLeft, InfoItemRight, Span, SubTitle, Text, Title } from '../styles/CampingLocation.style';
import {CiLocationOn, CiClock2, CiHome} from 'react-icons/ci';
import {FiPhone} from 'react-icons/fi';
import {GoogleApiWrapper} from 'google-maps-react';
import img1 from '../../assets/location/image 11.png';
import img2 from '../../assets/location/image 12.png';
import img3 from '../../assets/location/image 13.png';
import img4 from '../../assets/location/image 14.png';
import img5 from '../../assets/location/image 15.png';
import img6 from '../../assets/location/image 16.png';
const CampingLocationComp = () => {
  return (
    <div style={{background: '#FAFAFA'}}>
        <ImageWrapper>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </ImageWrapper>
        <Title>Camping Del Sole Village</Title>
        <Flex>
            <a href="/campingplaces">Location</a>
            <button>Copy map</button>
        </Flex>
        <Info>
            <InfoItemLeft>
                <div>
                    <Span><CiLocationOn style={{color:'#373737B2'}}/></Span>
                    <Text>Korea, Seul</Text>
                </div>
                <div style={{marginTop:'18px'}}>
                    <Span><FiPhone style={{color:'#373737B2'}}/></Span>
                    <Text>005- 862 -8569</Text>
                </div>                
            </InfoItemLeft>
            <InfoItemRight>
                <div>
                    <Span><CiClock2 style={{color:'#373737B2'}}/></Span>
                    <Text> from <span>11:00</span> to <span>19:00</span> </Text>
                </div>
                <div style={{marginTop:'18px'}}>
                    <Span><CiHome style={{color:'#373737B2'}}/></Span>
                    <a href="www.logomaker.com">logo.com</a>
                </div>                
            </InfoItemRight>
        </Info>
        <SubTitle>
            <h4>Description</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
                bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sapien senectus feugiat in vitae consequat libero placerat nascetur ultrices. Aenean mattis sapien a donec urna, 
                bibendum. Maecenas mattis phasellus nunc sed a fringilla risus. Aenean sed fusce pretium sit venenatis bibendum convallis commodo enim.
            </p>
        </SubTitle>
        {/* <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map> */}

    </div>
  )
}



  
export default GoogleApiWrapper({
    apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
  })(CampingLocationComp)
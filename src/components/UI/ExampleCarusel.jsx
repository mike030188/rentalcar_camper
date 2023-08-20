import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';
import carData from "../mock/carData";
import { Button, CarouselItems, Img, Span } from "./ExampleCarousel.style";
// import car1 from '../../assets/main/carouselcamp.png';


const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},

]

export default class CarouselApp extends Component {
    // state= {
    //     items: [
    //         {id: 1, url: car1},
    //         {id: 2, url: car1},
    //         {id: 3, url: car1},
    //         {id: 4, url: car1},
    //         {id: 5, url: car1},
            
    //     ]
    // }

    render () {
        // const {items} = this.state;

        return (
            <Carousel breakPoints={breakPoints}>
                {carData.map(item => 
                    <CarouselItems key={item.id}>
                        <Img>
                        <Span>NEW</Span>
                        <img src={item.photo} alt="car" width='300px' height='180px'/>
                        </Img>
                        <h5>{item.company}</h5>
                        <Button>
                            <a href="">Discover the range</a>
                        </Button>
                        <select name="car" id="model">
                            <option value="">Choose a model</option>
                        </select>
                    </CarouselItems>
                    )}
            </Carousel>
        )
    }

}
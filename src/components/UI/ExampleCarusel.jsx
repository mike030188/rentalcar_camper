import React, {Component} from "react";
import Carousel from 'react-elastic-carousel';
import car1 from '../../assets/main/carouselcamp.png'

export default class CarouselApp extends Component {
    state= {
        items: [
            {id: 1, url: car1},
            {id: 2, url: ''},
            {id: 3, url: ''},
            {id: 4, url: ''},
            {id: 5, url: ''},
            
        ]
    }

    render () {
        const {items} = this.state;
        return (
            <Carousel>
                {items.map(item => 
                    <div key={item.id}>
                        <img src={item.url} alt="car" />
                    </div>
                    )}
            </Carousel>
        )
    }

}
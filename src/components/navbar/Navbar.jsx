import { Link } from "react-router-dom";
import { MenuItems, NavIcons, NavMenu, NavbarWrapper, Text } from "./Navbar.style";
import {FaAngleDown, FaCartPlus, FaUser} from 'react-icons/fa';
import { useReducer } from "react";

// useReducer - switch case bilan yaxshi chiqishadi...

const reducer = (state, action) => {
    switch(action.type) {
        case "showToggle":
            return { showItems: !state.showItems};
        default:
            return state;
    }
};

export default function NavbarComp() { 
    
    const [state, dispatch] = useReducer(reducer, {
        showItems: false,
    });

    return(
        <NavbarWrapper>
            <Text>Camper</Text>
            <NavMenu>
                <MenuItems>                    
                    <button onClick={()=>{
                        dispatch({ type:"showToggle" });
                        }}>Motor <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showItems && 
                        <div>
                            <Link to='/' style={{textDecoration:'none'}}>
                                <p>Motor</p>
                            </Link>
                                <p style={{margin:'10px 0'}}>Opel</p>
                                <p>Audi</p>
                        </div>
                    }    
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Caravan</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Tuning</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Used car</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </MenuItems>
                <Link to="/campingplaces" style={{textDecoration:'none'}}>
                    <MenuItems><span>Camping Place</span></MenuItems>
                </Link>
            </NavMenu>
            <NavIcons>
                <FaCartPlus style={{color:'#006DAB'}}/>
                <FaUser style={{marginLeft:'25px', color:'#006DAB'}}/>
                <select name="language" id="language" style={{border:'none', marginLeft:'25px'}}>
                        <option value="english">En</option>
                        <option value="russian">Rus</option>
                        <option value="uzbek">Uz</option>
                        <option value="korean">Kor</option>
                    </select>
            </NavIcons>
        </NavbarWrapper>
    )
}
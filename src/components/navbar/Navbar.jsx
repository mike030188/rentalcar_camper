import { Link } from "react-router-dom";
import { MenuItems, NavIcons, NavMenu, NavbarWrapper, Text } from "./Navbar.style";
import {FaAngleDown, FaCartPlus, FaUser} from 'react-icons/fa';
import { useReducer } from "react";

// useReducer - switch case bilan yaxshi chiqishadi...

const reducer = (state, action) => {
    switch(action.type) {
        case "showToggle1":
            return { showMotor: !state.showMotor};
        case "showToggle2":
            return { showCaravan: !state.showCaravan};
        case "showToggle3":
            return { showTuning: !state.showTuning};
        case "showToggle4":
            return { showUsedCar: !state.showUsedCar};
        default:
            return state;
    }
};

export default function NavbarComp() { 
    
    const [state, dispatch] = useReducer(reducer, {
        showMotor: false,
    });

    return(
        <NavbarWrapper>
            <Link to='/' style={{textDecoration:'none'}}>
                <Text>Camper</Text>
            </Link>
            
            <NavMenu>
                <MenuItems>                    
                    <button onClick={()=>{
                        dispatch({ type:"showToggle1" });
                        }}>Motor <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showMotor && 
                        <div>
                            <Link to='/motor' style={{textDecoration:'none'}}>
                                <p>Motor</p>
                            </Link>
                                <p style={{margin:'10px 0'}}>Opel</p>
                                <p>Audi</p>
                        </div>
                    }    
                </MenuItems>
                <MenuItems>
                    <button onClick={()=>{
                        dispatch({ type:"showToggle2" });
                        }}>Caravan <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showCaravan && 
                        <div>
                            <Link to='/' style={{textDecoration:'none'}}>
                                <p>Caravan</p>
                            </Link>
                                <p style={{margin:'10px 0'}}>Opel</p>
                                <p>Audi</p>
                        </div>
                    }   
                </MenuItems>
                <MenuItems>
                    <button onClick={()=>{
                        dispatch({ type:"showToggle3" });
                        }}>Tuning <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showTuning && 
                        <div>
                            <Link to='/' style={{textDecoration:'none'}}>
                                <p>Tuning</p>
                            </Link>
                                <p style={{margin:'10px 0'}}>Opel</p>
                                <p>Audi</p>
                        </div>
                    } 
                </MenuItems>
                <MenuItems>
                    <button onClick={()=>{
                        dispatch({ type:"showToggle4" });
                        }}>Used car <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showUsedCar && 
                        <div>
                            <Link to='/' style={{textDecoration:'none'}}>
                                <p>Used car</p>
                            </Link>
                                <p style={{margin:'10px 0'}}>Opel</p>
                                <p>Audi</p>
                        </div>
                    } 
                </MenuItems>
                
            </NavMenu>
            <Link to="/campingplaces" style={{textDecoration:'none'}}>
                    <MenuItems><span>Camping Place</span></MenuItems>
                </Link>
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
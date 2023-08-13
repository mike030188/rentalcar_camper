import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionContent } from './NavAccordion.style';
import carData from '../mock/carData';
import { Button } from '../styles/CarInfo.style';

export default function NavAccordionComp() {
  return (
    <div style={{display:'flex', justifyContent: 'space-evenly'}}>       
       
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Motor</Typography>     
          
        </AccordionSummary>
        <AccordionDetails style={{display:'flex', 
                            marginTop:'21px', 
                            height:'290px', 
                            width:"100%", 
                            position:'absolute', 
                            zIndex:'1', 
                            backgroundColor:'#f9f9f9'}}>
          <Typography style={{display:'flex', justifyContent: 'space-between'}} >{carData.slice(0, 5).map((item, index)=> {
            return(
            <AccordionContent key={index} item={item}>   
                <img src={item.photo} alt="" />
                <h3>{item.name}</h3>

                <Button add wd='230px' hgt='40px'>See all</Button>
            
            </AccordionContent>
            )
        })}  
          </Typography>
        </AccordionDetails>
        
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Caravan</Typography>     
          
        </AccordionSummary>
        <AccordionDetails style={{display:'flex', 
                            marginTop:'21px', 
                            height:'290px', 
                            width:"100%", 
                            position:'absolute', 
                            zIndex:'1', 
                            backgroundColor:'#f9f9f9'}}>
          <Typography style={{display:'flex', justifyContent: 'space-between'}} >{carData.slice(0, 5).map((item, index)=> {
            return(
            <AccordionContent key={index} item={item}>   
                <img src={item.photo} alt="" />
                <h3>{item.name}</h3>

                <Button add wd='230px' hgt='40px'>See all</Button>
            
            </AccordionContent>
            )
        })}  
          </Typography>
        </AccordionDetails>
        
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Tuning</Typography>     
          
        </AccordionSummary>
        <AccordionDetails style={{display:'flex', 
                            marginTop:'21px', 
                            height:'290px', 
                            width:"100%", 
                            position:'absolute', 
                            zIndex:'1', 
                            backgroundColor:'#f9f9f9'}}>
          <Typography style={{display:'flex', justifyContent: 'space-between'}} >{carData.slice(0, 5).map((item, index)=> {
            return(
            <AccordionContent key={index} item={item}>   
                <img src={item.photo} alt="" />
                <h3>{item.name}</h3>

                <Button add wd='230px' hgt='40px'>See all</Button>
            
            </AccordionContent>
            )
        })}  
          </Typography>
        </AccordionDetails>
        
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Used car</Typography>     
          
        </AccordionSummary>
        <AccordionDetails style={{display:'flex', 
                            marginTop:'21px', 
                            height:'290px', 
                            width:"100%", 
                            position:'absolute', 
                            zIndex:'1', 
                            backgroundColor:'#f9f9f9'}}>
          <Typography style={{display:'flex', justifyContent: 'space-between'}} >{carData.slice(0, 5).map((item, index)=> {
            return(
            <AccordionContent key={index} item={item}>   
                <img src={item.photo} alt="" />
                <h3>{item.name}</h3>

                <Button add wd='230px' hgt='40px'>See all</Button>
            
            </AccordionContent>
            )
        })}  
          </Typography>
        </AccordionDetails>
        
      </Accordion>
           
    </div>
  );
}
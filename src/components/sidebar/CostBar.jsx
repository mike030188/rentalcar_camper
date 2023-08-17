import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Col} from '../styles/MotorComponents.style';

export default function CostSidebarComp() {
  return (
    <div>
        <Col cost>
            
            <div style={{display:'flex', marginTop:'30px'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
              <label htmlFor="">from</label>
              <input type="text" />
              </div>
              <div style={{display:'flex', flexDirection:'column', marginLeft:'25px'}}>
              <label htmlFor="">to</label>
              <input type="text" />
              </div>
            </div>
          </Col>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" style={{height:'20px', borderBottom:'1px solid rgba(55, 55, 55, 0.30)'}}
        >

          <Typography >Brand</Typography>
        </AccordionSummary>
        
        <AccordionDetails>
          <Typography>
            <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Aidal</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Knal</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">escape</label>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header" style={{height:'20px', borderBottom:'1px solid rgba(55, 55, 55, 0.30)'}}
        >
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                 
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">escape</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Aidal</label>
              </div>                             
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header" style={{height:'20px', borderBottom:'1px solid rgba(55, 55, 55, 0.30)'}}
        >
          <Typography>License type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                 
          <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">1 year</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">2 year</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">1.5 year</label>
              </div>                             
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header" style={{height:'20px', borderBottom:'1px solid rgba(55, 55, 55, 0.30)'}}
        >
          <Typography>Number of travelers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                 
          <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">2</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">3-4</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">5+</label>
              </div>                             
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header" style={{height:'20px', borderBottom:'1px solid rgba(55, 55, 55, 0.30)'}}
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                 
          <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Seoul</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Daegu</label>
              </div>
              <div className="form-group">
                <input type="checkbox" name="brand" />
                <label htmlFor="">Busan</label>
              </div>                         
            
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Button cnl>Cancel</Button>
          <Button srch bg='#006DAB' style={{marginLeft:'8px'}}>Search</Button>
    </div>
  );
}

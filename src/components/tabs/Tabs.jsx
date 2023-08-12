import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ContentPanel, GridPanel, GridItems, ItemHeader } from './Tabs.style';
import carData from '../mock/carData';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
          width: '100%', 
           
          }}>
      <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            backgroundColor: 'rgba(0, 109, 171, 0.20)' ,
            padding:'0 70px',
            }}>
        <Tabs 
            value={value} 
            onChange={handleChange} 
            sx={{ 
              "& button": {color:'#373737'},
              "& button:hover": {color:'#FFF', background:'#006DAB'}
               
              }}>
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <ContentPanel>
        <CustomTabPanel value={value} index={0}>
            <ItemHeader>
              <h3>Premium Review: <span style={{color:"#006DAB", marginLeft:'7px'}}>{carData.length}</span></h3>
              <select name="cars" id="best">
                <option value="best">Best</option>
                <option value="good">Good</option>
              </select>
            </ItemHeader>
            <GridPanel>{carData.slice(0, 6).map((item) => {
              return (
                <GridItems key={item.id}>
                  <div style={{display:'flex'}}>
                    <img src={item.photo} alt="campingCar" width="28%" height="100px"/>
                    <div style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', paddingLeft:'15px'}}>
                      <h4>{item.company}</h4>
                      <h5>{item.name}</h5>
                      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>

                  <div>
                    <h5>ID:<span style={{color:"#006DAB", marginLeft:'7px'}}>{item.id}</span></h5>
                    <h5>Date:<span style={{color:"#006DAB", marginLeft:'7px'}}>{item.date}</span></h5>
                    <h5>Viewed:<span style={{color:"#006DAB", marginLeft:'7px'}}>{item.viewed}</span></h5>
                  </div>
                </GridItems>
                
              )
            })}
              
            </GridPanel>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
      </ContentPanel>
      
    </Box>
  );
}
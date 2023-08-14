import React from 'react';
import Box from "@mui/material/Box";

type WorkItemProps = {
  text: string;
  imageUrl: string;
  linkUrl: string;
};

const WorkItem: React.FC<WorkItemProps> = ({ text, imageUrl, linkUrl }) => {

  const textStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#414141',
    textDecoration: 'none'
  };

  const imageStyle = {
    display: 'inline-block',
    transitionDuration: '0.4s',
    boxShadow: '0px 4px 15px -5px rgba(85, 85, 85, 0.75)',
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0px 8px 18px -5px rgba(85, 85, 85, 0.75)'
    }
  };

  return (
    <Box sx={{ position: 'relative', display: { xs: 'block', md: 'flex' }, width: { xs: '100%', md: '50%' }, padding: '10px'}}>
      <div style={{ textAlign: 'center', padding: '10px'}}>
        <Box
            component='a'
            href={linkUrl}
            sx={imageStyle}>
            <img src={imageUrl} alt="" style={{width: '100%'}}/>
        </Box>
        <div style={{paddingTop: '10px'}}>
            <a style={textStyle} href={linkUrl}>
                {text}
            </a>
        </div>
      </div>
    </Box>
  );
};

export default WorkItem;

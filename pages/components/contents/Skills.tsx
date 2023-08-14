import React from 'react'
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import ContentsTitle from '../utils/ContentsTitle';
import HorizontalBarChart from '../utils/HorizontalBarChart';
import Typography from "@mui/material/Typography";

export const Skills: React.FC = () => {
    const data = [
      { name: 'PHP', level: 3 },
      { name: 'Laravel', level: 3 },
      { name: 'MySQL', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'React', level: 1 },
    ];  

  return (
    <Container>
        <Box sx={{ textAlign: 'center', mt: 10}}>
            <ContentsTitle text='Skills'/>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <Typography sx={{ color: '#414141' }}>
                これまでに身に着けた私のスキルたち<br />
                分かりやすいようにグラフにまとめました
            </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <HorizontalBarChart data={data} />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5}}>
            <Typography sx={{ color: '#414141' }}>
                グラフの見方は「1:軽く使用した程度または独学」「2:業務で数カ月以上経験」「3:業務で1年以上経験」「4:業務で3年以上経験」という感じです
            </Typography>
        </Box>
    </Container>
  )
}

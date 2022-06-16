import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Card from "./Card";
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const CardContainer = () => {
  const data = [
    {
      icon: <VolumeMuteIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
    {
      icon: <BorderColorIcon style={{fontSize:'35px',padding:'0 10px'}}/>,
      title: "Markketing and communication",
      desc: "58 jobs available",
    },
  ];
  console.log(data);
  return (
    <div style={{marginTop:'5%',backgroundColor:'#F6F7FC'}}>
      <Container>
          <h1 className="solutions-card">
              One platform many <span className='color-change'>solutions</span>
          </h1>
      <Grid container>
        {data.map((item) => (
          <Grid item md={3} xs={12}>
            <Card title={item.title} desc={item.desc} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default CardContainer;

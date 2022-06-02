import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {typeColor} from "../../utils/tagColor";
import './Card.css'

const CardComponent = ({data}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return <div className="card">
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
            <div className="pokemon-add-info">
                <div className="pokemon-general-info">
                <CardMedia
          component="img"
          // style={{height: 250}}
          image={data.sprites.other.dream_world.front_default}
        />
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="modal_pokemon_name">{data.name}</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p className="modalRank">Pokedex Entry: {data.id}</p>
              <p className="modalHeader">Height: {data.height} m</p>
              <p className="modalHeader">Weight: {data.weight/10} kgs</p>
              <div className="abilities">Ability: <div className="ability-column">{data.abilities.map((item)=>{
                   return <div className="ability">{item.ability.name} </div>
            })}</div></div>
                <div className="types">{data.types.map((item)=>{
                   return <div className="type" style={typeColor(item.type.name)}>{item.type.name}</div>
            })}</div>
          </Typography>
                </div>
                
                <div className="pokemon-stats-info">
                <p className="modalHeader">Stats:</p>
                </div>
            </div>
            
        </Box>
      </Modal>
      <Card sx={{ maxWidth: 300 }} onClick={handleOpen}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={data.sprites.other.dream_world.front_default}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className="pokemon_name">{data.name}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <p className="rank"># {data.id}</p>
              <div className="physique">
              <p><span className="header">Height:</span> {data.height} m</p>
              <p><span className="header">Weight:</span> {data.weight/10} kgs</p>
              </div>
            <div className="types">{data.types.map((item)=>{
                   return <div className="type" style={typeColor(item.type.name)}>{item.type.name}</div>
            })}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
}

export default CardComponent;
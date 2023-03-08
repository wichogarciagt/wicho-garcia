import { Box, Button, ImageList, ImageListItem, Modal, Typography } from '@mui/material';
import React from 'react'
import { MainLayout } from '../components/layouts';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
  };

const WonderPage = () => {

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MainLayout title={'Para una mujer especial'} pageDescription={'Para una mujer especial...'}>
            <Box 
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >

            <div>
                
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Hola Grecy Ellen 😌!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Hoy es el día de la mujer, y como tu sabrás no soy bueno escribiendo una tarjeta o haciendo un dibujo, así que hice lo que mejor puedo hacer, e hice una pequeña galería para ti, no son las fotos mas profesionales pero reflejan algo importante; la mujer genial, inteligente, hermosa, fuerte, frágil, feliz, sonriente, tierna, maravillosa, linda, bromista, empoderada, tenaz, cariñosa, románticaa, etc. que eres para el mundo.
                    <br />
                    Esto estará disponible solo por hoy, espero que te haya gustado.
                    </Typography>
                    <Button variant="outlined" onClick={handleClose}>Ir a la galería</Button>
                    <br />
                    </Box>
                </Modal>
            </div>
            
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>

        </MainLayout>
    )
}

export default WonderPage;

const itemData = [
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246079/images/oj0hwcxzwwi3nfychcdp.jpg',
      title: 'Volcan de Fuego',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246079/images/dep6o7ggw2hbegftczle.jpg',
      title: 'Al atardecer',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246078/images/frufr98zbf6i71pn3guq.jpg',
      title: 'Paz',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246073/images/knt2tgngvfaizpsoxs1o.jpg',
      title: 'Dia soleado',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246073/images/ceuif9fvfbz51zwddh18.jpg',
      title: 'Entre arboles',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246069/images/rxtj5fwco1izjzb0zrep.jpg',
      title: 'Al amanecer',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246067/images/c3juhcrmqqqitst2qldi.jpg',
      title: 'Fotografa',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246066/images/ae4293uoxinlg5ttxuzj.jpg',
      title: 'Caballos',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246059/images/gaa0jrzbpiwrcurdbxui.jpg',
      title: 'Sonrisa',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246059/images/csxkhodvtchqrjyjxfyw.jpg',
      title: 'Especial',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246058/images/pybvno4mjlyr6tyvq80m.jpg',
      title: 'Anaranjado',
    },
    {
      img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246058/images/z4noewu3bpbnxijfyurc.jpg',
      title: 'Luz',
    },

    {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246057/images/n3zh7ljholsoavutazgc.jpg',
        title: 'Sonrisa',
      },
      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678246056/images/ntvx1xitic4pi7k6d3la.jpg',
        title: 'Arco',
      },
      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678244462/images/vbwfbynbcjtux9tznp7s.jpg',
        title: 'Beautiful',
      },

      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678248320/images/zv0y4j0td5jziongjmuv.jpg',
        title: 'Verde y rojo',
      },

      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678248318/images/oca6wf6ejvwrkhiuqswn.jpg',
        title: 'Noche',
      },

      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678248318/images/jccuuf2xyuol8oq5dynv.jpg',
        title: 'Amarillo',
      },

      {
        img: 'https://res.cloudinary.com/dfatvsuac/image/upload/v1678248318/images/hiotymg0srlm6jazoefj.jpg',
        title: 'Antigua Guatemala',
      },
  ];
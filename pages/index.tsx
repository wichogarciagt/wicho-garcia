import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts';

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

const Home: NextPage = () => {
    return (
        <MainLayout 
            title={'Wicho García - Home'} 
            pageDescription={'Aquí encontraras información y fotografías de los lugares más hermosos que tiene Guatemala, ¡bienvenido!'}
            imageFullUrl={ `${ origin }/img/banner.jpg` }
        >

            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={ 50 } fontWeight={ 200 }>Home |</Typography>
                <Typography marginLeft={ 2 }>Gracias por visitar Wicho Garcia, estamos trabajando en algo bonito sobre Guatemala! </Typography>
            </Box>

        </MainLayout>
    )
}

export default Home

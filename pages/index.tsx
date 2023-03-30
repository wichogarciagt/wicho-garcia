import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { MainLayout } from '../components/layouts';

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

const Home: NextPage = () => {
    return (
        <MainLayout 
            title={'Wicho García - Home'} 
            pageDescription={'Aquí encontraras información y fotografías de los lugares más hermosos que tiene Guatemala, ¡bienvenido!'}
            imageFullUrl={ `${ origin }/img/main.jpg` }
        >

        <Box
            sx={{
                backgroundImage: 'url("img/main.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Box display='flex' flexDirection='column' alignItems='center'>

                    <Typography variant="h1" component='h1' align="center" color='white'>
                        Viaja, vive, aventurate
                    </Typography>

                    <Typography marginTop={ 2 } variant="h2" component='h2' align="center" color='white'>
                        Fotógrafo - Creador de contenido
                    </Typography>

                </Box>
        </Box>

        </MainLayout>
    )
}

export default Home

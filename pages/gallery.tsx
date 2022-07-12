import { Box, Typography } from '@mui/material';
import React from 'react'
import { MainLayout } from '../components/layouts';

const GalleryPage = () => {
    return (
        <MainLayout title={'Galería'} pageDescription={'Aquí encontraras fotografías acerca de los lugares más bonitos de Guatemala y el mundo'}>

            <Box 
                display='flex' 
                justifyContent='center' 
                alignItems='center' 
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <Typography variant='h1' component='h1' fontSize={ 50 } fontWeight={ 200 }>Galería |</Typography>
                <Typography marginLeft={ 2 }>Gracias por visitar Wicho Garcia, estamos trabajando en algo bonito sobre Guatemala! </Typography>
            </Box>

        </MainLayout>
    )
}

export default GalleryPage;

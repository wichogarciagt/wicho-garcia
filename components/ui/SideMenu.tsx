import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { QuizOutlined, HomeOutlined, AttachEmailOutlined, CollectionsOutlined, EscalatorWarningOutlined, FemaleOutlined, MaleOutlined, SearchOutlined, CloseOutlined } from "@mui/icons-material"
import { useContext } from "react";
import { UIContext } from "../../context/ui";


export const SideMenu = () => {

    const { sideMenuOpen, closeSideMenu } = useContext( UIContext );

    return (
        <Drawer
            onClose={ closeSideMenu }
            open={ sideMenuOpen }
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 1 }}>

                <Box 
                    display='flex' 
                    flexDirection='row-reverse'
                    sx={{ paddingRight: 1 }}
                >
                    <IconButton onClick={ closeSideMenu }>
                        <CloseOutlined />
                    </IconButton>
                </Box>
                
                <List>

                    <ListItem>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    >
                                    <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <HomeOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <CollectionsOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Galería'} />
                    </ListItem>

                    <ListItem button sx={{ display: { xs: '', sm: 'none' } }}>
                        <ListItemIcon>
                            <AttachEmailOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'Contacto'} />
                    </ListItem>


                    <ListItem button>
                        <ListItemIcon>
                            <QuizOutlined/>
                        </ListItemIcon>
                        <ListItemText primary={'FAQ'} />
                    </ListItem>

                </List>
            </Box>
        </Drawer>
    )
}
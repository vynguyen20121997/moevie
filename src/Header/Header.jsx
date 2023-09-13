import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./header.css";
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Fab } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import { APIConfig } from '../Compoment/API/APIConfig';
import GenresButton from '../Compoment/Button/GenresButton';
const Header = () => {
    const [genres, setGenres] = useState([])
    const [sidenav, setSideNav] = useState(false);

    const OnFetchDataList = () => {
        const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIConfig.apiKey}`
        // const urlLink = `${url}?api_key=${APIConfig.apiKey}`
        fetch(urlLink)
            .then((response) => response.json())
            .then((data) => {
                setGenres(data);
            })
    };

    useEffect(() => {
        OnFetchDataList();
    }, []);

    const onOpenSideNav = () => {
        setSideNav(true)
    };

    const onCloseSideNav = () => {
        setSideNav(false)
    };

    const displaySidenav = {
        width: sidenav ? ('15%') : ('0'),
        padding: '0',

    }
    return (
        <><Typography>
            <div className='header'>

                <div style={{
                    display: "flex",
                    border: "0",
                    margin: "0",
                }}>
                    <Link to="/"> <img width="80px" src="https://i.ibb.co/K9NfKFW/wired-gradient-62-film.png" alt="wired-gradient-62-film" border="0" /></Link>
                    <Link to="/"><Button><h3>MOVIE WORLD</h3></Button></Link>
                </div>

                <div style={{ display: "flex", border: "0", margin: "0", marginRight: "5%" }}>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button  ><Link className='list-element' to="/">HOME</Link> </Button>
                        <Button  ><Link className='list-element' to="/">MOVIES</Link></Button>
                        <Button  ><Link className='list-element' to="/">TV SHOW</Link></Button>
                    </ButtonGroup>
                </div>

                <div >


                    <IconButton style={{ marginRight: "1px" }}
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        //   aria-controls={menuId}
                        aria-haspopup="true"
                        color="primary"

                    >
                        <AccountCircle fontSize="large" />
                    </IconButton>

                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="open drawer"
                        onClick={onOpenSideNav}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </div>


                <div id="mySidenav" classNames="sidenav"
                    style={displaySidenav}
                >
                   <div id='home-mySideNav'> 
                    <Link to={`/`}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="primary" >
                            <HomeIcon fontSize="large" />
                            <p>Home</p>
                        </IconButton>
                    </Link>
                    <Button style={{ minWidth: '0', marginLeft: '45%', borderRadius: '30px' }} size='small' variant="contained" color="primary">
                        <CloseIcon onClick={onCloseSideNav} color="white" fontSize="small" />
                    </Button>
                </div>


                <div id='home-mySideNav' >
                    <Link to={`/genres`}><IconButton
                        size="large"
                        edge="start"
                        color="primary" >
                        <ExploreIcon fontSize="inherit"
                        />
                        <p>Discovery</p>
                    </IconButton></Link>
                    <div><GenresButton /></div>

                </div>

            </div>
        </div>
        </Typography >  </>
    )
}

export default Header
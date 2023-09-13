import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { OnfetchFunction } from '../../Compoment/API/OnfetchMovieHook';
import { APIConfig } from '../../Compoment/API/APIConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./style.css"
import Fab from '@mui/material/Fab';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Test() {
    const theme = useTheme();
    const { data: popularMovies } = OnfetchFunction("popular");
    const [movieItems, setMovieItems] = useState(popularMovies)
    const [swiper, setSwiper] = useState(null);

    return (<>
        <div className="slider">
            <div className="btn1">
                <Fab color='primary' onClick={() => swiper.slidePrev()}
                ><ChevronLeftIcon fontSize="large" /></Fab></div>

            <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {popularMovies.map((i, index) => (
                    <SwiperSlide>
                        <HeroSliderContainer item={i} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="btn2">
                <Fab color='primary' onClick={() => swiper.slideNext()}>
                    <ChevronRightIcon fontSize="large" /></Fab></div>
        </div>
    </>);
}

export default Test;


export const HeroSliderContainer = (props) => {
    const item = props.item;
    const { backdrop_path, original_title, overview, poster_path, id, title } = item;
    const backgroundImg = APIConfig.originalImage(backdrop_path);
    const navigate = useNavigate();
    return (
        <>
            <div className='hero-slider-container' style={{
                backgroundImage: `url(${backgroundImg})`,
            }}>
                <div className="content" style={{ padding: '5%', paddingRight: '-2%', height: '100%',width:'100%' }}>

                    <div className="poster" style={{ width: '25%', position: 'relative', borderRadius: '15px' }}>
                        <Link to={`/movies/${id}`}>
                            <img style={{ borderRadius: '15px' }} onClick={() => { navigate(`/movies/${id}`) }} src={APIConfig.w500Image(poster_path)} alt="" /></Link>
                    </div>

                    <div className="info" style={{ width: '60%', paddingTop: '5%', color: 'white', paddingLeft: '2%', position: 'relative', height: '100%' }}>
                        <h1 style={{ width: '40%', height: '10%' }}>{title}</h1>
                        <h4 style={{ width: '55%', height: '20%' }}>{overview}</h4>
                        <div className="btn" style={{ height: '20%' }}>

                            <Button onClick={() => { navigate(`/movies/${id}`) }}
                                style={{
                                    borderRadius: '30px', marginLeft: '2%',
                                    width: '200px',
                                    height: '58px',
                                    padding: '0',
                                }}
                                size='large' variant='contained'>WATCH NOW</Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from "react-slick";

function Popup({ selectedFestival }) {
    if (selectedFestival) {
        return (
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingBottom: 'env(safe-area-inset-bottom)',  // Adjust for browser bottom bar
                    backgroundColor: 'white',
                    zIndex: 1000,  // Ensure it's on top of other elements
                }}
            >
                <Typography variant="h6" component="div">
                    {selectedFestival.name}
                </Typography>
                <Typography variant="body1">
                    Location: {selectedFestival.location.latitude}, {selectedFestival.location.longitude}
                </Typography>
                <Typography variant="body2">
                    Dates: {selectedFestival.date.start.toLocaleDateString()} - {selectedFestival.date.end.toLocaleDateString()}
                </Typography>
                {selectedFestival.price ? (
                    <Typography variant="body2">Price: {selectedFestival.price}</Typography>
                ) : (
                    <Typography variant="body2">Price: Free</Typography>
                )}
                <Slider {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }}>
                    {
                        selectedFestival["shows"].map((show) => (
                            <div>
                                <div style={{ margin: '5%' }}>
                                    <h2>{show.name}</h2>
                                    {show.price ? (
                                        <Typography variant="body2">Price: {selectedFestival.price}</Typography>
                                    ) : (
                                        <Typography variant="body2">Price: Free</Typography>
                                    )}
                                    <img
                                        key={show.id}
                                        src={show.image}
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </Box>
        )
    }
    return null;
};

export default Popup;
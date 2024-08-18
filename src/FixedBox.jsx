import { View, React } from 'react';
import { Typography } from '@mui/material';
import Slider from "react-slick";

const FixedBox = ({ selectedFestival }) => {

    return (
        <>
            {selectedFestival ? <div
                style={{
                    position: 'fixed',
                    bottom: '5%',          // 5% margin from the bottom
                    left: '5%',            // 5% margin from the left
                    right: '5%',           // 5% margin from the right
                    height: '30vh',        // 30% of the viewport height
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,          // Ensure it's on top of other content
                    overflow: 'hidden'     // Ensure no overflow from the container
                }}
            >
                <Typography variant="h6" component="div">
                    {selectedFestival.name}
                </Typography>
                <a href={"https://www.google.com/maps/search/?api=1&query=" + selectedFestival.location.latitude + "," + selectedFestival.location.longitude}>Location</a>
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
                }} style={{ height: '100%', width: '100%' }}>
                    {
                        selectedFestival["shows"].map((show) => (
                            <div key={show.id} style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Typography variant="h6" component="div">
                                        {show.name}
                                    </Typography>
                                    {show.price ? (
                                        <Typography variant="body2">Price: {selectedFestival.price}</Typography>
                                    ) : (
                                        <Typography variant="body2">Price: Free</Typography>
                                    )}
                                    <img
                                        src={show.image}
                                        alt={show.name}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'cover',
                                            display: 'block',
                                            margin: '0 auto',
                                            marginBottom: '10px'  // Added margin below the image
                                        }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div> : null}
        </>
    );
};

export default FixedBox;

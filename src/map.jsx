import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';
import Slider from "react-slick";


function Map() {
    const [latitudeValue, setLatitudeValue] = useState(39.959631);
    const [longitudeValue, setLongitudeValue] = useState(-8.083006);
    const [festivals, setFestivals] = useState([]);
    const [selectedFestival, setSelectedFestival] = useState(null); // State to track selected festival

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitudeValue(position.coords.latitude);
                setLongitudeValue(position.coords.longitude);
            },
            (error) => {
                console.log("Error getting location: " + error.message);
            }
        );
        setFestivals(festivalData); // Or load data from DB
    }, []);

    const handleIconClick = (festival) => {
        setSelectedFestival(festival);
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDtnrr2L--poxlVf-5LBgaIFzo2TYjt5GE" }}
                options={{ gestureHandling: 'greedy' }}
                defaultZoom={8}
                center={{
                    lat: latitudeValue,
                    lng: longitudeValue
                }}
                style={{ height: '100%', width: '100%' }}
            >
                {
                    festivals.map((festival) => (
                        <LocationOnIcon
                            color={"secondary"}
                            key={festival.id}
                            lat={festival.location.latitude}
                            lng={festival.location.longitude}
                            style={{ fontSize: 40, cursor: 'pointer' }}
                            onClick={() => handleIconClick(festival)} // Handle click
                        />
                    ))
                }
                <LocationOnIcon
                    color={"primary"}
                    lat={latitudeValue}
                    lng={longitudeValue}
                    style={{ fontSize: 40 }}
                />
            </GoogleMapReact>

            {selectedFestival && (
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
                    <Slider {...settings}>
                        {
                            showsData.filter((show) => show.festivalId === selectedFestival.id).map((show) => (
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
            )}
        </div>
    );
}

const festivalData = [
    {
        id: 1,
        name: "Festival do Crato",
        image: "https://thumbs.web.sapo.io/?epic=RwSFPeIdsBlmSC0gIU/WfhGsx5mqrUyjOlq0flVi02r3gZcExYlN6BXJfhSHKz5S5pNRRxa49XZpRWeyq57/Zn3nRAEuzsGKxN4zQQQC6EHXfCXGSH3Juq9gAFiZVDoQQlzn&Q=85&crop=center&errorpic=transparent&W=600",
        location: {
            latitude: 39.289778,
            longitude: -7.644890
        },
        date: {
            start: new Date(2024, 8, 20),
            end: new Date(2024, 8, 25),
        },
        price: null
    },
    {
        id: 2,
        name: "Noite Branca Gondomar",
        image: "https://www.cm-gondomar.pt/wp-content/uploads/2023/08/1100x734_Noite_Branca_2023_.png",
        location: {
            latitude: 41.136290,
            longitude: -8.531760
        },
        date: {
            start: new Date(2024, 8, 20),
            end: new Date(2024, 8, 25),
        },
        price: null
    }
];

const showsData = [
    {
        id: 1,
        festivalId: 1,
        name: "Slow J",
        image: "https://imagens.publico.pt/imagens.aspx/1864390?tp=UH&db=IMAGENS&type=PNG",
        date: new Date(2024, 8, 20),
        price: null
    },
    {
        id: 2,
        festivalId: 1,
        name: "Dillaz",
        image: "https://cdn-p.smehost.net/sites/944353b54c5947218f12b0bb31a218dc/wp-content/uploads/2022/04/DSCF0490-1800x900.jpg",
        date: new Date(2024, 8, 21),
        price: null
    },
];

export default Map;

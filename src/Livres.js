import React, { useState, useEffect, useCallback } from "react";
import { Container, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import GridItem from '@mui/material/Grid';
import { Typography } from "@material-tailwind/react";

export default function Livres() {
    const [livres, setLivres] = useState([]);

    const handleRequest = useCallback(async () => {
        const req = await fetch('livres.json', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        const res = await req.json();

        setLivres(res.livres);
        console.log(res.livres);
    }, [])


    useEffect(() => {
        handleRequest();
    }, [handleRequest]);

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Liste de livres</Typography>
            <Grid container spacing={2}>
                {livres.map(livre => {
                    return (
                        <GridItem key={livre.id} xs={12} md={4}>
                            <div className={`m-2 p-2 rounded-lg shadow-md bg-white`}>
                                <div className={`w-40 h-auto flex-none m-2`}>
                                    <img src={livre.image} alt={livre.titre} className="w-full h-auto rounded-lg" />
                                </div>
                                <div className="flex-auto">
                                    <Typography variant="h6" component="h2">
                                        {livre.titre}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Auteur : {livre.auteur}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Année : {livre.annee}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Genre : {livre.genre}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        Prix : {livre.prix} €
                                    </Typography>
                                </div>
                            </div>
                        </GridItem>)
                })
                }
            </Grid>
        </Container>
    );
}


import React from "react";
import SectionTitle from "../home/SectionTitle";
import PeliculaCard from "../card/PeliculaCard";

const ParticipacionesCineasta = ({ Peliculas }) => {
    return (
        <>
            <div className="container my-5">
                <SectionTitle
                    Titulo={
                        <>
                            <i className="fa-solid fa-clapperboard text-primary"></i>
                            <span>Participó en</span>
                        </>
                    }
                />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {Peliculas.map((pelicula) => (
                        <PeliculaCard
                            key={pelicula.id}
                            Id={pelicula.id}
                            Titulo={pelicula.titulo}
                            Calificacion={pelicula.calificacion}
                            Generos={pelicula.generos}
                            FechaEstreno={pelicula.fecha_estreno}
                            Duracion={pelicula.duracion}
                            Imagen={pelicula.imagen}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ParticipacionesCineasta;

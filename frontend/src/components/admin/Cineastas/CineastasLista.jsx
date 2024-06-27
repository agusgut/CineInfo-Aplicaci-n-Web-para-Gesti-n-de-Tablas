import React from "react";
import { Helmet } from "react-helmet";
import moment from "moment";
import { Link } from "react-router-dom";

const CineastasLista = ({ Cineastas, Editar, Eliminar }) => {

    return (
        <>
            <Helmet>
                <title>Lista de Cineastas</title>
            </Helmet>

            <div className="row flex-nowrap">
                <div className="col py-3">
                    <div className="table-responsive">
                        <table className="table table-striped table-dark text-center table-bordered table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Fecha de nacimiento</th>
                                    <th>Fecha de fallecimiento</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Cineastas.map((cineasta) => (
                                    <tr key={cineasta.id}>
                                        <td>{cineasta.id}</td>
                                        <td>{cineasta.nombre}</td>
                                        <td>{cineasta.apellido}</td>
                                        <td>{moment(cineasta.fecha_nacimiento).format("L")}</td>
                                        <td>{cineasta.fecha_fallecimiento && moment(cineasta.fecha_fallecimiento).format("L")}</td>
                                        <td className="d-flex gap-2 justify-content-center">
                                            <Link to={`/cineasta/${cineasta.id}`}>
                                                <button className="btn btn-info btn-sm rounded-pill">
                                                    <i className="fa-solid fa-eye text-primary-emphasis"></i>
                                                </button>
                                            </Link>
                                            <button
                                                className="btn btn-warning btn-sm rounded-pill"
                                                onClick={() => Editar(cineasta.id)}
                                            >
                                                <i className="fa-solid fa-pencil"></i>
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm rounded-pill"
                                                onClick={() => Eliminar(cineasta.id)}
                                            >
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CineastasLista;
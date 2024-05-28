import Pelicula from "../models/peliculas.js";

// Buscar todas las películas
export const findAll = async () => {
  return await Pelicula.findAll();
};

// Crear una nueva película
export const create = async (pelicula) => {
  return await Pelicula.create(pelicula);
};

// Buscar una película por su id
export const findById = async (id) => {
  return await Pelicula.findByPk(id);
};

// Actualizar una película
export const update = async (id, pelicula) => {
  const result = await Pelicula.findByPk(id);
  if (result) {
    return await result.update(pelicula);
  }
  return null;
};

// Eliminar una película
export const remove = async (id) => {
  const result = await Pelicula.findByPk(id);
  if (result) {
    await result.destroy();
    return true;
  }
  return false;
};
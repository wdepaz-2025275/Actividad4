import { Rol } from "../models/rol";

export const usuarios = [
  {
    id: 1,
    nombre: "wilfred",
    edad: 20,
    rol: Rol.Administrador,
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Pedro",
    edad: 30,
    rol: Rol.Usuario,
    estado: "Inactivo",
  },
  {
    id: 3,
    nombre: "Maria",
    edad: 40,
    rol: Rol.Usuario,
    estado: "Inactivo",
  },
  {
    id: 4,
    nombre: "Luis",
    edad: 50,
    rol: Rol.Usuario,
    estado: "Activo",
  },
];
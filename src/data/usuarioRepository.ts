import { readFile, writeFile } from "fs/promises";
import { Usuario } from "../models/usuario";

export class UsuarioRepository{

    private ruta="./src/data/usuarios.json";

    async obtenerUsuarios():Promise<Usuario[]>{

        try{

            const datos=await readFile(this.ruta,"utf-8");

            return JSON.parse(datos);

        }catch(error){

            console.log("Error al leer el archivo");

            return [];

        }

    }

    async guardarUsuarios(usuarios:Usuario[]):Promise<void>{

        try{

            await writeFile(
                this.ruta,
                JSON.stringify(usuarios,null,4)
            );

        }catch(error){

            console.log("Error al guardar");

        }

    }

    async eliminarUsuario(id:number):Promise<void>{

        try{

            const usuarios=await this.obtenerUsuarios();

            usuarios.splice(id-1,1);

            await this.guardarUsuarios(usuarios);

        }catch(error){

            console.log("Error al eliminar");

        }

    }

    async actualizarUsuario(usuario:Usuario):Promise<void>{

        try{

            const usuarios=await this.obtenerUsuarios();

            usuarios.splice(usuario.id-1,1,usuario);

            await this.guardarUsuarios(usuarios);

        }catch(error){

            console.log("Error al actualizar");

        }

    }
    
}
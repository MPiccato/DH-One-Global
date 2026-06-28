export interface Persona {
    nombre: string;
    edad: number;
}

export interface Direccion extends Persona {
    calle: string;
    numero: number;
    ciudad: string;
    provincia: string;
    pais: string | 'Argentina',

}
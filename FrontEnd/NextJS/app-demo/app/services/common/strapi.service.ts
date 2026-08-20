import {URLSearchParams} from 'url';
// constantes
const API_URL = 'http://localhost:1337/api/';


export const strapiGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> =>{
    const res = await fetch(`http://localhost:1337/api/${endpoint}${params ? `?${params}` : ''}`, {
        headers: {
            'Authorization': `Bearer ${process.env.CMS_STRAPI_TOKEN}`,
        }
    });
    if (!res.ok) {
        // Corregido: Se usa 'new Error' para crear una instancia de error
        throw new Error(`Error al realizar la solicitud GET a strapi ${endpoint}: ${res.statusText}`);
    }
    const data = await res.json();
    console.log(data); // Espera y almacena los datos JSON
     // Ahora puedes loguear los datos
    return data; // Y luego retornarlos
}

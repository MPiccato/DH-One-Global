import {URLSearchParams} from 'url';
// constantes
const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_ENDPOINT = `/public`;

export const httpGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> =>{
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`, {
        cache: 'no-cache', // Evita el almacenamiento en caché de la respuesta
    });
    if (!res.ok) {
        // Corregido: Se usa 'new Error' para crear una instancia de error
        throw new Error(`Error al realizar la solicitud GET a ${endpoint}: ${res.statusText}`);
    }
    const data = res.json(); // Espera y almacena los datos JSON
    console.log(data); // Ahora puedes loguear los datos
    return data; // Y luego retornarlos
}

export const httpGetPublic = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> =>{
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`, {
        cache: 'no-cache', // Evita el almacenamiento en caché de la respuesta
    });
    if (!res.ok) {
        // Corregido: Se usa 'new Error' para crear una instancia de error
        throw new Error(`Error al realizar la solicitud GET a ${endpoint}: ${res.statusText}`);
    }
   
    return httpGet(`${API_PUBLIC_ENDPOINT}${endpoint}`, params); // Y luego retornarlos
}

import {URLSearchParams} from 'url';
// constantes
const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_ENDPOINT = `/public`;

export const httpGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> =>{
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`, {
        cache: 'no-cache', // Evita el almacenamiento en caché de la respuesta
    });
    if (!res.ok) {
    const errorDetails = res.statusText || `Status ${res.status}`;
    throw new Error(`Error al realizar la solicitud GET a ${endpoint}: ${errorDetails}`);
  }
    return (await res.json()) as T;
    
}

export const httpGetPublic = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> =>{

    return httpGet(`${API_PUBLIC_ENDPOINT}${endpoint}`, params); // Y luego retornarlos
}

export const httpPost = async <T>(endpoint: string, body: object): Promise<T> => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method:"POST",
        headers: {
            "Content-type":"application/json",
            "Authorization":" Bearer token"
        },

        body: JSON.stringify(body) 
    }
    );
    if (!res.ok) { throw new Error("no se pudo enviar nada")}
    return res.json();
}

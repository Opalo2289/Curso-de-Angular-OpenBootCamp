import { IContacto } from "../models/contacto.interfase"; //Ejemplo services

/*
*Desde aqui exportamos una lista simulada de contactos que va a poder utilizar cualquier componente.}
(CONTACTOS) es un nombre que uno le da a la variable. Que es de tipo IContacto y es un Array
*/
export const CONTACTOS: IContacto[] = [
    {
        id: 0,
        nombre: 'Jader',
        apellidos: 'Camacho',
        email: '@jader.com',
        edad: 30,
    },
    {
        id: 0,
        nombre: 'Carolina',
        apellidos: 'Corcho',
        email: '@carolina.com',
        edad: 30,
    },
    {
        id: 0,
        nombre: 'Dany',
        apellidos: 'Valencia',
        email: '@dany.com',
        edad: 30,
    }
]
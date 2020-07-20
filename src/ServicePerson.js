
const urlBase = process.env.REACT_APP_API_URL;

export const request = async (path, method = "GET", body = undefined) => {
    const res = await fetch(`${urlBase}/${path}`, {
        method: method, body, headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!res.ok) {
        throw new Error("Error en petición");
    }
    return await res.json();
}

export const savePerson = async (person) => {
    return await request("person", "POST", JSON.stringify(person));
}

export const updateStatusPerson = async (id, status) => {
    return await request(`person/${id}/status` , "PUT", JSON.stringify({ status }));
}

export const findByRut = async (rut) => {
    return await request(`person/rut?rut=${rut}`);
}

export const findAll = async () => {
    return await request("person");
}
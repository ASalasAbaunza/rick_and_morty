const app = require('../src/app');
const session = require('supertest');
const users = require('../src/utils/users');
const agent = session(app);

describe('Test de Rutas', () => {
    it('Debe responder un GET en la ruta /rickandmorty/character/:id con un code 200', async () => {
        const res = await agent.get('/rickandmorty/character/1');
        expect(res.statusCode).toBe(200);
    });
    it('Debe responder un POST en la ruta /rickandmorty/fav con un code 200 si lleva datos', async () => {
        const res = await agent.post('/rickandmorty/fav').send({id: 1, name: 'Rick Sánchez'});
        expect(res.statusCode).toBe(200);
    });
    it('Debe responder un DELETE en la ruta /rickandmorty/fav/:id con un code 200', async () => {
        const res = await agent.delete('/rickandmorty/fav/1');
        expect(res.statusCode).toBe(200);
    });
    it('Debe responder un GET en la ruta /rickandmorty/login con un code 200', async () => {
        const res = await agent.get('/rickandmorty/login');
        expect(res.statusCode).toBe(200);
    });
});

describe('GET /rickandmorty/character/:id', () => {
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const res = await agent.get('/rickandmorty/character/1');
        expect(typeof res.body).toBe('object');
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('species');
        expect(res.body).toHaveProperty('gender');
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('origin');
        expect(res.body).toHaveProperty('image');
    });
    it('Si el personaje no existe, responde con: 400', async () => {
        const res = await agent.get('/rickandmorty/character/999');
        expect(res.statusCode).toBe(400);
    });
});

describe('GET /rickandmorty/login', () => {
    it('Si el user es correcto, debe dar acceso', async () => {
        const res = await agent.get(`/rickandmorty/login/?email=${users[0].email}&&password=${users[0].password}`);
        expect(res.statusCode).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body).toEqual({access: true});
    });
    it('Si el user es incorrecto, debe negar el acceso', async () => {
        const res = await agent.get('/rickandmorty/login');
        expect(res.statusCode).toBe(200);
        expect(typeof res.body).toBe('object');
        expect(res.body).toEqual({access: false});
    });
});

xdescribe('POST /rickandmorty/fav', () => {
    it('Los datos que se reciben, se devuelven dentro de un arreglo', async () => {
        const res = await agent.post('/rickandmorty/fav').send({id: 1, name: 'Rick Sánchez'});
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toEqual([{id: 1, name: 'Rick Sánchez'}]);
    });
    it('Si se vuelve a hacer la petición, los nuevos datos se añaden al arreglo', async () => {
        const res = await agent.post('/rickandmorty/fav').send({id: 2, name: 'Morty Smith'});
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body).toEqual([{id: 1, name: 'Rick Sánchez'}, {id: 2, name: 'Morty Smith'}]);
    });
});

describe('DELETE /rickandmorty/fav/:id', () => {
    it('Si se manda un ID que no está en favoritos, devuelve el mismo arreglo', async () => {
        const res1 = await agent.post('/rickandmorty/fav').send({id: 3, name: 'Summer Smith'});
        const res2 = await agent.delete('/rickandmorty/fav/4');
        expect(res2.statusCode).toBe(200);
        expect(res2.body).toEqual(res1.body);
    });
    xit('Si se manda un ID que sí está en favoritos, se elimina del arreglo', async () => {
        const res3 = await agent.delete('/rickandmorty/fav/1');
        expect(res3.statusCode).toBe(200);
        expect(res3.body).toEqual([{id: 2, name: 'Morty Smith'}, {id: 3, name: 'Summer Smith'}]);
    });
});
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp.test.js', () => {

    test('getHeroeById debe de retornar un heroe por id', () => { 

        const id = 1;

        const heroe = getHeroeById(id);

        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    });

    test('getHeroeById debe de retornar un heroe por id', () => { 

        const id = 9;

        const heroe = getHeroeById(id);
        console.log(heroe)

        // toBeFalsy: que sea un valor negativo como un null o un undefined
        expect(heroe).toBeFalsy();
    });

    // Tarea:
    //getHeroesByOwner
    // Debe de retornar un arreglo con los héroes de DC
    // length === 3
    // toEqual al arreglo filtrado

    // Marvel, length === 2


    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {


        const dc = 'DC';

        const heroes = getHeroesByOwner(dc);
        console.log(heroes)

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        // Otra manera de hacerlo
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === dc))

         
        


    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {

        const marvel = 'Marvel';

        const heroes = getHeroesByOwner(marvel);
        console.log(heroes)

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        
        // Otra forma de hacerlo
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === marvel))
        
    })




})
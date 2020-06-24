{/* <html> */}
    // <script>
        // 1. Create a function that accepts an array as an argument and for every item in the array return a new array of objects where each object has two keys. 
        //    Item and index. The value should be the element from the array and the index respectively.

        // Jordan's code______________________________
        // const objList = testArr =>{
        //      return testArr.map((name, index)=> ({name:name, index:index}))
        // }
        // console.log(objList(['red','blue','green','orange']))
        // ___________________________________________

        

        let characters = [
            {
                "name": "Luke Skywalker", 
                "height": "172", 
                "mass": "77", 
                "hair_color": "blond", 
                "skin_color": "fair", 
                "eye_color": "blue", 
                "birth_year": "19BBY", 
                "gender": "male", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [
                    "http://swapi.dev/api/vehicles/14/", 
                    "http://swapi.dev/api/vehicles/30/"
                ], 
                "starships": [
                    "http://swapi.dev/api/starships/12/", 
                    "http://swapi.dev/api/starships/22/"
                ], 
                "created": "2014-12-09T13:50:51.644000Z", 
                "edited": "2014-12-20T21:17:56.891000Z", 
                "url": "http://swapi.dev/api/people/1/"
            }, 
            {
                "name": "C-3PO", 
                "height": "167", 
                "mass": "75", 
                "hair_color": "n/a", 
                "skin_color": "gold", 
                "eye_color": "yellow", 
                "birth_year": "112BBY", 
                "gender": "n/a", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/4/", 
                    "http://swapi.dev/api/films/5/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [
                    "http://swapi.dev/api/species/2/"
                ], 
                "vehicles": [], 
                "starships": [], 
                "created": "2014-12-10T15:10:51.357000Z", 
                "edited": "2014-12-20T21:17:50.309000Z", 
                "url": "http://swapi.dev/api/people/2/"
            }, 
            {
                "name": "R2-D2", 
                "height": "96", 
                "mass": "32", 
                "hair_color": "n/a", 
                "skin_color": "white, blue", 
                "eye_color": "red", 
                "birth_year": "33BBY", 
                "gender": "n/a", 
                "homeworld": "http://swapi.dev/api/planets/8/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/4/", 
                    "http://swapi.dev/api/films/5/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [
                    "http://swapi.dev/api/species/2/"
                ], 
                "vehicles": [], 
                "starships": [], 
                "created": "2014-12-10T15:11:50.376000Z", 
                "edited": "2014-12-20T21:17:50.311000Z", 
                "url": "http://swapi.dev/api/people/3/"
            }, 
            {
                "name": "Darth Vader", 
                "height": "202", 
                "mass": "136", 
                "hair_color": "none", 
                "skin_color": "white", 
                "eye_color": "yellow", 
                "birth_year": "41.9BBY", 
                "gender": "male", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [], 
                "starships": [
                    "http://swapi.dev/api/starships/13/"
                ], 
                "created": "2014-12-10T15:18:20.704000Z", 
                "edited": "2014-12-20T21:17:50.313000Z", 
                "url": "http://swapi.dev/api/people/4/"
            }, 
            {
                "name": "Leia Organa", 
                "height": "150", 
                "mass": "49", 
                "hair_color": "brown", 
                "skin_color": "light", 
                "eye_color": "brown", 
                "birth_year": "19BBY", 
                "gender": "female", 
                "homeworld": "http://swapi.dev/api/planets/2/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [
                    "http://swapi.dev/api/vehicles/30/"
                ], 
                "starships": [], 
                "created": "2014-12-10T15:20:09.791000Z", 
                "edited": "2014-12-20T21:17:50.315000Z", 
                "url": "http://swapi.dev/api/people/5/"
            }, 
            {
                "name": "Owen Lars", 
                "height": "178", 
                "mass": "120", 
                "hair_color": "brown, grey", 
                "skin_color": "light", 
                "eye_color": "blue", 
                "birth_year": "52BBY", 
                "gender": "male", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/5/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [], 
                "starships": [], 
                "created": "2014-12-10T15:52:14.024000Z", 
                "edited": "2014-12-20T21:17:50.317000Z", 
                "url": "http://swapi.dev/api/people/6/"
            }, 
            {
                "name": "Beru Whitesun lars", 
                "height": "165", 
                "mass": "75", 
                "hair_color": "brown", 
                "skin_color": "light", 
                "eye_color": "blue", 
                "birth_year": "47BBY", 
                "gender": "female", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/5/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [], 
                "starships": [], 
                "created": "2014-12-10T15:53:41.121000Z", 
                "edited": "2014-12-20T21:17:50.319000Z", 
                "url": "http://swapi.dev/api/people/7/"
            }, 
            {
                "name": "R5-D4", 
                "height": "97", 
                "mass": "32", 
                "hair_color": "n/a", 
                "skin_color": "white, red", 
                "eye_color": "red", 
                "birth_year": "unknown", 
                "gender": "n/a", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/"
                ], 
                "species": [
                    "http://swapi.dev/api/species/2/"
                ], 
                "vehicles": [], 
                "starships": [], 
                "created": "2014-12-10T15:57:50.959000Z", 
                "edited": "2014-12-20T21:17:50.321000Z", 
                "url": "http://swapi.dev/api/people/8/"
            }, 
            {
                "name": "Biggs Darklighter", 
                "height": "183", 
                "mass": "84", 
                "hair_color": "black", 
                "skin_color": "light", 
                "eye_color": "brown", 
                "birth_year": "24BBY", 
                "gender": "male", 
                "homeworld": "http://swapi.dev/api/planets/1/", 
                "films": [
                    "http://swapi.dev/api/films/1/"
                ], 
                "species": [], 
                "vehicles": [], 
                "starships": [
                    "http://swapi.dev/api/starships/12/"
                ], 
                "created": "2014-12-10T15:59:50.509000Z", 
                "edited": "2014-12-20T21:17:50.323000Z", 
                "url": "http://swapi.dev/api/people/9/"
            }, 
            {
                "name": "Obi-Wan Kenobi", 
                "height": "182", 
                "mass": "77", 
                "hair_color": "auburn, white", 
                "skin_color": "fair", 
                "eye_color": "blue-gray", 
                "birth_year": "57BBY", 
                "gender": "male", 
                "homeworld": "http://swapi.dev/api/planets/20/", 
                "films": [
                    "http://swapi.dev/api/films/1/", 
                    "http://swapi.dev/api/films/2/", 
                    "http://swapi.dev/api/films/3/", 
                    "http://swapi.dev/api/films/4/", 
                    "http://swapi.dev/api/films/5/", 
                    "http://swapi.dev/api/films/6/"
                ], 
                "species": [], 
                "vehicles": [
                    "http://swapi.dev/api/vehicles/38/"
                ], 
                "starships": [
                    "http://swapi.dev/api/starships/48/", 
                    "http://swapi.dev/api/starships/59/", 
                    "http://swapi.dev/api/starships/64/", 
                    "http://swapi.dev/api/starships/65/", 
                    "http://swapi.dev/api/starships/74/"
                ], 
                "created": "2014-12-10T16:16:29.192000Z", 
                "edited": "2014-12-20T21:17:50.325000Z", 
                "url": "http://swapi.dev/api/people/10/"
            }
        ]
        
        // 2.Use the array of object provided in the file "swapi.js" for the next several items.
                // 1.Create an array of only the names.
                let names = characters.map(char=>char.name)
                console.log(names)
                // 2.Create an array that includes the name and mass of all characters who mass is greater than 50.
                //      1.Make sure you check the type of the mass.
                //                                                                                      "æ"ex: false v
                /*let charMass = characters.map(char=>parseInt(char.mass) > 50 ? {name:char.name, mass:char.mass} : null).filter(e=>e)
                console.log(charMass) */

                /* let charMass = characters.map(function(char, idx){ 
                     return {name:char.name, mass:char.mass} */
                let charMass = [];
                characters.forEach(function(char){
                    if(parseInt(char.mass) > 50){
                        charMass.push({name:char.name, mass: char.mass})
                    }
                    // console.log(char)
                    // console.log(characters[idx])
                })
                // console.log(charMass)

                charsMass = characters.filter(char=>{
                    if(parseInt(char.mass) > 50){
                        return true
                    }
                    return false
                })
                console.log(charMass.length)
                // chained
                // charMass = characters.filter(char=>{
                //     if(parseInt(char.mass) > 50){
                //         return true
                //     }
                //     return
                // }).map(function(char){
                //     return({name:char.name, mass:char.mass})
                // })
                // console.log(charMass)

                // charMass = characters.filter(char=>{
                //     if(parseInt(char.mass) > 50){
                //         return true
                //     }
                //     return
                // }).map(function(char){
                //     return({nameL:char.name, mass:char.mass})
                // })
                // console.log(charMass)

                // not chained
                // charMass = characters.filter(char=>{
                //     if(parseInt(char.mass) > 50){
                //         return true
                //     }
                //     return
                // })
                // let finalOut = charMass.map(function(char){
                //      return({name:char.name, mass:char.mass})
                // })
                // console.log(finalOut)

                //"æ"example:  console.log(["yes", "no", true, false]).filter **finish from lect video**
                
                // 3.Create an array of objects of only the characters that have at  least one starship. The objects only need 'name' and 'hasStarship' as its keys.
                
                let charStarship = characters.filter(function(char) {
                    if (char.starships != 0){
                        return true
                    }
                    return 
                }).map(function(char){
                    return({name:char.name, hasStarships:char.starships})
                })
                console.log(charStarship)
                

                // let charStarship = characters.map(char=>char.starships ? {name:char.name, hasStarships:char.starships} : null).filter(e=>e)
                // console.log(charStarship)
                
                // 4.create an array of names of only the characters who have both a starship and a vehicle. 
                let charVehicle = characters.filter(char=>{
                    if (char.vehicles != 0){
                        return true
                    }
                    return
                }).map(function(char){
                    return({name:char.name, hasStarships:char.starships, vehicle:char.vehicles})
                })
                console.log(charVehicle)
                
                
//     </script>
// </html>
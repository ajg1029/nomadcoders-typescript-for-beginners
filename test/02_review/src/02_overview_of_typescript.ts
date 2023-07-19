// basic types

let height : number = 183;

let look : string = "handsome";

let isMarried : boolean = false;

// optional types


const playerOne : {
    name: string,
    age?: number,
} = {
    name: "Deon"
}

// type alias

type Player = {
    name: string,
    age?: number,
}
const hanbin : Player = {
    name: "Hanbin"
}

// return types

function add(a: number, b: number) : number {
    return a + b;
}
const sum = add(1, 2);

function playerMaker(name: string) : Player {
    return {
        name: name
    }
}
const seph = playerMaker("Seph");
seph.age = 18;


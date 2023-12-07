class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("You are comeIn");
        }
        else {
            console.log("Your key is invalid");
        }
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (this.key === key) {
            this.door = true;
        }
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
export {};
//# sourceMappingURL=index.js.map
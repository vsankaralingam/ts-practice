// typeof
function printLength(value: string | string[]) {
    if (typeof value === 'string') {
        console.log(value.length);
    } else {
        console.log(value.length);
    }
}
printLength("Hello");
printLength(["Hello", "World"]);    

// instanceof
class dog {
    bark() {
        console.log("Woof!");
    }
}
class cat {
    meow() {
        console.log("Meow!");
    }
}       
function makeSound(animal: dog | cat) {
    if (animal instanceof dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
makeSound(new dog());
makeSound(new cat());

// in typeof guard
interface car{
    drive(): void;
}

interface bicycle {
    pedal(): void;
}
function operateVehicle(vehicle: car | bicycle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    } else {
        vehicle.pedal();
    }
}
operateVehicle({ drive: () => console.log("Driving") });
operateVehicle({ pedal: () => console.log("Pedaling") });

// user-defined type guard
interface Fish {
    swim(): void;
}
interface Bird {
    fly(): void;
}
function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}
function makeAnimalSound(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
}
makeAnimalSound({ swim: () => console.log("Swimming") });
makeAnimalSound({ fly: () => console.log("Flying") });

// Truthiness narrowing

// Equality narrowing


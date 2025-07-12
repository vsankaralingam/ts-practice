// Enums
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Hetergenous enum
enum Paymentmethod{
    Creditcard ="CARD",
    Paypal ="Paypal",
    UPI = 2,
    IMPS = "imps",
}

enum office{
    admin = "ADMIN",
    guest = 1,
    superuser="Superuser",
}

// Reverse mapping 
enum direction{
    up = 1,
    down,
    left,
    right,
}

console.log(direction.up);
console.log(direction[1]);

// Constant enum
const enum  Sizes {
    small,
    medium,
    large,
}
let s = Sizes.small;

// Computed enum

enum Color{
    red = 1,
    green = red * 2,
    blue = Math.random()
}
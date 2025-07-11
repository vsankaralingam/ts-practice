// TypeScript Interface Examples

interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: User = {
  name: "Alice",
  age: 25,
  isActive: true
};

// interface extending
 interface Mailable {
  send(email: string): boolean
  queue(email: string): boolean
 }

 class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}


// interfaces extending multiple interface


class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }

// error :cannot implement

class Chart implements StatefulControl {
    enable() { }

}

// Three interfaces : BusinessPartner, Identity, Contact

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
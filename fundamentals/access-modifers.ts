// Private
class person{
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn:string, firstname: string, lastname:string){
        this.ssn = ssn;
        this.firstName = firstname;
        this.lastName = lastname;
    }
    getFULLName(): string{
        return '${this.firstName} ${this.lastName}';
    }
}
// Public

class person2 {
    firstName: string;
    lastName: string;
    public getFullName(): string{
        return '${this.firstName} ${this.lastName}';
    }
}

// Protected
 class person3 {

 
 protected ssm: string;
 firstName: string;
 lastName : string;
 constructor(ssn:string, firstName:string, lastName:string){
     this.ssn= ssn;
     this.firstname =firstName;
     this.lastName = lastName;
 }
 getFULLName(): string{
    return '${this.firstName} ${lastName}';
 }
}

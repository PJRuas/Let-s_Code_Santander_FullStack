class Person {
    constructor(firstName, lastName, age, gender, interests){
        this.name = {firstName: firstName, lastName: lastName};
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    };

    #pronoum() {
        this.gender == 'male' ? 'He' : this.gender == 'female' ? 'She' : 'This person'
    };

    get bio() {
        console.log(`${this.name.join(' ')} is ${this.age} years old. ${this.#pronoum} likes ${this.interests}.`)
    };

    get greeting(){
        console.log(`Hi! I'm ${this.name.join(' ')}.`)
    }
};

class Teacher extends Person {
    constructor(firstName, lastName, age, gender, interests, subject){
        super(firstName, lastName, age, gender, interests, subject)
        this.subject = subject;
    };

    #prefix() {
        this.gender =='male' ? 'Mr.' : this.gender == 'female' ? 'Ms.' : ' '
    };

    set subject(subject) {
        this.subject = subject
    };

    get subject(){
        return this.subject
    };

    get greeting(){
        console.log(`Hello. My name is ${this.#prefix} ${this.name[lastName]}, and I teach ${this.subject}.`)
    }
};

class Student extends Person {
    constructor(firstName, lastName, age, gender, interests){
        super(firstName, lastName, age, gender, interests, subject)
    };

    get greeting(){
        console.log(`Yo! I'm ${this.name[lastName]}.`)
    }
}



// class Person {
//     constructor(firstName, lastName, age, gender, interests){
//         this.name = {firstName: firstName, lastName: lastName};
//         this.age = age;
//         this.gender = gender;
//         this.interests = interests;
//     };

//     #pronoum() {
//         return this.pronoum = this.gender == 'male' ? 'He' : this.gender == 'female' ? 'She' : 'This person'
//     };

//     get bio() {
//         console.log(`${this.name['firstName']} ${this.name['lastName']} is ${this.age} years old. ${this.pronoum} likes ${this.interests}.`)
//     };

//     get greeting(){
//         console.log(`Hi! I'm ${this.name['firstName']} ${this.name['lastName']} .`)
//     }
// };

// class Teacher extends Person {
//     constructor(firstName, lastName, age, gender, interests, subject){
//         super(firstName, lastName, age, gender, interests)
//         this.subject = subject;
//     };

//     #prefix() {
//         this.gender =='male' ? 'Mr.' : this.gender == 'female' ? 'Ms.' : ' '
//     };

//     get greeting(){
//         console.log(`Hello. My name is ${this.#prefix} ${this.name['lastName']}, and I teach ${this.subject}.`)
//     }
// };

// class Student extends Person {
//     constructor(firstName, lastName, age, gender, interests){
//         super(firstName, lastName, age, gender, interests)
//     };

//     get greeting(){
//         console.log(`Yo! I'm ${this.name['firstName']}.`)
//     }
// }
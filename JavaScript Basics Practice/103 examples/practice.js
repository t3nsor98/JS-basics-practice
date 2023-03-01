class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    nameId(){
        console.log(`The name of the person is ${this.name}`);
    }
    jobId(){
        console.log(`${this.name} is a ${this.job}`);
    }
}

const fresher = new Person("Digbijaya", 24, "Software Engineer");
console.log(fresher);
fresher.nameId(); 
fresher.jobId();
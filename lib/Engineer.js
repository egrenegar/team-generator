// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    
    getRole(){
        return role;
    }
}


// responses from prompts will be written to a new file and results will be referenced here
// const github = 
const role = 'Engineer';

module.exports = Engineer;
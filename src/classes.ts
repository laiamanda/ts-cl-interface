abstract class Department {
    // private readonly id: string;
    // private name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];

    static fiscalYear = 2021;

    constructor(protected readonly id: string, n: string){
        // this.id = id;
        // this.name = n;
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name: string){
        return {name : name }
    }
    abstract describe(this: Department): void;

    addEmployee(employee: string){
        // Validation 
        this.employees.push(employee);
    }
    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]){
        super(id, 'IT');
        this.admins = admins;
    }
    describe(){
        console.log('IT Department-ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found');
       
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    } 

    describe(){
        console.log('Accounting-ID: '+ this.id);
    }
    addEmployee(name: string){
        if( name === 'Max'){
            return;
        }
        this.employees.push(name);
    }
    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports(){
        console.log(this.reports);
    }
}

// const accounting = new Department('d1','Accounting');
const it = new ITDepartment('d1',['Max']);
// const accounting1 = new AccountingDepartment('d2',[]);
const accounting1 = AccountingDepartment.getInstance;

const employee1 = Department.createEmployee('Alex');
console.log(employee1, Department.fiscalYear);

// accounting.addEmployee('Andy');
// accounting.addEmployee('John');

it.addEmployee('Andrew');

// accounting1.mostRecentReport = 'End Report'; // Calling the setter
// accounting1.addReport('Something went wrong');
// accounting1.printReports();
// accounting1.addEmployee('Lauren');
// accounting1. describe();

// console.log(accounting1.mostRecentReport); // Calling the getter

// accounting.employees[2] = 'Anna'; // Not going to work with the private 

// accounting.describe(); // console.log(accounting);
// accounting.printEmployeeInfo();

it.describe();
it.printEmployeeInfo();
console.log(it);

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe(); // Result: Department:  Undefined


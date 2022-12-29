"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log(`Department:(${this.id}): ` + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Andy');
accounting.addEmployee('John');
accounting.describe();
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map
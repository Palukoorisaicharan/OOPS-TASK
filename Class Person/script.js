class Person{
    static Company="TCS";
    constructor(name,age,address,mobile){
        //set the values for 3 properties
        this.name=name;
        this.age=age;
        this.address=address;
        this.mobile=mobile;
    }
//instance method
    getData(){
        let personData=`
        Name:${this.name}
        Age:${this.age}
        Address:${this.address}
        Mobile:${this.mobile}
        `
        console.log(personData);
    } 
//static method
    static getCompanyName(){
        console.log(Person.Company);
    }
}

class Employee extends Person{
    static companyNew="Cognizant Technology";
    constructor(name,age,address,mobile,designation,salary){
        super(name,age,address,mobile);
        this.designation=designation;
        this.salary=salary;
    }

//instance method
    getData(){
        let employeeData=`
        Name:${this.name}   
        Age:${this.age}
        Address:${this.address}
        Mobile:${this.mobile}
        Designation:${this.designation}
        Salary:${this.salary}
        `
        console.log(employeeData);
    }
//static method
    static getCompanyName(){
        console.log(Employee.companyNew);
    }

}


let employee1=new Employee("Sai Charan",23,"Tirupati","7032542728","Front End Developer","5 LPA");

employee1.getData();
Employee.getCompanyName();

//create an Object of Person
let person1=new Person("Kiran",27,"Chennai","9849302564");
person1.getData();
Person.getCompanyName();
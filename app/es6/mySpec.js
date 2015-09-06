describe("The class",function(){

it("rest prams", function() {

		class Person{

			constructor(name){

				this.name=name;
			}



			Dowork(){

		return "abcd";
			}

			getName(){

				return "Sid";
			}

			GetClassName(){

				return "Class1";
			}

			get name(){
				return	this.myname.toUpperCase();
			}
			set name(newval){

				this.myname=newval;
			}
		}

	class Employee extends Person
	{

		Dowork(){

		return '${this.myname} is working';
	}
	}

	let e=new Person();
	let e1=new Person("Mohit");
	let e2=new Person("Ishita");
let e3=new Employee("sam");
		expect(e.Dowork()).toBe("abcd");
	expect(e.getName()).toBe("Sid");
	expect(e.GetClassName()).toBe("Class1");
	expect(e1.name).toBe("MOHIT");
	expect(e2.name).toBe("ISHITA");
	expect(e3.Dowork()).toBe("sam is working");
	expect(Employee.prototype.GetClassName.call(e)).toBe("Class1");

	});
});


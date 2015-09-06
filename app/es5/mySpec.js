"use strict";
describe("The class", function() {
  it("rest prams", function() {
    var Person = function Person(name) {
      this.name = name;
    };
    ($traceurRuntime.createClass)(Person, {
      Dowork: function() {
        return "abcd";
      },
      getName: function() {
        return "Sid";
      },
      GetClassName: function() {
        return "Class1";
      },
      get name() {
        return this.myname.toUpperCase();
      },
      set name(newval) {
        this.myname = newval;
      }
    }, {});
    var Employee = function Employee() {
      $traceurRuntime.defaultSuperCall(this, $Employee.prototype, arguments);
    };
    var $Employee = Employee;
    ($traceurRuntime.createClass)(Employee, {Dowork: function() {
        return '${this.myname} is working';
      }}, {}, Person);
    var e = new Person();
    var e1 = new Person("Mohit");
    var e2 = new Person("Ishita");
    var e3 = new Employee("sam");
    expect(e.Dowork()).toBe("abcd");
    expect(e.getName()).toBe("Sid");
    expect(e.GetClassName()).toBe("Class1");
    expect(e1.name).toBe("MOHIT");
    expect(e2.name).toBe("ISHITA");
    expect(e3.Dowork()).toBe("sam is working");
    expect(Employee.prototype.GetClassName.call(e)).toBe("Class1");
  });
});

//# sourceMappingURL=mySpec.js.map

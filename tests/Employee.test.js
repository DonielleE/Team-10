
const Employee = require("../lib/Employee")
describe("testing employee class",()=>{
    it("testing name",()=>{
        let example = new Employee("name", 4, "a@gmail.com")
        expect(example.getName()).toBe("name")
    })
    it("testing id",()=>{
        let example = new Employee("name", 4, "a@gmail.com")
        expect(example.getId()).toBe(4)
    })
    it("testing email",()=>{
        let example = new Employee("name", 4, "a@gmail.com")
        expect(example.getEmail()).toBe("a@gmail.com")
    })
    it("testing role",()=>{
        let example = new Employee("name", 4, "a@gmail.com")
        expect(example.getRole()).toBe("Employee")
    })
})
const Manager = require("../lib/Manager")
describe("testing Manager class",()=>{
    it("testing name",()=>{
        let example = new Manager("name", 4, "a@gmail.com", 555-4545)
        expect(example.getName()).toBe("name")
    })
    it("testing id",()=>{
        let example = new Manager("name", 4, "a@gmail.com", 555-4545)
        expect(example.getId()).toBe(4)
    })
    it("testing email",()=>{
        let example = new Manager("name", 4, "a@gmail.com", 555-4545 )
        expect(example.getEmail()).toBe("a@gmail.com")
    })
    it("testing role",()=>{
        let example = new Manager("name", 4, "a@gmail.com")
        expect(example.getRole()).toBe("Manager")
    })
    it("testing office number",()=>{
        let example = new Manager("name", 4, "a@gmail.com", 555-4545)
        expect(example.getOfficeNumber()).toBe(555-4545)
    })
})
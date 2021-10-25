const Intern = require("../lib/Intern")
describe("testing Intern class",()=>{
    it("testing name",()=>{
        let example = new Intern("name", 4, "a@gmail.com", "school")
        expect(example.getName()).toBe("name")
    })
    it("testing id",()=>{
        let example = new Intern("name", 4, "a@gmail.com", "school")
        expect(example.getId()).toBe(4)
    })
    it("testing email",()=>{
        let example = new Intern("name", 4, "a@gmail.com", "school" )
        expect(example.getEmail()).toBe("a@gmail.com")
    })
    it("testing role",()=>{
        let example = new Intern("name", 4, "a@gmail.com")
        expect(example.getRole()).toBe("Intern")
    })
    it("testing school",()=>{
        let example = new Intern("name", 4, "a@gmail.com", "school")
        expect(example.getSchool()).toBe("school")
    })
})
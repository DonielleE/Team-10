const Engineer = require("../lib/Engineer")
describe("testing Engineer class",()=>{
    it("testing name",()=>{
        let example = new Engineer("name", 4, "a@gmail.com", "username")
        expect(example.getName()).toBe("name")
    })
    it("testing id",()=>{
        let example = new Engineer("name", 4, "a@gmail.com","username")
        expect(example.getId()).toBe(4)
    })
    it("testing email",()=>{
        let example = new Engineer("name", 4, "a@gmail.com", "username")
        expect(example.getEmail()).toBe("a@gmail.com")
    })
    it("testing role",()=>{
        let example = new Engineer("name", 4, "a@gmail.com")
        expect(example.getRole()).toBe("Engineer")
    })
    it("testing github",()=>{
        let example = new Engineer("name", 4, "a@gmail.com", "username")
        expect(example.getGithub()).toBe("username")
    })    
})
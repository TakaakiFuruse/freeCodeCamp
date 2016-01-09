function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    str = str.replace(/\s|_/g, '-')
    return str.toLowerCase()
}


describe('description', function() {
    it('1', function() {
        expect(spinalCase("This Is Spinal Tap")).toEqual("this-is-spinal-tap")
        expect(spinalCase("thisIsSpinalTap")).toEqual("this-is-spinal-tap")
        expect(spinalCase("The_Andy_Griffith_Show")).toEqual("the-andy-griffith-show")
        expect(spinalCase("Teletubbies say Eh-oh")).toEqual("teletubbies-say-eh-oh")
    })
})

import { HashMap } from "./index";

// const HashMap = require('./index');
describe("testin", () => {

    test("size", () => {
        let t = new HashMap;
        t.set("juan", "le gusta correr")
        t.set("juan", "le gusta correr")
        t.set("juan", "le gusta nadar")
        t.set("monica", "le gusta correr")
        t.set("carlos", "le gusta correr")
        t.set("camilo", "le gusta correr")
        t.set("juna", "le gusta nadar")
        // t.set("juan", "le gusta nadar")
        // t.set("juan", "le gusta correr")
        t.set("albeerto", "le gusta correr")
        t.set("david", "le gusta correr")
        expect(t.length()).toBe(7);
        expect(t.hash("juan")).toBe(8)
    })
})

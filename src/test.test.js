import { HashMap } from "./index";

describe("testin", () => {
    let map = new HashMap;
    map.set("juan", "le gusta correr")
    map.set("juan", "le gusta correr")
    map.set("juan", "le gusta nadar")
    map.set("monica", "le gusta correr")
    map.set("carlos", "le gusta correr")
    map.set("camilo", "le gusta correr")
    map.set("juna", "le gusta nadar")
    map.set("albeerto", "le gusta correr")
    map.set("david", "le gusta correr")

    test("size", () => {
        expect(map.length()).toBe(7);
    })
    test("hash", () => {
        expect(map.hash("juan")).toBe(8)
    })
    test("get by value", () => {
        expect(map.get("juan")).toMatch("le gusta nadar")
    })
    test("keys", () => {
        expect(map.keys()).toHaveLength(7);
    })
    test("values", () => {
        expect(map.values()).toHaveLength(7);
    })
    test("entries", () => {
        expect(map.entries()).toHaveLength(7);
    })
    test("remove a non existed ", () => {
        expect(map.remove("Zapico")).toBeFalsy();
    })
    test("remove a existed ", () => {
        expect(map.remove("juan")).toBeTruthy();
    })
    test("clear", () => {
        map.clear();
        expect(map.length()).toBe(0);
    })
})

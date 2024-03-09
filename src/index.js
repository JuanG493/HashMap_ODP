import { LinkedList } from "./LinkedList";


class HashMap {
    capacity = 16;
    loadFactor = 0.75;

    constructor() {
        this.map = Array(this.capacity).fill(null);
    }

    test(index) {
        if (index < 0 || index >= this.map.length) {
            return false;
            // throw new Error("Trying to access index out of bound");
        } else {
            return true;
        }
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        // console.log("carga: " + (this.length() * this.loadFactor));
        let hashKey = this.hash(key);
        // check if the size of the index of the bucket is in the allowed range
        if (this.test(hashKey)) { //is in the allowed range
            let list = this.map[hashKey];
            //if it's empty
            if (list == null) {
                let linkList = new LinkedList();
                linkList.prepend({ [key]: value })
                this.map[hashKey] = linkList;
                // list = linkList;
            } else {
                //if the key already exist override the content 
                if (list.containsKey(key)) {
                    let index = list.findKey(key);
                    let oldvalues = Object.values(list)[index];
                    oldvalues.value = value;
                    // console.log(Object.values(list)[index]);
                } else {
                    // if the key do not exist but have the same hashcode - add a new node to the link list
                    list.prepend({ [key]: value })

                }
            }
        } else {
            // need groow?
            if (this.map.length() >= (this.capacity * this.loadFactor)) {
                this.capacity = this.capacity * 2;
                let newMap = new HashMap;
                for (let i = 0; index < this.capacity; i++) {
                    if (this.map[i] != null) {
                        this.newMap[i] = this.map[i]
                    }
                }
                this.map = newMap;
            } else {
                console.log("Can not be insert");
            }
        }

    }
    get(key) {
        //check if no exists
        return this.map[key]
    }
    has(key) { }
    remove(key) { }

    //returns the number of stored keys in the hash Map
    length() {
        let numKeys = 0;
        for (const i of this.map) {
            if (i != null) {
                numKeys++;
            }
        }
        return numKeys;
    }

    clear() {
        let newMap = new HashMap;
        this.map = newMap;
    }

    keys() {
        return Object.keys(this.map)
    }

    values() {
        return Object.values(this.map)
    }

    entries() {
        Object.entries(this.map)
    }
}

let t = new HashMap;

// let a = t.hash("juan");
t.set("juan", "le gusta correr")
t.set("juan", "le gusta nadar")
t.set("monica", "le gusta correr")
t.set("carlos", "le gusta correr")
t.set("camilo", "le gusta correr")
t.set("juna", "le gusta nadar")
t.set("camilo", "le gusta nadar")
t.set("diana", "le gusta correr")
t.set("albeerto", "le gusta correr")
t.set("federico", "le gusta correr")
t.set("antonio", "le gusta correr")
t.set("oscar", "le gusta correr")
t.set("fabian", "le gusta correr")
t.set("andres", "le gusta correr")
t.set("analia", "le gusta correr")
t.set("alma", "le gusta correr")
t.set("fanny", "le gusta correr")
console.log(t);
console.log(t.hash("analia"));
console.log(t.hash("oscar"));
console.log(t.length());


t.set("claudia", "le gusta correr")
t.set("paola", "le gusta correr")
t.set("paula", "le gusta correr")
t.set("mame", "le gusta correr")
t.set("atenea", "le gusta correr")
t.set("fernando", "le gusta correr")
t.set("zapico", "le gusta correr")
t.set("itziar", "le gusta correr")
t.set("beatriz", "le gusta correr")
t.set("ospina", "le gusta correr")
t.set("pamela", "le gusta correr")
t.set("marian", "le gusta correr")
t.set("ruperto", "le gusta correr")
t.set("antonidas", "le gusta correr")
t.set("ignacio", "le gusta correr")
t.set("albaricoque", "le gusta correr")
t.set("turgeermelida", "le gusta correr")


console.log(t.length());
console.log(t);
// let b = t.get(a);
// console.log(a);

// console.log(b);




// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

export { HashMap }
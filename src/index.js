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
        let hashKey = this.hash(key);

        // check if the size of the index of the bucket is in the allowed range
        if (this.test(hashKey)) {
            let list = this.map[hashKey];
            //if it's empty
            if (list == null) {
                let list = new LinkedList();
                list.prepend({ [key]: value })
                this.map[hashKey] = list;
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
                // console.log(this.map[hashKey]);
                // console.log(this.map[hashKey].contains(value));
                // this.map[hashKey] = value
            }


        } else {
            // need groow?
            console.log("Can not be insert");
        }

    }
    get(key) {
        //check if no exists
        return this.map[key]
    }
    has(key) { }
    remove(key) { }
    length(key) { }

    clear() { }
    keys() { }
    values() { }
    entries() { }


}

let t = new HashMap;

// let a = t.hash("juan");
t.set("juan", "le gusta correr")
t.set("monica", "le gusta correr")
t.set("carlos", "le gusta correr")
t.set("camilo", "le gusta correr")
t.set("juna", "le gusta nadar")
t.set("juan", "le gusta nadar")
t.set("juan", "le gusta correr")
t.set("albeerto", "le gusta correr")
t.set("david", "le gusta correr")
let b = t.get(a);
console.log(a);

// console.log(b);




// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }


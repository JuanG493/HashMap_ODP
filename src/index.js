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
    //  takes one argument as a key and returns the value that is assigned to this key.
    //  If a key is not found, return null.
    get(key) {
        //check if no exists
        if (this.has(key)) {
            let hashKey = this.hash(key);
            let element = this.map[hashKey];
            let index = element.findKey(key);
            return element.at(index).value;
        } else {
            return null
        }
    }

    // takes a key as an argument and returns true or false
    //  based on whether or not the key is in the hash map.
    has(key) {
        let hashKey = this.hash(key);
        let element = this.map[hashKey];
        if (element === null) {
            return false;
        } else {
            if (element.containsKey(key)) {
                return true;
            } else {
                return false;
            }
        }

    }
    // takes a key as an argument. If the given key is in the hash map,
    // it should remove the entry with that key and return true. 
    // If the key isn’t in the hash map, it should return false.
    remove(key) {
        if (this.has(key)) {
            let hashKey = this.hash(key);
            let element = this.map[hashKey];
            let index = element.findKey(key);
            element.removeAt(index)
            return true;
        } else {
            return false;
        }
    }

    //returns the number of stored keys in the hash Map
    length() {
        let numKeys = 0;

        for (const i of this.map) {
            if (i !== null) {
                numKeys++;
            }
        }
        return numKeys;
    }

    clear() {
        // let newMap = new HashMap;
        console.log(this.map);
        for (let i = 0; i < this.capacity; i++) {
            this.map[i] = null
        }
    }

    keys() {
        let listKesys = [];
        for (const bucket of this.map) {
            if (bucket !== null) {
                let size = bucket.size()
                for (let i = 0; i < size; i++) {
                    listKesys.push(bucket.at(i).key);
                }
            }
        }
        return listKesys;
    }

    values() {
        let listValues = [];
        for (const bucket of this.map) {
            if (bucket !== null) {
                let size = bucket.size()
                for (let i = 0; i < size; i++) {
                    listValues.push(bucket.at(i).value);
                }
            }
        }
        return listValues;
    }

    entries() {
        let listEntries = [];
        for (const bucket of this.map) {
            if (bucket !== null) {
                let size = bucket.size()
                for (let i = 0; i < size; i++) {
                    listEntries.push([bucket.at(i).key, bucket.at(i).value]);
                }
            }
        }
        return listEntries;
    }
}

// let t = new HashMap;

// t.set("juan", "le gusta bailar")
// t.set("juan", "le gusta nadar")
// t.set("monica", "le gusta escalar")
// t.set("carlos", "le gusta comer")
// t.set("camilo", "le gusta cantar")
// t.set("juna", "le gusta nadar")
// t.set("camilo", "le gusta nadar")
// t.set("diana", "le gusta moler")
// t.set("albeerto", "le gusta trotar")
// t.set("federico", "le gusta correr")
// t.set("antonio", "le gusta correr")
// t.set("oscar", "le gusta correr")
// t.set("fabian", "le gusta correr")
// t.set("andres", "le gusta correr")
// t.set("analia", "le gusta correr")
// t.set("alma", "le gusta correr")
// t.set("fanny", "le gusta correr")
// t.set("claudia", "le gusta correr")
// t.set("paola", "le gusta correr")
// t.set("paula", "le gusta correr")
// t.set("mame", "le gusta correr")
// t.set("atenea", "le gusta correr")
// t.set("fernando", "le gusta correr")
// t.set("zapico", "le gusta correr")
// t.set("itziar", "le gusta correr")
// t.set("beatriz", "le gusta correr")
// t.set("ospina", "le gusta correr")
// t.set("pamela", "le gusta correr")
// et("marian", "le gusta correr")
// t.set("ruperto", "le gusta correr")
// t.set("antonidas", "le gusta correr")
// t.set("ignacio", "le gusta correr")
// t.set("albaricoque", "le gusta correr")
// t.set("turgeermelida", "le gusta correr")



// console.log(t);
// console.log(t.length());
// console.log(t.get("juan"));
// console.log(t.remove("juan"));
// console.log(t.length());
// console.log(t.keys());
// console.log(t.values());
// console.log(t.entries());
// console.log(t);
// t.clear()
// console.log(t.length());

export { HashMap }
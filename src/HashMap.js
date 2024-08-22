class HashMap {
    constructor() {
        this.map = new Map();
    }

    getVal(key) {
        return this.map.get(key)
    }

    setVal(element, i) {
        this.map.set(element, i)

        return this
    }

    delete(key) {
        return this.map.delete(key);
    }

}

module.exports = HashMap
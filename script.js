class Item {
    constructor(name, notes = ""){
        this.name = name;
        this.notes = notes;
    }
}

class Furniture extends Item {
    constructor(name, dims="", notes=""){
        super(name, notes);
        this.dims = dims;
    }
}
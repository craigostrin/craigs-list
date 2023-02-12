class Item {
    constructor(name, notes = "", image = ""){
        this.Id = getId();
        this.name = name;
        this.notes = notes;
        this.image = image;
    }
}

class Furniture extends Item {
    constructor(name, dims="", notes="", image = ""){
        super(name, notes, image);
        this.dims = dims;
    }
}

const items = {
    furniture: {},
    games: {},
    electronics: {},
    other: {},
};

let _nextId = 0;


function getId() {
    _nextId++;
    return _nextId;
}
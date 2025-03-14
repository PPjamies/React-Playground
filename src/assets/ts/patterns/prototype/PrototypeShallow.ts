interface PrototypeShallow {
    clone(): PrototypeShallow;
}

class Apple implements PrototypeShallow {
    constructor(
        public type: string,
        public age: number,
        public color: string
    ) {
    }

    // shallow copy
    clone(): PrototypeShallow {
        return new Apple(this.type, this.age, this.color);
    }
}

class Tree implements PrototypeShallow {
    constructor(
        public type: string,
        public height: number,
    ) {
    }

    clone(): PrototypeShallow {
        return new Tree(this.type, this.height);
    }
}

// client
const apple1 = new Apple('fuji', 1, 'yellow');
const apple2 = apple1.clone()
console.log(apple2);

const tree1 = new Tree('cherry', 12);
const tree2 = tree1.clone();
console.log(tree2);
import _ from 'lodash';

interface PrototypeDeep {
    clone(): PrototypeDeep;
}

class Apple implements PrototypeDeep {
    constructor(
        public type: string,
        public age: number,
        public color: string
    ) {
    }

    // deep copy
    clone(): PrototypeDeep {
        return _.cloneDeep(this) as PrototypeDeep;
    }
}

class Tree implements PrototypeDeep {
    constructor(
        public type: string,
        public height: number,
    ) {
    }

    clone(): PrototypeDeep {
        return _.cloneDeep(this) as PrototypeDeep;
    }
}

// client
const apple1 = new Apple('fuji', 1, 'yellow');
const apple2 = apple1.clone()
console.log(apple2);

const tree1 = new Tree('cherry', 12);
const tree2 = tree1.clone();
console.log(tree2);
// abstract furniture
interface Chair {
    sitOn(): void;
}

interface Table {
    placeOn(): void;
}

interface Bed {
    lieOn(): void;
}

// concrete furniture

// wooden
class WoodenChair implements Chair {
    sitOn(): void {
        console.log("Sitting on wooden chair...");
    }
}

class WoodenTable implements Table {
    placeOn(): void {
        console.log("Placing on wooden table...");
    }
}

class WoodenBed implements Bed {
    lieOn(): void {
        console.log("Lying on wooden bed...");
    }
}

// marble
class MarbleChair implements Chair {
    sitOn(): void {
        console.log("Sitting on marble chair...");
    }
}

class MarbleTable implements Table {
    placeOn(): void {
        console.log("Placing on marble table...");
    }
}

class MarbleBed implements Bed {
    lieOn(): void {
        console.log("Lying on marble bed...");
    }
}

// abstract factory
interface FurnitureFactory {
    createChair(): Chair;

    createTable(): Table;

    createBed(): Bed;
}

// concrete factory
class WoodenFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new WoodenChair();
    }

    createTable(): Table {
        return new WoodenTable();
    }

    createBed(): Bed {
        return new WoodenBed();
    }
}

class MarbleFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new MarbleChair();
    }

    createTable(): Table {
        return new MarbleTable();
    }

    createBed(): Bed {
        return new MarbleBed();
    }
}

// client
function setupFurniture(factory: FurnitureFactory): void {
    const chair = factory.createChair();
    const table = factory.createTable();
    const bed = factory.createBed();

    chair.sitOn();
    table.placeOn();
    bed.lieOn();
}

const woodenFurnitureFactory = new WoodenFurnitureFactory();
const marbleFurnitureFactory = new MarbleFurnitureFactory();

console.log('Wooden Furniture:');
setupFurniture(woodenFurnitureFactory);

console.log('Marble Furniture:');
setupFurniture(marbleFurnitureFactory);
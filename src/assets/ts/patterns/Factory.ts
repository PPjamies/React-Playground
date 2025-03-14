enum VehicleType {
    CAR = 'CAR',
    BUS = 'BUS'
}

interface Vehicle {
    drive(): void;

    honk(): void;
}

class Car implements Vehicle {
    drive(): void {
        console.log('Driving car...')
    }

    honk(): void {
        console.log('Beep!')
    }
}

class Bus implements Vehicle {
    drive(): void {
        console.log('Driving bus...')
    }

    honk(): void {
        console.log('Honk!')
    }
}

class VehicleFactory {
    static createVehicle(type: VehicleType): Vehicle {
        if (type === VehicleType.CAR) {
            return new Car();
        } else if (type === VehicleType.BUS) {
            return new Bus();
        } else {
            throw new Error(`Invalid vehicle type: ${type}`);
        }
    }
}

// client
const car: Vehicle = VehicleFactory.createVehicle(VehicleType.CAR);
const bus: Vehicle = VehicleFactory.createVehicle(VehicleType.BUS);
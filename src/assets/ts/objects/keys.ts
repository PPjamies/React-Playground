const getAllKeys = (object: Record<string, any>) => {
    if (!object || typeof object !== 'object')
        return;

    const keySet = Object.keys(object);
    console.log(keySet);

    keySet.forEach((x) => {
        const val = object[x];
        if (val && typeof val === 'object') {
            getAllKeys(val);
        }
    });
}

const data = {
    name: 'Alice',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'Wonderland',
        postal: {
            code: '12345',
            country: 'Dreamland'
        }
    }
};

getAllKeys(data);
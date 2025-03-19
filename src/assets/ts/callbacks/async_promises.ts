const handleData = async () => {
    try {
        console.log('async await')
        const data = await fetch('https://randomuser.me/api/')
        const res = await data.json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

//Both will run asynchronously

// async await
handleData();

// promises
fetch('https://randomuser.me/api/')
    .then((data) => {
        console.log('Promises');
        data.json().then(res => console.log(res))
    })
    .catch(error => console.log(error));
import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col font-bold'>
            Welcome to the Home Page!

            <Link to='/todo-list-component'
                  className='max-w-40 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-black'>
                <button type='button'>Todo List</button>
            </Link>
        </div>
    );
}

export default Home;
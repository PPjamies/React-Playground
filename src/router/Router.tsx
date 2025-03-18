import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from "../pages/Home";
import TodoListComponent from "../components/TodoList";
import LikeButton from "../components/Buttons";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* Test Routes */}
                <Route path='/todo-list-component' element={<TodoListComponent/>}/>
                <Route path='/like-button' element={<LikeButton/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
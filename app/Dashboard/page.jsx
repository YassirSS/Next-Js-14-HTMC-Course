"use client";
import React, { useEffect, useState } from 'react';
import SidBar from "@/components/SideBar";
import TodoCards from '@/components/TodosCard';

const page = () => {


    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {

        const data = await fetch("https://jsonplaceholder.typicode.com/todos");

        const response = await data.json();

        console.log(response);

        setTodos(response);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1 className='text 3xl p-3 m-3 font-bold'>Employees Todo:</h1>

            <div className='p-3 m-3'>
                {
                    todos && todos.map((todo, index) => (
                        <div key={index}>
                            <TodoCards todo={todo} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page
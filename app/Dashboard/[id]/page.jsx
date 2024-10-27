"use client";
import { useEffect, useState } from "react";

const page = ({ params }) => {
    const todoId = params.id
    console.log(todoId);

    const [todo, setTodo] = useState();

    const fetchTodo = async () => {

        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

        const response = await data.json();

        console.log(response);

        setTodo(response);
    };

    useEffect(() => {
        fetchTodo();
    }, []);


    return (
        <div>Page {todoId}</div>
    )
}

export default page;
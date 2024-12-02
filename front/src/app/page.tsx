"use client";

import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from 'react';

const GET_TODOS = gql`
    query GetTodos {
        findAll {
            id
            title
            completed
        }
    }
`;

export default function Home() {
    const [isClinet, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const { loading, error, data } = useQuery(GET_TODOS, {
        skip: !isClinet,
    });

    if (!isClinet) return <p>Loading...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {data.findAll.map((todo:any) => (
                    <li key={todo.id}>
                        {todo.title} {todo.completedj? "(Completed)" : "(UnCompleted)"}
                    </li> 
                ))}
            </ul>
        </div>
    )
}

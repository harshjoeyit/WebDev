import React, { useEffect, useState, Component } from 'react'

export default function Test({ skip }) {

    useEffect(() => {
        const fetchData = async () => {
            const todoIdList = [1, 2, 3, 4]
             
            // slower method
            for (const id of todoIdList) {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                const todo = await response.json()
                console.log(todo.title)
            }
            
            // faster method
            const promises = todoIdList.map(async (id) => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
                return await response.json()
            })

            const data = await Promise.all(promises);
            console.log(data);
        }
        fetchData();
    }, [])

    return (
        <div>

        </div>
    )
}



import axios from 'axios';

const baseURL = "https://mern-crud-backend-xknl.onrender.com"

const getAllTodo = (setTodo)=>{
    axios.get(baseURL)
    .then(({data})=>{
        console.log(`Data........`, data);
        setTodo(data)
    })
}

const addTodo = (text, setText, setTodo)=>{
    axios.post(`${baseURL}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("");
        getAllTodo(setTodo)
    }).catch((err)=>{
        console.log(err)
    })
}

const updateTodo = (todoId, text, setText, setTodo, setIsUpdating)=>{
    axios.post(`${baseURL}/update`,{_id : todoId, text})
    .then((data)=>{
        console.log(data);
        setText("");
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const deleteTodo = (_id, setTodo)=>{
    axios.post(`${baseURL}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllTodo(setTodo)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export {getAllTodo, addTodo, updateTodo, deleteTodo};
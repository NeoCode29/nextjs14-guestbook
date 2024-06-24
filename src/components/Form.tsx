"use client"

import React, { useState } from "react"

import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const Form = () => {
    let [username, setUsername] = useState("");
    let [massage, setMassage] = useState("");

    function formatDate(timestamp : number) {
        const date = new Date(timestamp);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const day = String(date.getDate()).padStart(2, '0'); // Mengambil hari dan memastikan dua digit
        const month = monthNames[date.getMonth()]; // Mengambil bulan dan memastikan dua digit
        const year = date.getFullYear(); // Mengambil tahun
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day} ${month} ${year} ${hours}:${minutes}`;
    }  

    const changeUsername = (e : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const changeMassage = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setMassage(e.target.value);
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        

        let response = await fetch("./api",{
            method : "POST" ,
            body : JSON.stringify({username , massage , date : formatDate(Date.now())}) ,
            headers : {
                "Content-Type" : "application/json"
            }
        })
        let data = await response.json()
        alert(data["massage"]);
        setUsername("");
        setMassage("");
    }
    return (
        <form className="grid max-w-md gap-4" onSubmit={handleSubmit}>
            <div className="grid w-full w-full items-center gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input type="text" onChange={changeUsername} id="username" placeholder="username" value={username}/>
            </div>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea onChange={changeMassage} placeholder="Type your message here." id="message" value={massage}/>
            </div>
            <Button>Submit</Button>
        </form>
    )
}

export default Form;
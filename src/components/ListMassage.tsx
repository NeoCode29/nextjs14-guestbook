"use client"
import { useEffect, useState } from "react";
import CardMassage from "./CardMassage";

type massage = {
    username: string;
    massage: string;
    date : string;
}

const ListMassage = () => {
    const [massages, setMassages] = useState<massage[]>([]);
    useEffect(() => {
        fetch('./api')
            .then((res) => res.json())
            .then((res) => {setMassages(res)});
    })

    return(<div className="grid gap-3">
        {massages.map((value,index) => {
            return <CardMassage key={index} username={value.username} massage={value.massage} date={value.date}/>
        })}
        
    </div>)
}

export default ListMassage



import { useState } from 'react'
import "./Button.css"
interface ButtonProps{
    name: string;
    link?: string;
    action?: string;
}

export default function Button(props: ButtonProps){
    const [count, setCount] = useState(0)

    return (

        <>
            {props.link?
                <a className="link" href={props.link}> {props.name} </a> :
                <button className="button" onClick={props.action}> {props.name} </button>
            }

        </>
    )
}
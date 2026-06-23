import "./Button.css"
interface ButtonProps {
    name: string;
    link?: string;
    action?: () => void;
}

export default function Button(props: ButtonProps) {

    return (
        <>
            {props.link ?
                <a className="link" href={props.link}> {props.name} </a> :
                <button className="button" onClick={props.action}> {props.name} </button>
            }

        </>
    )
}
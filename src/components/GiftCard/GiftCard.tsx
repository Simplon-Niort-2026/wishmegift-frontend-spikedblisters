import './GiftCard.css'
import Button from "../Button/Button";
import StarRating from "../StarRating/StarRating";

interface GiftCardProps {
    name: string;
    description: string;
    link: string;
    price: number;

}

export default function GiftCard(props: GiftCardProps) {
    const handleClick = () => alert("Booké !!");

    return (
        <div className='giftCard'>
            <h2>{props.name}</h2>
            <StarRating />
            <p>{props.description}</p>
            <Button name="Link" link={props.link}/>
            <h2>{props.price}</h2>
            <Button name="Book" action={handleClick}/>
        </div>
    )
}
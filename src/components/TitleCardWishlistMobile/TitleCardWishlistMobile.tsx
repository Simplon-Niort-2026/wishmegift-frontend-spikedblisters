interface TitleCardWishlistMobileProps {
    title: string;
}   

export function TitleCardWishlistMobile(props: TitleCardWishlistMobileProps) {
    return (
        <div className="title-card-wishlist-mobile">
            <h2 className="title-card-wishlist-mobile-title">{props.title}</h2>
        </div>
    );
}
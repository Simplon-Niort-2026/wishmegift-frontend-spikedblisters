import "./WishListCardMobile.css"

interface WishListCardMobileProps {
    title: string;
    author:string;
    description:string;
    linkDetails : string;
    deleteButton : string;
}

export default function WishListCardMobile(props: WishListCardMobileProps) {
    return (
        <div className="wishListCard-mobile">
          <div className="title-description-card-wishlist-mobile">
              <div className="title-author-card-wishlist-mobile">
                  <h3 className="title-card-wishlist-mobile">{props.title}</h3>
                  <p className="author_card-mobile">{props.author} </p>
              </div>
              <div className="description-card-wishlist-mobile">
                  <h3 className="title-description-card-wishlist-mobile">{props.description}</h3>
              </div>
          </div>
            <div className="linkDetailsAndDeletete-card-wishlist-mobile">
                <a className="title-linkDetailsAndDeletete-wishlist-mobile" href="/">{props.linkDetails}</a>
                <button className={"button-linkDetailsAndDeletete-wishlist-mobile"}> {props.deleteButton} </button>
            </div>
        </div>
    );
}
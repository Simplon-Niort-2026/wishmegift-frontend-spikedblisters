import './BannerListMobile.css';

interface BannerListMobileProps {
    title: string;
    date : string;
}

export function BannerListMobile(props: BannerListMobileProps) {
    return (
        <div className="banner-list-mobile">
            <h2 className="banner-list-mobile-title">{props.title}</h2>
            <p className="banner-list-mobile-date">Date : {props.date}</p>
        </div>
    );
}
import './BannerListMobile.css';

interface BannerListMobileProps {
    title: string;
}

export function BannerListMobile(props: BannerListMobileProps) {
    return (
        <div className="banner-list-mobile">
            <h2 className="banner-list-mobile-title">{props.title}</h2>
        </div>
    );
}
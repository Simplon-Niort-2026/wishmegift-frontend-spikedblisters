import './BannerListDetailMobile.css'

interface BannerListMobileProps {
    title: string;
}

export function BannerListDetailMobile(props: BannerListMobileProps) {
    return (
        <div className="banner-list-detail-mobile">
            <h2 className="banner-list-detail-mobile-title">{props.title}</h2>
        </div>
    );
}
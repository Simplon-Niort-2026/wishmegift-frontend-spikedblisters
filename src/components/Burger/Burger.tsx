import './Burger.css'
import {pushRotate as Menu} from 'react-burger-menu'
export interface NavLink {
    id:number
    label: string
    url: string
}
interface BurgerProps {
    links: NavLink[]
}
export default function Burger(props: BurgerProps){
    return(
        <Menu right isOpen={false}width={'300px'}>
        {props.links.map((link) => (
            <a key= {link.id} className='link' href= {link.url}>{link.label}</a>
        )
    )
        }
        </Menu>
    )
}
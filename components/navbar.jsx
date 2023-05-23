import Link from 'next/link';
import styles from './navnar.module.css'; 


const MENU_ITEMS = [
    {text: 'Home', href: '/'},
    {text: 'About', href: '../pages/posts/first-page'},
    {text: 'Projects', href: ''}
]


const NavItem = ({ text, href }) => {
    return (
        <Link href={href} className={styles.link}>
            {text}
        </Link>
    )
}


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            { MENU_ITEMS.map((menu) => (
                <div key={menu.text}>
                    <NavItem {...menu} />
                </div>
            ))}
        </div>
    )
}
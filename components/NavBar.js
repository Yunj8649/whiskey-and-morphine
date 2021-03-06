import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from './NavBar.module.css';
import { menus } from '../constant/menu';

export default function NavBar() {
    const router = useRouter();
    const { pathname } = router; 
    return (
        <nav>
          <img src="/vercel.svg" />
          <div className="menu-container">
            {menus.map(menu => (
              <Link key={menu.KEY} href={menu.PATH}>
                <a className={pathname === menu.PATH ? "active" : ""}>{menu.VALUE}</a>
              </Link>
            ))}
          </div>
          <style jsx>{`
            nav {
              display: flex;
              gap: 10px;
              flex-direction: column;
              align-items: center;
              padding-top: 20px;
              padding-bottom: 10px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }
            nav .menu-container {
              width: 80%
            }
            img {
              max-width: 100px;
              margin-bottom: 5px;
            }
            nav a {
              padding: 0 15px;
              font-weight: 600;
              font-size: 18px;
            }
            .active {
              color: tomato;
            }
            nav div {
              display: flex;
              gap: 10px;
            }
          `}</style>
        </nav>
      );
}
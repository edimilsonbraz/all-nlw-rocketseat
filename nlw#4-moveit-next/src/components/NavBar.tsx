import styles from '../styles/components/NavBar.module.css';
import Link from 'next/link'

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <header>
        <Link href="/home">
          <a>
            <img src="/logo-icon.svg" alt="Move.it" />
          </a>
        </Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/login">
              <a className={styles.homeIcon}>
                <img src="/home-icon.png" alt=""/>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <a className={styles.experience}>
                <img src="/experience-icon.png" alt=""/>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <button type="button" >
          Sair
        </button>
      </footer>
    </div>
  )
}
  

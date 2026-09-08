import { NavLink, Outlet } from 'react-router-dom'
import orbitLogo from '../assets/orbit.svg'
import styles from './AppLayout.module.css'

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/settings', label: 'Settings', end: false },
]

export function AppLayout() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <NavLink to="/" className={styles.brand} aria-label="Northstar dashboard">
          <img src={orbitLogo} alt="" />
          <span>Northstar</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.navDot} />
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.workspaceCard}>
          <span className={styles.workspaceLabel}>Workspace</span>
          <strong>Peephole Lab</strong>
          <small>Static preview fixture</small>
        </div>
      </aside>

      <div className={styles.mainColumn}>
        <header className={styles.topbar}>
          <div>
            <span className={styles.eyebrow}>Product operations</span>
            <strong>September workspace</strong>
          </div>
          <div className={styles.profile}>
            <span className={styles.avatar}>PK</span>
            <span>
              <strong>Project team</strong>
              <small>6 members</small>
            </span>
          </div>
        </header>
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

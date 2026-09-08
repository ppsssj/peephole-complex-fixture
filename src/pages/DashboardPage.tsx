import activity from '../data/activity.json'
import projectsData from '../data/projects.json'
import type { Project } from '../types'
import { MiniChart } from '../components/MiniChart'
import { PageHeader } from '../components/PageHeader'
import { StatCard } from '../components/StatCard'
import styles from './DashboardPage.module.css'

const projects = projectsData as Project[]

export function DashboardPage() {
  const activeProjects = projects.filter((project) => project.status === 'active').length
  const completedTasks = projects.reduce((total, project) => total + project.tasksCompleted, 0)
  const totalTasks = projects.reduce((total, project) => total + project.tasksTotal, 0)
  const averageProgress = Math.round(projects.reduce((total, project) => total + project.progress, 0) / projects.length)

  return (
    <section>
      <PageHeader eyebrow="Overview" title="Good morning, team." description="A calm view of the work moving through Northstar this week." />

      <div className={styles.stats}>
        <StatCard label="Active projects" value={String(activeProjects)} note="2 more in planning" tone="blue" />
        <StatCard label="Tasks completed" value={`${completedTasks}`} note={`of ${totalTasks} total tasks`} tone="green" />
        <StatCard label="Average progress" value={`${averageProgress}%`} note="Across all initiatives" tone="orange" />
        <StatCard label="Team focus" value="86%" note="Up 6 points this month" tone="purple" />
      </div>

      <div className={styles.dashboardGrid}>
        <MiniChart />
        <article className={styles.activity}>
          <div className={styles.sectionHeading}>
            <div><span>Live log</span><h2>Recent activity</h2></div>
            <img src="/peephole-mark.svg" alt="Peephole fixture mark" />
          </div>
          <ul>
            {activity.map((item) => (
              <li key={item.id}>
                <span className={styles.activityDot} />
                <div><strong>{item.person}</strong> {item.action}<small>{item.project} · {item.time}</small></div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

import projectsData from '../data/projects.json'
import type { Project } from '../types'
import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { useProjectFilters, type StatusFilter } from '../hooks/useProjectFilters'
import styles from './ProjectsPage.module.css'

const projects = projectsData as Project[]
const filters: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'planning', label: 'Planning' },
  { value: 'completed', label: 'Completed' },
]

export function ProjectsPage() {
  const { filteredProjects, query, setQuery, status, setStatus } = useProjectFilters(projects)

  return (
    <section>
      <PageHeader eyebrow="Portfolio" title="Projects" description="Search the workspace and check the status of every current initiative." />

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className="sr-only">Search projects</span>
          <span aria-hidden="true">⌕</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or owners…" />
        </label>
        <div className={styles.filters} aria-label="Filter projects by status">
          {filters.map((filter) => (
            <button key={filter.value} type="button" className={status === filter.value ? styles.selected : ''} onClick={() => setStatus(filter.value)}>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultMeta}>{filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} found</div>
      {filteredProjects.length ? (
        <div className={styles.grid}>{filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      ) : (
        <div className={styles.empty}><strong>No projects found</strong><span>Try a different search or status.</span></div>
      )}
    </section>
  )
}

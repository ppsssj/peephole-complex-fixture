import { useMemo, useState } from 'react'
import type { Project, ProjectStatus } from '../types'

export type StatusFilter = 'all' | ProjectStatus

export function useProjectFilters(projects: Project[]) {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesStatus = status === 'all' || project.status === status
      const matchesQuery =
        !normalizedQuery ||
        project.name.toLowerCase().includes(normalizedQuery) ||
        project.owner.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery)

      return matchesStatus && matchesQuery
    })
  }, [projects, query, status])

  return { filteredProjects, query, setQuery, status, setStatus }
}

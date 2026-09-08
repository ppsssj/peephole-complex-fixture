export type ProjectStatus = 'active' | 'planning' | 'completed'

export interface Project {
  id: string
  name: string
  description: string
  status: ProjectStatus
  progress: number
  owner: string
  dueDate: string
  tasksCompleted: number
  tasksTotal: number
  accent: 'blue' | 'green' | 'orange' | 'purple'
}

import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../components/AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProjectDetailPage } from '../pages/ProjectDetailPage'
import { ProjectsPage } from '../pages/ProjectsPage'

const SettingsPage = lazy(() => import('../pages/SettingsPage'))

export function AppRouter() {
  return (
    <Suspense fallback={<div className="route-loading">Loading workspace…</div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

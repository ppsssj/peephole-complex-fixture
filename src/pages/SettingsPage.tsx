import { useReducer } from 'react'
import { PageHeader } from '../components/PageHeader'
import styles from './SettingsPage.module.css'

interface SettingsState {
  workspaceName: string
  compactMode: boolean
  weeklyDigest: boolean
  projectUpdates: boolean
  timezone: string
  saved: boolean
}

type Action =
  | { type: 'text'; field: 'workspaceName' | 'timezone'; value: string }
  | { type: 'toggle'; field: 'compactMode' | 'weeklyDigest' | 'projectUpdates' }
  | { type: 'save' }
  | { type: 'reset' }

const initialState: SettingsState = {
  workspaceName: 'Peephole Lab',
  compactMode: false,
  weeklyDigest: true,
  projectUpdates: true,
  timezone: 'Asia/Seoul',
  saved: false,
}

function reducer(state: SettingsState, action: Action): SettingsState {
  if (action.type === 'text') return { ...state, [action.field]: action.value, saved: false }
  if (action.type === 'toggle') return { ...state, [action.field]: !state[action.field], saved: false }
  if (action.type === 'save') return { ...state, saved: true }
  return initialState
}

export default function SettingsPage() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <section>
      <PageHeader eyebrow="Preferences" title="Settings" description="Configure local workspace preferences. Changes stay in React state and are never sent to a server." />

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={(event) => { event.preventDefault(); dispatch({ type: 'save' }) }}>
          <div className={styles.section}>
            <div className={styles.sectionIntro}><h2>Workspace</h2><p>Basic presentation settings for this fixture.</p></div>
            <label className={styles.field}>Workspace name<input value={state.workspaceName} onChange={(event) => dispatch({ type: 'text', field: 'workspaceName', value: event.target.value })} /></label>
            <label className={styles.field}>Timezone<select value={state.timezone} onChange={(event) => dispatch({ type: 'text', field: 'timezone', value: event.target.value })}><option>Asia/Seoul</option><option>Europe/London</option><option>America/New_York</option></select></label>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionIntro}><h2>Experience</h2><p>Toggle interface and notification preferences.</p></div>
            <Toggle label="Compact project cards" description="Show denser project summaries." checked={state.compactMode} onChange={() => dispatch({ type: 'toggle', field: 'compactMode' })} />
            <Toggle label="Weekly digest" description="Prepare a Monday workspace summary." checked={state.weeklyDigest} onChange={() => dispatch({ type: 'toggle', field: 'weeklyDigest' })} />
            <Toggle label="Project updates" description="Highlight changes from project owners." checked={state.projectUpdates} onChange={() => dispatch({ type: 'toggle', field: 'projectUpdates' })} />
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.secondary} onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button type="submit" className={styles.primary}>Save preferences</button>
          </div>
          {state.saved && <p className={styles.saved} role="status">Preferences saved locally for this session.</p>}
        </form>

        <aside className={styles.preview}>
          <span>Live state preview</span>
          <h2>{state.workspaceName || 'Untitled workspace'}</h2>
          <dl>
            <div><dt>Density</dt><dd>{state.compactMode ? 'Compact' : 'Comfortable'}</dd></div>
            <div><dt>Digest</dt><dd>{state.weeklyDigest ? 'Enabled' : 'Disabled'}</dd></div>
            <div><dt>Updates</dt><dd>{state.projectUpdates ? 'Enabled' : 'Disabled'}</dd></div>
            <div><dt>Timezone</dt><dd>{state.timezone}</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

function Toggle({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: () => void }) {
  return (
    <label className={styles.toggleRow}>
      <span><strong>{label}</strong><small>{description}</small></span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.switch} aria-hidden="true" />
    </label>
  )
}

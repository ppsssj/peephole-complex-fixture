import styles from './MiniChart.module.css'

const values = [42, 55, 48, 67, 61, 76, 72, 86]

export function MiniChart() {
  const points = values.map((value, index) => `${index * 46},${100 - value}`).join(' ')

  return (
    <div className={styles.chart}>
      <div className={styles.header}>
        <div>
          <span>Weekly throughput</span>
          <strong>86 tasks</strong>
        </div>
        <span className={styles.trend}>+14.2%</span>
      </div>
      <svg viewBox="0 0 322 110" role="img" aria-label="Weekly throughput rising from 42 to 86 tasks">
        <defs>
          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4f7cff" stopOpacity=".25" />
            <stop offset="1" stopColor="#4f7cff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M0,100 L${points} L322,100 Z`} fill="url(#chart-fill)" />
        <polyline points={points} fill="none" stroke="#4f7cff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {values.map((value, index) => (
          <circle key={index} cx={index * 46} cy={100 - value} r="3.5" fill="#fff" stroke="#4f7cff" strokeWidth="2" />
        ))}
      </svg>
      <div className={styles.labels}><span>Week 1</span><span>Week 8</span></div>
    </div>
  )
}

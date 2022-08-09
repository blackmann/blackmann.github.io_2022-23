import styles from './TextSpawnApp.module.scss'
import React from 'react'
import TextSpawn from '../components/TextSpawn'
import clsx from 'clsx'

function historyReducer(state, entry) {
  if (state.length > 2) {
    state.shift(2 - state.length)
  }

  return [...state, entry]
}

export default function TextSpawnApp() {
  const [history, dispatchHistory] = React.useReducer(historyReducer, [])
  const [entry, setEntry] = React.useState('')

  function handleNewEntry(event) {
    event.preventDefault()
    dispatchHistory(entry)
    setEntry('')
  }

  return (
    <div className={styles.TextSpawnApp}>
      {history.map((item, index) => (
        <div key={index}>
          <TextSpawn>{item}</TextSpawn>
        </div>
      ))}

      <form
        className="container"
        onSubmit={handleNewEntry}
      >
        <div className={clsx('row row--align-center', styles.InputField)}>
          <div className="col--8">
            <input
              className={styles.TextSpawnInput}
              placeholder="Type something…"
              type="text"
              value={entry}
              onChange={({ target: { value } }) => setEntry(value)}
            />
          </div>
          <div className="col--4">
            <button className={styles.EnterButton}>⤴</button>
          </div>
        </div>
      </form>
    </div>
  )
}

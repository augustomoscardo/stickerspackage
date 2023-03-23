import { Header } from './components/Header'
import { StickersForm } from './components/StickersForm'
import './styles/global.css'

import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <StickersForm />
    </div>
  )
}

export default App

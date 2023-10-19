
import Header from '@/components/layout/header/page'
import HomePage from './home/page'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomePage />
    </main>
  )
}

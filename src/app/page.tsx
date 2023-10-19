
import Header from '@/components/layout/header/page'
import CategoriesProduct from './Categories/page'
import HomePage from './home/page'
import News from './news/page'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomePage />
      <News />
      <CategoriesProduct />
    </main>
  )
}

import Home from "@/components/homepage/Home";
import styles from './page.module.css';
export default function HomePage() {
  return (
    <div className={`hompepage min-vh-100 ${styles.homepage}`} >
      <Home />
    </div >
  )
}

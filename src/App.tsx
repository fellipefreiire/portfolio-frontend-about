import './styles/global/styles.css'
import { Sidebar } from 'home/Sidebar'
import { Section } from './components/Section'

export const App = () => {
  return (
    <div>
      <Sidebar />
      <Section />
    </div>
  )
}

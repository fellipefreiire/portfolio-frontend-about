import './styles/global/styles.css'
import { Route, Routes, Router, Location } from 'react-router-dom'
import { MemoryHistory, BrowserHistory } from 'history'
import { Section } from './components/Section'
import { useState } from 'react'
import { About } from './pages/About'

interface IAppProps {
  history: BrowserHistory | MemoryHistory
  location: Location
}

export const App = ({ location, history }: IAppProps) => {
  const [isolationLocation, setIsolationLocation] = useState(history.location)

  if (!location)
    history.listen(({ location }) => setIsolationLocation(location))

  return (
    <Router location={location || isolationLocation} navigator={history}>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Section />} />
      </Routes>
    </Router>
  )
}

import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomeScreen from "./components/HomeScreen"

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

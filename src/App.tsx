import AppRouter from "./components/AppRouter"
import { QuizProvider } from "./context/QuizContext"
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <QuizProvider>
      <ToastContainer autoClose={1000} position={toast.POSITION.BOTTOM_LEFT}/>
      <AppRouter/>
    </QuizProvider>
  )
}

export default App

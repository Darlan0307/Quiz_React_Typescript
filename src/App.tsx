import AppRouter from "./components/AppRouter"
import { QuizProvider } from "./context/QuizContext"

function App() {

  return (
    <QuizProvider>
      <AppRouter/>
    </QuizProvider>
  )
}

export default App

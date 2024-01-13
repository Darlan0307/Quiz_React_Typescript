import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartQuiz from "../pages/StartQuiz"
import Category from "../pages/Category"
import QuizReact from "../pages/QuizReact"
import FinallyQuiz from "../pages/FinallyQuiz"

const AppRouter = () => {
  return (
    <>
      <h1
      style={{
        color:"#eaeaea",
        textAlign:"center",
        marginTop: "1em"
      }}
      >Quiz de Programação</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartQuiz/>} />
          <Route path="/category" element={<Category/>} />
          <Route path="/category/react" element={<QuizReact/>} />
          <Route path="/congratulations" element={<FinallyQuiz/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
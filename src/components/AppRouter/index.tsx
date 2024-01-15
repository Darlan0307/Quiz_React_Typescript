import { BrowserRouter, Route, Routes } from "react-router-dom"
import StartQuiz from "../pages/StartQuiz"
import Category from "../pages/Category"
import QuizReact from "../pages/Quizzes/QuizReact"
import FinallyQuiz from "../pages/FinallyQuiz"
import QuizNode from "../pages/Quizzes/QuizNode"
import QuizHtml from "../pages/Quizzes/QuizHtml"
import QuizCss from "../pages/Quizzes/QuizCss"

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
          <Route path="/category/nodejs" element={<QuizNode/>} />
          <Route path="/category/html" element={<QuizHtml/>} />
          <Route path="/category/css" element={<QuizCss/>} />

          <Route path="/congratulations" element={<FinallyQuiz/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
import { Link } from "react-router-dom"
import img from '../../../assets/category.svg'
import './styles.scss'
import { useQuiz } from "../../../context/QuizContext"

const Category = () => {

  const {handleIdQuestions} = useQuiz()

  return (
    <main className="page-category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma dessas tecnologias</p>
      <div className="categories">
      <Link className="link" to="/questions"
      onClick={()=>handleIdQuestions("1")}
      >React</Link>
      <Link className="link" to="/questions"
      onClick={()=>handleIdQuestions("2")}
      >NodeJS</Link>
      </div>
      <img src={img} alt="imagem referente as categorias" />
    </main>
  )
}

export default Category
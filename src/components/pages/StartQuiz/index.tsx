import './styles.scss'
import img from '../../../assets/quiz.svg'
import { Link } from 'react-router-dom'

const StartQuiz = () => {

  return (
    <main className='page-initial'>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <Link className='link' to="/category">Inicial</Link>
      <img src={img} alt="imagem inicial do quiz" />
    </main>
  )
}

export default StartQuiz
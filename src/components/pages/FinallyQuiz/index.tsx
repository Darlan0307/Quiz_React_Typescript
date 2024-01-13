import { Link } from 'react-router-dom'
import img from '../../../assets/welldone.svg'
import { useQuiz } from '../../../context/QuizContext'
import './styles.scss'
const FinallyQuiz = () => {

  const {qtdHits,qtdQuestions,setQtdHits,setQtdQuestions} = useQuiz()

  return (
    <main className='page-final'>
      <h2>Fim de jogo!</h2>
      <p><span>Pontuação:</span>{qtdHits}</p>
      <p>
        <span>Você acertou</span>
        {qtdHits}
        <span>de</span>
        {qtdQuestions}
        <span>perguntas.</span>
      </p>
      <img src={img} alt="Imagem de final do jogo" />
      <Link 
      className='link' 
      to="/"
      onClick={()=>{
        setQtdHits(0)
        setQtdQuestions(0)
      }}
      >Reiniciar</Link>
    </main>
  )
}

export default FinallyQuiz
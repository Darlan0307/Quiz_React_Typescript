import LayoutQuiz from '../../../LayoutQuiz'
import '../styles.scss'
import { cssData } from '../../../../data/cssData'
import { userDataQuestions } from '../../../../utils/userDataQuestions'

const QuizCss = () => {


  const {questionCurrent,indexCurrent,nextQuestion,qtdQuestions,correctAlternative,verifyAlternative,concludeQuiz} = userDataQuestions(cssData)


  return (
    <LayoutQuiz>
      <main className="container-quiz">
        <h2 className='title-quiz'>CSS</h2>
        <span className='question-current'>{indexCurrent + 1} de {qtdQuestions}</span>
        <p className='question'>{questionCurrent.pergunta}</p>

        <div className='wrap-alternative'>
          {questionCurrent.alternativas.map((alternativa,index)=>(
            <p 
            id={index.toString()}
            className={correctAlternative == index ? 'alternative correct' : 'alternative'} 
            key={index}
            onClick={()=> verifyAlternative(index)}
            >{alternativa}</p>
          ))}
        </div>

        {indexCurrent + 1 == qtdQuestions ? (
          <button 
          className='btn-next-question'
          onClick={concludeQuiz}
          >Concluir</button>
        ):(
          <button 
        className='btn-next-question'
        onClick={nextQuestion}
        >Next</button>
        )}
        
      </main>
    </LayoutQuiz>
  )
}

export default QuizCss
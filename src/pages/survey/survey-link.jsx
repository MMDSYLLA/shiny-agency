// On utilise ici des liens-Links- pour naviguer entre les questions
// ce qui correspond au fichier ===index1.jsx=== dans la page === survey===
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1


  return (
    <div>
      <h1>Questionnaire survey-link 🧮</h1>
      <h2>Question{questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link> < b />
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey



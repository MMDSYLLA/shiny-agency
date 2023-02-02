import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link> <b /> 
            <Link to="/survey/10">Questionnaire</Link> <b />
            <Link to="/freelances">Freelances</Link> <b /> 
        </nav>
    )
}

export default Header





import styled from 'styled-components'
import colors from '../utils/colors'

// style part
const PageContainer = styled.div`
    height: 100vh;
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: start;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    margin: 20px;
    max-width: 1200px;

    height: auto;
`

const TitleStyle = styled.h1`
    color: ${colors.secondary};
    font-style: italic;
    margin-top: 50px;
    margin-bottom: 30px;
`

const ParagraphStyle = styled.p`
    color: white;
`
// function part
function About() {
    return (
        <PageContainer>
            <TextContainer>
                <TitleStyle>Qu'est ce que Find your SuperHero ?</TitleStyle>
                <ParagraphStyle>
                    Find your SuperHero a été créé principalement dans le but de
                    permettre à un jeune public (mais pas que 😊) de pouvoir
                    simplement et facilement rechercher des informations sur des
                    SuperHéros via une interface qui se veut être des plus
                    simple possible.
                </ParagraphStyle>
                <ParagraphStyle>
                    Ainsi tout a été pensé pour que ce soit intuitif et
                    facilement prenable en main par des enfants qui débuteraient
                    dans l'usage d'internet et la manipulation d'un site. C'est
                    donc en ce sens qu'il n'y a seulement qu'une fonctionnalité
                    de recherche, mais cela reste suffisant pour susciter leur
                    intérêt et continuer à stimuler leur imagination.
                </ParagraphStyle>
                <ParagraphStyle>
                    La seule contrainte du site est liée à la base de données
                    qui ne permet de gérer uniquement que des résultats en
                    anglais, ce qui implique que malgré la meilleure adaptation
                    possible certaines fonctionnalités comme la recherche du nom
                    nécessitent l'usage de cette langue pour le moment.
                </ParagraphStyle>
            </TextContainer>
        </PageContainer>
    )
}

export default About

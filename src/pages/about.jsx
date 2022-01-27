import styled from 'styled-components'
import colors from '../utils/colors'

// style part
const PageContainer = styled.div`
    background-color: ${colors.primary};
    display: flex;
    justify-content: center;
    align-items: start;
    min-height: 80vh;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
    margin: 20px;
    max-width: 1200px;

    height: 100%;
`

const TitleStyle = styled.h1`
    color: ${colors.secondary};
    font-style: italic;
    margin-top: 50px;
    margin-bottom: 30px;
`

const ParagraphStyle = styled.p`
    color: white;
    font-size: 1.1em;
`
// function part
function About() {
    return (
        <PageContainer>
            <TextContainer>
                <TitleStyle>Qu'est ce que Find your SuperHero ?</TitleStyle>
                <ParagraphStyle>
                    Find your SuperHero a été créé principalement dans le but de
                    permettre à un jeune public (mais pas que 😊 !) de pouvoir
                    simplement et facilement rechercher des informations sur des
                    SuperHéros via une interface qui se veut être des plus
                    simple possible.
                </ParagraphStyle>
                <ParagraphStyle>
                    Le site a donc été pensé pour que ce soit intuitif et
                    facilement prenable en main par des enfants qui débuteraient
                    dans l'usage d'internet et la navigation dans un site web.
                    C'est donc en ce sens qu'il n'y a seulement qu'une
                    fonctionnalité de recherche, mais cela reste suffisant pour
                    susciter leur intérêt et continuer à stimuler leur
                    imagination.
                </ParagraphStyle>
                <ParagraphStyle>
                    La seule contrainte du site est liée à la base de données
                    qui ne permet de rechercher uniquement des résultats en
                    anglais, mais cette contrainte peut être une opportunité
                    pour apprendre de nouveaux mots dans une autre langue et
                    éventuellement impliquer un peu plus les accompagnants dans
                    les recherches effectuées 😉.
                </ParagraphStyle>
                <ParagraphStyle>
                    Toutefois l'usage de ce site n'est pas réservé qu'à des
                    enfants, n'importe qui peut l'utiliser et faire, comme
                    l'auteur de cet ouvrage, des découvertes sur l'existence de
                    certains personnages 😊.
                </ParagraphStyle>
            </TextContainer>
        </PageContainer>
    )
}

export default About

import styled from 'styled-components'
import colors from '../utils/colors'
import errorImg from '../assests/logo_small_icon.png'

const ContainerStyle = styled.div`
    min-height: 70vh;
    width: 100vw;
    background-color: ${colors.primary};
    color: ${colors.textColor};
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TitleStyle = styled.h1`
    text-align: center;
    font-size: 1.3em;
    color: ${colors.secondary};
    margin-right: 5px;
    margin-left: 5px;
`
const ParagraphStyle = styled.p`
    display: flex;
    // padding: 0px 2px;
    margin-right: 5px;
    margin-left: 5px;
`
function Error() {
    return (
        <ContainerStyle>
            <TitleStyle>Oups quelque chose s'est mal passé !</TitleStyle>
            <ParagraphStyle>
                Clique sur "Trouver un héros" dans le bandeau en haut pour
                revenir à l'accueil.
            </ParagraphStyle>
            <img
                src={errorImg}
                alt="logo de find your superhero de la page d'erreur"
            />
        </ContainerStyle>
    )
}

export default Error

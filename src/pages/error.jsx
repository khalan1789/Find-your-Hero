import styled from 'styled-components'
import colors from '../utils/colors'
import errorImg from '../assests/logo_small_icon.png'

const ContainerStyle = styled.div`
    min-height: 100 vh;
    width: 100vw;
    background-color: ${colors.primary};
    color: red;
`

const TitleStyle = styled.h1`
    text-align: center;
    font-size: 1em;
`

function Error() {
    return (
        <ContainerStyle>
            <TitleStyle>Oups quelque chose s'est mal passé !</TitleStyle>
            <p>
                Clique sur trouver un héros dans le bandeau en haut pour revenir
                à l'accueil.
            </p>
            <img
                src={errorImg}
                alt="logo de find your superhero de la page d'erreur"
            />
        </ContainerStyle>
    )
}

export default Error

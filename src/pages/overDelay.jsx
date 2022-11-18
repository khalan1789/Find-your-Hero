import styled from 'styled-components'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'
import noConnexionImg from '../assests/prise.png'

const PageStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
    background-color: ${colors.primary};
    color: ${colors.textColor};
`
const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 1200px;

    color: ${colors.textColor};
    padding: 20px;
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
    max-width: 85%;
`
const ButtonToHomeStyle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border: 1px;
    border-radius: 20px;
    height: 60px;
    width: 180px;
    background-color: ${colors.secondary};
    color: ${colors.primary};
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px 2px ${colors.primary};
    }
`
const Illustration = styled.img`
    max-width: 85%;
`

function OverDelay() {
    return (
        <PageStyle>
            <ContainerStyle>
                <TitleStyle>
                    Aïe ! Il semblerait que nous ayons des problèmes pour nous
                    connecter à ce que l'on appelle la base de données...
                </TitleStyle>
                <Illustration
                    src={noConnexionImg}
                    alt="illustration de prise débranchée"
                />
                <ParagraphStyle>
                    La base de données, c'est l'endroit où l'on stocke plein
                    d'informations de toutes sortes : des noms, des images, des
                    lieux, etc. Et des bases de données pour internet, il en
                    existe des milliers et des milliers ! Quand tu lances une
                    recherche sur un superhéros, et bien on se connecte à une
                    base de données qui contient des informations à leur sujet,
                    puis on récupère les informations correspondantes à ta
                    demande pour te les afficher sur le site. Des fois, il
                    arrive tout simplement que cette connexion rencontre des
                    problèmes, ou bien que la base données en rencontre aussi et
                    ne puisse pas fonctionner.
                </ParagraphStyle>
                <ParagraphStyle>
                    Nous t'invitons à essayer de faire une autre recherche en
                    cliquant sur le bouton "Trouver un héros" ci dessous ou
                    alors en haut à droite de la page. Si jamais le problème
                    persiste, il faudra réessayer plus tard. Il se peut des fois
                    que ces problèmes de connexion soient longs et nécessitent
                    plusieurs pour être résolus.
                </ParagraphStyle>
                <ButtonToHomeStyle to="/">Trouver un héros</ButtonToHomeStyle>
            </ContainerStyle>
        </PageStyle>
    )
}

export default OverDelay

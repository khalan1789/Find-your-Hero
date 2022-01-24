import styled from 'styled-components'
import colors from '../utils/colors'
import errorImg from '../assests/gadget.jpg'
import { Link } from 'react-router-dom'

// style part
const PageStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.primary};
    color: ${colors.textColor};
`
const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 1200px;
    margin: 30px;
    background-color: ${colors.secondary};
    color: ${colors.tercary};
    padding: 20px;
`
const MainTitleStyle = styled.h1`
    margin: 30px;
    dysplay: flex;
`

const ImgStyle = styled.img`
    width: 300 px;
    height: 180px;
`

const ExplainTextStyle = styled.h3`
    color: ${colors.dark};
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
    background-color: ${colors.primary};
    color: ${colors.secondary};
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px 2px ${colors.primary};
    }
`
// function part

function DoNotFound() {
    return (
        <PageStyle>
            <ContainerStyle>
                {/* <ImgStyled src={errorImg} alt="illustration image d'erreur" /> */}
                <MainTitleStyle>
                    Aïe ! Je n'ai rien trouvé correspondant à ta recherche...
                </MainTitleStyle>
                <ImgStyle src={errorImg} alt="illustration image d'erreur" />
                <ExplainTextStyle>
                    Vérifie bien ce que tu as écrit. Il se peut aussi qu'il
                    faille écrire ta recherche différemment car ne pouvant
                    trouver que les mots en anglais il faut écrire le nom
                    anglais du personnage recherché !
                </ExplainTextStyle>
                <ExplainTextStyle>
                    Tu peux aussi écrire le début du nom, je chercherais tout ce
                    qui correspond comme "super" pour "superman" par exemple.
                    Certains mots peuvent s'écrire différemment comme par
                    exemple "spider-man" au lieu de "spiderman".
                </ExplainTextStyle>
                <ExplainTextStyle>
                    Clique sur le bouton ci-dessous pour revenir à l'accueil et
                    faire une nouvelle recherche.
                </ExplainTextStyle>
                <ButtonToHomeStyle to="/">Trouver un héros</ButtonToHomeStyle>
            </ContainerStyle>
        </PageStyle>
    )
}

export default DoNotFound

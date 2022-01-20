import styled from 'styled-components'
import colors from '../utils/colors'

// style part
const PageStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background-color: ${colors.primary};
    color: ${colors.textColor};
`
const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 450px;
    background-color: ${colors.secondary};
    color: ${colors.tercary};
`
const MainTitleStyle = styled.h1`
    margin: 30px;
`

// function part

function DoNotFound() {
    return (
        <PageStyle>
            <ContainerStyle>
                <MainTitleStyle>
                    Aïe ! Je n'ai rien trouvé correspondant à ta recherche...
                </MainTitleStyle>
                <h3>
                    Vérifie bien ce que tu as écrit. Il se peut aussi qu'il
                    faille écrire ta recherche différemment car ne pouvant
                    trouver que les mots en anglais il faut
                </h3>
            </ContainerStyle>
        </PageStyle>
    )
}

export default DoNotFound

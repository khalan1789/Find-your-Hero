import styled from 'styled-components'
import colors from '../utils/colors'
import CGU from '../assests/CGU.pdf'

// style part

const ContainerStyle = styled.div`
    background-color: ${colors.primary};
    text-color: ${colors.textColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleStyle = styled.h4`
    color: ${colors.textColor};
`

const AuthorTitle = styled.a`
    color: ${colors.secondary};
    margin-left: 4px;
`
const LegalTitle = styled.a`
    color: ${colors.textColor};
    margin-bottom: 20px;
    text-align: center;
`
//  function part

function Footer() {
    return (
        <ContainerStyle>
            <TitleStyle>
                Site réalisé par
                <AuthorTitle
                    target="blanck"
                    href="https://www.linkedin.com/in/benjamin-ducau/"
                >
                    Benjamin Ducau
                </AuthorTitle>
            </TitleStyle>
            <LegalTitle href={CGU} download={CGU}>
                Mentions légales
            </LegalTitle>
        </ContainerStyle>
    )
}

export default Footer

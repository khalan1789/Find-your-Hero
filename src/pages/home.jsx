import styled from 'styled-components'
import colors from '../utils/colors'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// Style part//

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.primary};

    color: ${colors.textColor};
    padding: 2%;
`
const H1Style = styled.h1`
    text-align: center;
    margin-bottom: 80px;
    display: flex;
`

const H2Style = styled.h2`
    margin-bottom: 80px;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    max-width: 1250px;
`
const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 25px;
`

const LabelStyle = styled.label`
    margin: 10px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 1.3rem;
`

const InputStyled = styled.input`
    padding: 8px;
    height: 25px;
    border: none;
    border: solid 1px dark;
    font-style: italic;
    font-size: 20px;
    margin-bottom: 30px;
    min-width: 250px;
    max-width: 750px;
`
const ButtonStyle = styled.button`
    margin-top: 30px;
    border: 1px;
    border-radius: 20px;
    height: 60px;
    width: 150px;
    background-color: yellow;
    color: black;
    text-align: center;
    font-size: 20px;
    align-self: center;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 5px 2px ${colors.secondary};
    }
`

const ParagraphStyle = styled.p`
    font-size: 1.1rem;
    text-align: center;
`
// Functions part //

function Home() {
    // state data
    const [textValue, setTextValue] = useState('')

    // redirection
    const navigate = useNavigate()
    const searchCharacter = (e) => {
        e.preventDefault()
        console.log(textValue)
        navigate(`/character?name=${textValue} `)
    }

    return (
        <HomeStyle>
            <H1Style>🌞 Bienvenue sur Find your SuperHero 🌞</H1Style>
            <H2Style>
                Ce site te permets de chercher des images de tes superhéros
                préférés (ou non) et d'obtenir quelques informations dessus.
                Sympa n'est-ce pas 😀🙃 !
            </H2Style>
            <FormStyle
                onSubmit={(e) => {
                    searchCharacter(e)
                }}
            >
                <LabelStyle htmlfor="characterInput">
                    Entre ici le nom (en Anglais) du superhéros que tu
                    recherches :
                </LabelStyle>
                <InputStyled
                    id="characterInput"
                    data-testid="characterInput"
                    type="text"
                    placeholder=" par exemple : batman, human torch..."
                    onChange={(e) => setTextValue(e.target.value)}
                    target={{
                        pathname: `/character?name=${textValue} `,
                    }}
                    formAction="/character?name="
                />
                <ParagraphStyle>
                    Et clique sur le bouton ci-dessous pour voir si je le trouve
                    👀
                </ParagraphStyle>
                <ButtonStyle onSubmit={(e) => searchCharacter(e)}>
                    C'est parti 🐱‍🏍
                </ButtonStyle>
            </FormStyle>
        </HomeStyle>
    )
}

export default Home

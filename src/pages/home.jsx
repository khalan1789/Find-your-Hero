import styled from 'styled-components'
import colors from '../utils/colors'
import { useState, useEffect } from 'react'

// Style part//

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.primary};
    min-height: 100vh;
    color: white;
    padding: 2%;
`
const H1Style = styled.h1`
    text-align: center;
    margin-bottom: 80px;
`

const H2Style = styled.h2`
    margin-bottom: 80px;
    margin-left: 20px;
    margin-right: 20px;
`
const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const LabelStyle = styled.label`
    margin: 10px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
`

const InputStyled = styled.input`
    padding: 8px;
    height: 25px;
    border: none;
    border: solid 1px dark;
    font-style: italic;
    font-size: 20px;
    margin-bottom: 30px;
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
`

// Functions part //

function Home() {
    const [textValue, setTextValue] = useState('')

    const searchCharacter = (e) => {
        e.preventDefault()
        console.log(textValue)
    }

    return (
        <HomeStyle>
            <H1Style>⭐Bienvenue sur Find your Hero ⭐</H1Style>
            <H2Style>
                Ce site te permets de chercher des images de tes superhéros
                préférés ou non et d'obtenir quelques informations dessus. Sympa
                n'est-ce pas 😀🙃 !
            </H2Style>
            <FormStyle>
                <LabelStyle>
                    Entre ici le nom (en Anglais) du superhéros que tu
                    recherches :
                </LabelStyle>
                <InputStyled
                    name="characterInput"
                    type="text"
                    placeholder=" par exemple : batman, human torch..."
                    onChange={(e) => setTextValue(e.target.value)}
                />
                <p>
                    Et clique sur le bouton ci-après pour voir si je le trouve
                    👀
                </p>
                <ButtonStyle onClick={(e) => searchCharacter(e)}>
                    C'est parti 👀
                </ButtonStyle>
            </FormStyle>
            {/* <ButtonStyle onClick={() => searchCharacter()}>
                C'est parti 👀
            </ButtonStyle> */}
            <p>🚲</p>
        </HomeStyle>
    )
}

export default Home

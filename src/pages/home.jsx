import styled from 'styled-components'
import colors from '../utils/colors'
import { Link } from 'react-router-dom'

//version avec useContext
// import { useContext } from 'react'
// import { SearchNameContext } from '../utils/context'

//version simple avec useState
import { useState } from 'react'

// Style part//

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.primary};
    min-height: 100vh;
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
// const ButtonStyle = styled.button`
//     margin-top: 30px;
//     border: 1px;
//     border-radius: 20px;
//     height: 60px;
//     width: 150px;
//     background-color: yellow;
//     color: black;
//     text-align: center;
//     font-size: 20px;
//     align-self: center;
// `
const ButtonLinkStyle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border: 1px;
    border-radius: 20px;
    height: 60px;
    width: 150px;
    background-color: yellow;
    color: black;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`
// Functions part //

// function fetchData(name) {
//     useEffect(() => {
//         fetch(
//             `https://superheroapi.com/api/4714210408672847/search/` + { name }
//         )
//             .then((response) => response.json())
//             .then((characterReturn) => console.log(characterReturn))
//     }, [name])
// }

function Home() {
    // const { textValue, setTextValue } = useContext(SearchNameContext)
    const [textValue, setTextValue] = useState('')

    const searchCharacter = (e) => {
        // e.preventDefault()
        console.log(textValue)
    }
    const sayHello = (e) => {
        console.log('bon ben coucou')
    }
    return (
        <HomeStyle>
            <H1Style>⭐Bienvenue sur Find your SuperHero ⭐</H1Style>
            <H2Style>
                Ce site te permets de chercher des images de tes superhéros
                préférés ou non et d'obtenir quelques informations dessus. Sympa
                n'est-ce pas 😀🙃 !
            </H2Style>
            <FormStyle to={`/character?name=${textValue}`}>
                <LabelStyle>
                    Entre ici le nom (en Anglais) du superhéros que tu
                    recherches :
                </LabelStyle>
                <InputStyled
                    name="characterInput"
                    type="text"
                    placeholder=" par exemple : batman, human torch..."
                    onChange={(e) => setTextValue(e.target.value)}
                    onSubmit={(e) => sayHello()}
                />
                <p>
                    Et clique sur le bouton ci-après pour voir si je le trouve
                    👀
                </p>
                {/* <ButtonStyle
                    onClick={(e) => searchCharacter(e)}
                    type="submit"
                    to={{
                        pathname: `/character?name=${textValue} `,
                    }}
                >
                    C'est parti 👀
                </ButtonStyle> */}
            </FormStyle>
            <ButtonLinkStyle
                to={{
                    pathname: `/character?name=${textValue}`,
                }}
                onClick={(e) => searchCharacter(e)}
            >
                C'est parti 👀
            </ButtonLinkStyle>
            <p>🚲</p>
        </HomeStyle>
    )
}

export default Home

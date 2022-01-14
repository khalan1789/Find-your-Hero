import styled from 'styled-components'

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: purple;
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
`

function Home() {
    return (
        <HomeStyle>
            <H1Style>⭐Bienvenue sur Find your Hero ⭐</H1Style>
            <H2Style>
                Ce site te permets de chercher des images de tes superhéros
                préférés ou non et d'obtenir quelques informations dessus. Sympa
                n'est-ce pas 😀🙃 !
            </H2Style>
            <FormStyle>
                <LabelStyle for="search">
                    Entre ici le nom (en Anglais) du superhéros que tu recherche
                    :
                </LabelStyle>
                <input placeholder="par exemple : batman, human torch..." />
                <button> Rechercher</button>
            </FormStyle>
            <p>🚲</p>
        </HomeStyle>
    )
}

export default Home

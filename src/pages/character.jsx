import styled from 'styled-components'
import { useEffect, useState } from 'react'
import colors from '../utils/colors'
import Card from '../components/Card'
import DoNotFound from '../components/DoNotFound'
import Loading from '../components/Loading'

// Style part //

const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding-bottom: 30px;
    background-color: ${colors.primary};
    color: ${colors.textColor};
`
const MainTitleStyle = styled.h1`
    text-align: center;
    padding: 5px;
`
const ParagraphStyle = styled.p`
    font-style: italic;
`

const UlStyled = styled.ul`
    display: flex;
    width: 85%;
    justify-content: center;
    flex-wrap: wrap;
`

// Functions part //

function Character() {
    // to find user input value
    const UrlParams = new URLSearchParams(window.location.search)
    const characterName = UrlParams.get('name')
    const apiKey = process.env.REACT_APP_ApiKey

    // states for datas
    const [character, setCharacter] = useState([])
    const [characterError, setCharacterError] = useState(false)
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://superheroapi.com/api.php/${apiKey}/search/${characterName}`
        )
            .then((response) => response.json())
            .then((characterReturned) =>
                characterReturned.error
                    ? (setCharacterError(true),
                      console.log('erreur : personnage non trouvé'))
                    : setCharacter(characterReturned.results)
            )
            .then(() => setIsLoading(false))
    }, [characterName, apiKey])

    return loading ? (
        <Loading />
    ) : characterError === true ? (
        <DoNotFound />
    ) : (
        <ContainerStyle>
            <MainTitleStyle>
                Voici ce que j'ai trouvé pour : " {characterName} "
            </MainTitleStyle>
            <ParagraphStyle>
                Pour revenir à l'accueil et faire une nouvelle recherche clique
                sur "Trouver un héros" en haut dans le bandeau
            </ParagraphStyle>
            <UlStyled>
                {character.map(({ name, image, id, biography, appearance }) => {
                    return (
                        <Card
                            key={`${name}-${id}`}
                            name={name}
                            image={image.url}
                            alt={`photo de ${name}`}
                            race={appearance.race}
                            publisher={biography.publisher}
                            alignment={biography.alignment}
                        ></Card>
                    )
                })}
            </UlStyled>
        </ContainerStyle>
    )
}

export default Character

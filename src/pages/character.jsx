import styled from 'styled-components'
import { useEffect, useState } from 'react'
// import { SearchNameContext } from '../utils/context'

// Style part //

const ContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    background-color: pink;
`
// Functions part //

function Character() {
    // const { textValue } = useContext(SearchNameContext)
    const UrlParams = new URLSearchParams(window.location.search)
    const characterName = UrlParams.get('name')
    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(
            `https://superheroapi.com/api.php/4714210408672847/search/${characterName}`
        )
            .then((response) => response.json())
            .then(
                (characterReturned) =>
                    characterReturned.error
                        ? console.log('erreur de perso')
                        : setCharacter(characterReturned.results)
                // : character.results.map(({ name, image, id }, index) => {
                //       return (
                //           console.log('name ' + name),
                //           console.log('image ' + image.url),
                //           console.log('id ' + id)
                //       )
                //   })
            )
    }, [characterName])

    // console.log(character.name)

    return (
        <ContainerStyle>
            <h1>Voici ce que j'ai trouvé pour {characterName}</h1>
            <ul>
                Valeur :
                {character.map(({ name, image, id }, index) => {
                    return (
                        <div key={`${name}-${index}`}>
                            <h3>{name}</h3>
                            <img src={image.url} alt={`photo de ${name}`} />
                            <p>{id}</p>
                        </div>
                    )
                })}
            </ul>
        </ContainerStyle>
    )
}

export default Character

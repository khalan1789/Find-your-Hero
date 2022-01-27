import styled from 'styled-components'
import colors from '../utils/colors'

const CardStyle = styled.div`
    background-color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    box-shadow: 0px 0px 6px 2px ${colors.secondary};
    color: ${colors.primary};
    text-align: center;
    margin: 5px;
    max-width: 350px;
    min-width: 300px;
    @media all and (max-width: 600px) {
        margin-left: 0;
    }
`

const CardImg = styled.img`
    width: 300px;
    height: 400px;
`

function Card({ name, image, id, publisher, alignment, race }) {
    function raceValue(race) {
        // return race.value === 'null' ? (
        //     <p>Race non renseignée</p>
        // ) : (
        //     <p>Race : {race}</p>
        // )
        if (race === 'null') {
            return 'Race non renseignée'
        }
        return race
    }
    return alignment === 'good' ? (
        race === 'null' ? (
            <CardStyle key={`${name}-${id}`}>
                <h3>{name}</h3>
                <CardImg src={image} alt={`photo de ${name}`} />
                <p>Studios : {publisher}</p>
                Race : non communiquée
                <p>Fait partie des gentils</p>
            </CardStyle>
        ) : (
            <CardStyle key={`${name}-${id}`}>
                <h3>{name}</h3>
                <CardImg src={image} alt={`photo de ${name}`} />
                <p>Studios : {publisher}</p>
                Race : {race}
                <p>Fait partie des gentils</p>
            </CardStyle>
        )
    ) : race === 'null' ? (
        <CardStyle key={`${name}-${id}`}>
            <h3>{name}</h3>
            <CardImg src={image} alt={`photo de ${name}`} />
            <p>Studios : {publisher}</p>
            Race : non communiquée
            <p>Fait partie des gentils</p>
        </CardStyle>
    ) : (
        <CardStyle key={`${name}-${id}`}>
            <h3>{name}</h3>
            <CardImg src={image} alt={`photo de ${name}`} />
            <p>Studios : {publisher}</p>
            Race : {race}
            <p>Fait partie des méchants</p>
        </CardStyle>
    )
}

export default Card

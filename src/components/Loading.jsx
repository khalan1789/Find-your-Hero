import styled from 'styled-components'
import { Loader } from '../utils/Loader'
import colors from '../utils/colors'

// style part
const ContainerStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.primary};
`
const TitleStyle = styled.h1`
    color: ${colors.secondary};
    font-style: italic;
`
// function part
function Loading() {
    return (
        <ContainerStyle>
            <TitleStyle>Chargement</TitleStyle>
            <Loader></Loader>
        </ContainerStyle>
    )
}

export default Loading

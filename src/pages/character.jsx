import styled from 'styled-components'

const ContainerStyle = styled.div`
    width: 100vh;
    background-color: pink;
`

function Character() {
    return (
        <ContainerStyle>
            <h1>Page character !!!</h1>
            <p>Ok router</p>
        </ContainerStyle>
    )
}

export default Character

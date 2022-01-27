import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import fysLogo from '../assests/logo_small_black_white.png'
// import fysLogo from '../assests/logo_small_icon.png'
import fysLogo from '../assests/logo_complet.png'
import colors from '../utils/colors'

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${colors.secondary};
    @media all and (max-width: 600px) {
        flex-direction: column;
    }
`
const MainLogo = styled.img`
    height: 60px;
    margin-left: 20px;
`

const LinkWrapper = styled.div`
    display: flex;
    margin-right: 20px;
    @media all and (max-width: 600px) {
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
        height: 130px;
    }
`

const LinkStyle = styled(Link)`
    margin: auto 20px;
    color: ${colors.primary};
    font-weight: bold;
    &:hover {
        transform: scale(1.2);
    }
    @media all and (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px ${colors.primary};
        padding: 5px;
        border-radius: 20px;
        height: 30px;
        width: 200px;
        background-color:${colors.primary};
        color:${colors.secondary};
`

function Header() {
    return (
        <NavStyle>
            <a href="/">
                <MainLogo src={fysLogo} alt="logo de Find your Superhero" />
            </a>
            <LinkWrapper>
                <LinkStyle to="/about">À propos du site</LinkStyle>
                <LinkStyle to="/">Trouver un héros</LinkStyle>
            </LinkWrapper>
        </NavStyle>
    )
}

export default Header

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
`
const MainLogo = styled.img`
    height: 60px;
    margin-left: 20px;
`

const LinkWrapper = styled.div`
    display: flex;
    margin-right: 20px;
`

const LinkStyle = styled(Link)`
    margin: auto 20px;
    color: ${colors.primary};
    font-weight: bold;
    &:hover {
        transform: scale(1.2);
    }
`

function Header() {
    return (
        <NavStyle>
            <a href="/">
                <MainLogo src={fysLogo} alt="logo de Find your Superhero" />
            </a>
            <LinkWrapper>
                <LinkStyle to="/">Trouver un héros</LinkStyle>
            </LinkWrapper>
        </NavStyle>
    )
}

export default Header

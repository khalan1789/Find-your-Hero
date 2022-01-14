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

const LinkStyle = styled.a`
    margin: auto 20px;
    color: ${colors.primary};
    font-weight: bold;
`
// function Header () {
//     return (
//         <NavStyle>
//             <Link>
//             <img src={fysLogo} alt="logo de Find your Superhero"/>
//             </Link>
//             <div>
//             <LinksDiv to="/">
//             Trouver le héros
//             </LinksDiv>
//             </div>
//         </NavStyle>
//     )
// }

function Header() {
    return (
        <NavStyle>
            <a href="/">
                <MainLogo src={fysLogo} alt="logo de Find your Superhero" />
            </a>
            <LinkWrapper>
                <LinkStyle href="/">Voir des exemples</LinkStyle>
                <LinkStyle href="/">Trouver le héros</LinkStyle>
            </LinkWrapper>
        </NavStyle>
    )
}

export default Header

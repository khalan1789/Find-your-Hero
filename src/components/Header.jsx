import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import fysLogo from '../assests/logo_small_black_white.png'
// import fysLogo from '../assests/logo_small_icon.png'
import fysLogo from '../assests/logo_complet.png'

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ddf91a;
`

const LinksDiv = styled.div`
    display: flex;
`
const MainLogo = styled.img`
    height: 60px;
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
            <LinksDiv>
                <a href="/">Trouver le héros</a>
                <a href="/">Trouver le héros</a>
            </LinksDiv>
        </NavStyle>
    )
}

export default Header

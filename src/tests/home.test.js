import Home from '../pages/home'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

// vérification des fonctions du formulaire
describe('Form section functionalities', () => {
    it('should have a placeholder', async () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const inputPlaceHolder = screen.getByPlaceholderText(
            'par exemple : batman, human torch...'
        )
        expect(inputPlaceHolder).toBeInTheDocument()
    })

    it('should have an input', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const inputElement = screen.getByTestId('characterInput')
        expect(inputElement).toBeInTheDocument()
    })

    it('on changing input value', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        const newInputValue = 'al Capone'
        userEvent.type(screen.getByTestId('characterInput'), newInputValue)
        expect(screen.getByTestId('characterInput')).toHaveValue(newInputValue)
    })

    // à faire ici test du bouton

    // à faire ici test du submit du form
})

// test pour vérifier l'input
// it('Should take the input change', () => {
//     expect(Home.toContain(h1))
// })

// test pour vérifier que le bouton soumet bien l'input

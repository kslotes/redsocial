import {render, screen} from '@testing-library/react'
import Login from './Login'
describe('Test para Login', () => {
      test('It must have text: Iniciar Sesion', () =>{
            render(<Login/>)
            const expected = screen.queryByText(/Iniciar Sesión/i);
            expect(expected).toBeInTheDocument();
      })

})
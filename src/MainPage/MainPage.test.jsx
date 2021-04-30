import React from 'react';
import {render, screen} from '@testing-library/react'
import MainPage from './MainPage';

describe('Tests para Main Page', () => {
      test('must return hola', () => {
            render(<MainPage/>)
            expect(screen.queryByText(/hola/i)).toBeInTheDocument();
      })
      
})
import React from 'react';
import {render, screen} from '@testing-library/react'
import MainPage from './MainPage';

describe('Tests para Main Page', () => {
      test('must return an element', () => {
            render(<MainPage/>)
            expect(true).toBe(true);
      })
      
})
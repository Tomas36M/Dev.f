import React from "react";
import { render, screen } from '@testing-library/react';
import { MainPage } from '../components/mainPage.js';

// escope global en nuestro test, para que me haga el render antes de cada uno(que no se duplique el render)
beforeEach(()=> render(<MainPage />))


// El refactor puede ser aplicado tanto en el codigo de test, asi como en el codigo de la implementacion.
describe('Quotes List', () => {
    //nos devuelve un call back
    it('must display 3 quotes', async () => {
        expect(await screen.findAllByRole("listitem")).toHaveLength(3);
    })
});



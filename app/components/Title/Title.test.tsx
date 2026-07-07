import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Title from './index';

test('renders the title component with the correct title', async () => {
    const titulo = "Título";

    render(<Title title={titulo} />);

    const elemento = await screen.findByText(titulo);

    expect(elemento).toBeInTheDocument();
});
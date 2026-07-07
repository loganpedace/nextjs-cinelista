import "@testing-library/jest-dom";
import { getTrendingMovies } from "./../lib/api/tmdb";
import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("./../lib/api/tmdb", () => ({
    getTrendingMovies: jest.fn(),
}));

test("Exibe o titulo 'Filmes em destaque' na página inicial corretamente", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);

    const titulo = "Filmes em destaque";

    render(await Home());

    expect(screen.getByText(titulo)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente na página inicial", async () => {

    (getTrendingMovies as jest.Mock).mockResolvedValue([
        {
            id: 1,
            title: "Filme 1",
            overview: "Resumo do Filme 1",
            poster_path: "/filme1.jpg",
            vote_average: 8.5,
        }
    ]);

    render(await Home());
    expect(await screen.findByText("Filme 1")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes em destaque", async () => {
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);
    
    render(await Home());

    expect(screen.getByText("Nenhum filme em destaque no momento.")).toBeInTheDocument();
})
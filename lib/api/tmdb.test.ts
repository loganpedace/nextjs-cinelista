import { getTrendingMovies } from "./tmdb";
import tmdbApi from "./axios";

jest.mock("./axios");

test("should return trending movies", async () => {
    // Arrange
    const mockResults = [{id: 1, title: "Matrix"}];
    (tmdbApi.get as jest.Mock).mockResolvedValue({
        data: {results: mockResults}});

    // Act
    const movies = await getTrendingMovies();
    // Assert
    expect(movies).toEqual(mockResults);
})
import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getPopularMovies } from "@/lib/api/tmdb";

export const revalidate = 60;

const FilmesPopulares = async () => {
  const filmes = await getPopularMovies();
  return (
    <>
      <Title title="Populares" />
      <Grid filmes={filmes.results}></Grid>
    </>
  );
};
export default FilmesPopulares;

import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTopRatedMovies } from "@/lib/api/tmdb";

export const dynamic = "force-static";

const TopFilmes = async () => {
  const filmes = await getTopRatedMovies();
  return (
    <>
      <Title title="Top Filmes" />
      <Grid filmes={filmes.results}></Grid>
    </>
  );
};
export default TopFilmes;

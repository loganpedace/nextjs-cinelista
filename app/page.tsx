import Title from "./components/Title";
import Grid from "./components/Grid";
import { getTrendingMovies } from "@/lib/api/tmdb";

export default async function Home() {
  const filmes = await getTrendingMovies();
  return (
    <>
      <Title title="Filmes em destaque" />
      {
        filmes && filmes.length > 0 ? (
          <Grid filmes={filmes} />
        ) : (
          <p>Nenhum filme em destaque no momento.</p>
        )
      }
    </>
  );
}

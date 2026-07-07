import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { useResumoFilme } from "@/app/hooks/useResumoFilme";

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  const { id, title, poster_path, overview } = filme;
  
  const resume = useResumoFilme(overview, 256);

  return (
    <div className={styles.card} key={id}>
      <Link href={`/filmes/${id}`}>
        <Image
          className={styles.__cardImage}
          src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
          alt={`Poster do filme ${title}`}
          width={300}
          height={200}
        />
        <div className={styles.__cardContent}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.description}>{resume}</span>
          <p className={styles.description}>
            Nota: {filme.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Card;

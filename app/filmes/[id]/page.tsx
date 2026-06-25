import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './DetalheFilme.module.css'
import { getMoviesDetails } from "@/lib/api/tmdb";

type Props = {
    params: {
        id: string
    }
}

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params;
    const details = await getMoviesDetails(Number(id));

    if (!details)
        return notFound();

    return {
        title: `${details.title} | CineLista`,
        description: details.overview,
        openGraph: {
            title: `${details.title} | CineLista`,
            description: details.overview,
            images: [{url: `${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`}],
        }
    };
};

const DetalheFilme = async ({ params }: Props) => {
    const { id } = await params;
    const details = await getMoviesDetails(Number(id));

    if (!details)
        return notFound();

    const { title, poster_path, overview } = details;

    return(
        <>
            <div className={styles.detalhes}>
                <div className={styles.detalhes__container}>
                    <Link className={styles.detalhes__voltar} href="/">Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image} 
                            src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} 
                            alt={`Poster do filme: ${details?.title}`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{title}</h2>
                            <p>{overview}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalheFilme;
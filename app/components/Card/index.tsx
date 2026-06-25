import { Filme } from '@/types/types'
import styles from './Card.module.css'
import Link from 'next/link'

type Props = {
    filme : Filme
}

const Card = ({filme} : Props) => {
    const {id, title, poster_path, overview} = filme;
    const resume = overview.length >= 256 ? `${overview?.substring(0, 253)}...` : overview;
    return(
        <div className={styles.card} key={id}>
            <Link href={`/filmes/${id}`}>
                <img className={styles.__cardImage} 
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`} 
                alt={`Poster do filme ${title}`} width={300} height={200}/>
                <div className={styles.__cardContent}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.description}>{resume}</span>
                    <p className={styles.description}>Nota: {filme.vote_average.toFixed(1)}</p>
                </div>
            </Link>
        </div>
    )
}
export default Card;
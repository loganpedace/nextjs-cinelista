import { Filme } from '@/types/types'
import styles from './Card.module.css'

type Props = {
    filme : Filme
}

const Card = ({filme} : Props) => {
    const {id, title, image, description} = filme;
    return(
        <div className={styles.card} key={id}>
            <img className={styles.__cardImage} src={filme.image} alt={`Poster do filme ${title}`} width={300} height={200}/>
            <div className={styles.__cardContent}>
                <h3 className={styles.title}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}
export default Card;
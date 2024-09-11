import styles from '../styles/components/Card.module.css'

function Card({ tag = "", title = "", description = "", pfp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", assigned = "", start = "", end = "" }) {
    return (
        <div className={styles.card}>
            <div className={styles.card__tag}>
                {tag}
            </div>

            <div className={styles.card__header}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.card__assigned}>
                <img src={pfp} alt="Assigned's profile photo" />
                <div className={styles.card__assigned__info}>
                    {assigned}
                </div>
            </div>
        </div>
    )
}

export default Card
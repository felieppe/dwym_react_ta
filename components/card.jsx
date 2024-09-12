import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/components/Card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({ tag = "", title = "", description = "", pfp = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png", assigned = "", start = undefined, end = undefined }) {    
    function calculateTimeLeft() {
        let diff = (end - start) / 1000
        if (diff === NaN) return "N/A"
        
        if (diff < 60) {
            return `${diff} seconds`;
        } else if (diff < 3600) {
            const minutes = Math.floor(diff / 60);
            return `${minutes} minutes`;
        } else if (diff < 86400) {
            const hours = Math.floor(diff / 3600);
            return `${hours} hours`;
        } else if (diff < 2592000) {
            const days = Math.floor(diff / 86400);
            return `${days} days`;
        } else if (diff < 31536000) {
            const months = Math.floor(diff / 2592000);
            return `${months} months`;
        } else {
            const years = Math.floor(diff / 31536000);
            return `${years} years`;
        }
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.card__top}>
                <div className={styles.card__tag}>
                    {tag}
                </div>

                {start && end ? <div className={styles.card__date}>
                    <FontAwesomeIcon icon={faCalendar} />
                    <p>Expires in {calculateTimeLeft()}</p>
                </div> : null}
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
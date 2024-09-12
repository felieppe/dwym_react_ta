import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Card from '@/components/card'

function Home() {
    const [cardInfo, setCardInfo] = useState({tag: "", title: "", description: "", assigned: "", start: undefined, end: undefined })
    const placeholderInfo = {tag: "TAG", title: "Insert Title Here", description: "Description", assigned: "John Doe"}
    const today = new Date().toISOString().split('T')[0]

    const handleTagChange = (t) => {
        setCardInfo(prev => ({
            ...prev, tag: t
        }))
    }
    const handleTitleChange = (t) => {
        setCardInfo(prev => ({
            ...prev, title: t
        }))
    }
    const handleDescriptionChange = (d) => {
        setCardInfo(prev => ({
            ...prev, description: d
        }))
    }
    const handleAssignedChange = (a) => {
        setCardInfo(prev => ({
            ...prev, assigned: a
        }))
    }
    const handleStartChange = (s) => {
        setCardInfo(prev => ({
            ...prev, start: new Date(s)
        }))
    }
    const handleEndChange = (e) => {
        setCardInfo(prev => ({
            ...prev, end: new Date(e)
        }))
    }

    return (
        <>
            <div className={styles.home}>
                <form className={styles.home__form}>
                    <div className={styles.form__element}>
                        <label htmlFor="tag">TAG</label> <br />
                        <select name="tag" id="tag" value={cardInfo.tag} onChange={(e) => handleTagChange(e.target.value)} required>
                            <option value="">Select an option</option>
                            <option value="asap">As Soon As Possible</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="Low">Low</option>
                        </select><br/>
                    </div>

                    <div className={styles.form__element}>
                        <label htmlFor="title">Title</label> <br />
                        <input type="text" name="title" id="title" placeholder={placeholderInfo.title} value={cardInfo.title} onChange={(e) => handleTitleChange(e.target.value)} required/> <br />
                    </div>

                    <div className={styles.form__element}>
                        <label htmlFor="description">Description</label> <br />
                        <textarea type="text" name="description" id="description" placeholder={placeholderInfo.description} value={cardInfo.description} onChange={(e) => handleDescriptionChange(e.target.value)} required/> <br />
                    </div>

                    <div className={styles.form__element}>
                        <label htmlFor="assigned">Assigned</label> <br />
                        <input type="text" name="assigned" id="assigned" placeholder={placeholderInfo.assigned} value={cardInfo.assigned} onChange={(e) => handleAssignedChange(e.target.value)} required/> <br />
                    </div>

                    <div className={styles.form__group}>
                        <div>
                            <label htmlFor="start">Start</label> <br />
                            <input type="date" name="start" id="start" min={today} onChange={(e) => handleStartChange(e.target.value)} required/> <br />
                        </div>

                        <div>
                            <label htmlFor="end">End</label> <br />
                            <input type="date" name="end" id="end" min={today} onChange={(e) => handleEndChange(e.target.value)} required/> <br />
                        </div>
                    </div>

                    <div className={styles.form__submit}>
                        <input type='submit' value="Save" />
                    </div>
                </form>

                <div className={styles.home__separator} />

                <div className={styles.home__result}>
                    <Card tag={cardInfo.tag == "" ? placeholderInfo.tag : cardInfo.tag.toUpperCase()} title={cardInfo.title == "" ? placeholderInfo.title : cardInfo.title} description={cardInfo.description == "" ? placeholderInfo.description : cardInfo.description} assigned={cardInfo.assigned == "" ? placeholderInfo.assigned : cardInfo.assigned} start={cardInfo.start} end={cardInfo.end} />
                </div>
            </div>
        </>
    )
}

export default Home
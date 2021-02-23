import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/helderam.png" alt="Helder">
            </img>
            <div>
                <strong> Helder</strong>
                <p>
                    <img src="icons/level.svg" alt="level">
                        
                    </img>
                    Level 1
                    </p>
            </div>
        </div>
    )
}
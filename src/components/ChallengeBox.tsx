import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';

export function ChallengeBox() {


    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    const { resetCountDown } = useContext(CountDownContext);

    function handlwChallengeSucceeded() {
        completeChallenge();
        resetCountDown();
    }

    function handlwChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }


    return (
        <div className={styles.challengeBoxContainer}>

            { activeChallenge && (
                <div className={styles.challengeActive}>
                    <header> Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            className={styles.challengeFailedButton}
                            onClick={handlwChallengeFailed}
                        >
                            Falhei
                    </button>
                        <button
                            className={styles.challengeSucceededButton}
                            onClick={handlwChallengeSucceeded}>
                            Completei
                    </button>

                    </footer>
                </div>
            )}

            { !activeChallenge && (
                <div className={styles.challengeNotActive}>
                    <strong> Finalize um cicle para recerber desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                            Avance de level completando desafios
                        </p>
                </div>
            )}

        </div>
    )
}
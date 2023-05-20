import { FormEvent, useState } from 'react';
import styles from '../styles/components/LoginUp.module.css';
import axios from 'axios';


export function LoginUp() {
  const [email, setEmail] = useState('');


  function handleSignUpToNewsLetter(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/subscribe', { email });
  }


  return (
    <div className={styles.container}>
      <div className={styles.cards}>

        <div className={styles.card}>
          <div>
            <h1>Faça seu login na plataforma</h1>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo-full.svg" alt=""/>
          </div>
            <h2>Bem-Vindo</h2>

          <div className={styles.icones}>
            <img src="Github.png" alt="icone github"/>

            <p>Faça login com seu Github</p>
          </div>

          <div>
            <form 
              action="" 
              onSubmit={handleSignUpToNewsLetter} 
              className={styles.form}>
              <input 
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button type="submit">
                <img src="/Arrow.png" alt=""/>
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}
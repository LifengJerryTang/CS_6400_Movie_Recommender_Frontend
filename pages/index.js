import Head from 'next/head';
import Image from 'next/image';
import MySQL from './components/MySQL';
import MySQLUser from './components/MySQLUser';
import Milvus from './components/Milvus';
import MilvusUser from './components/MilvusUser';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to G10's Movie Recommender!
        </h1>
        
        <br />
        <p className={styles.description}>
          Use this web app to compare the performances of different databases
        </p>

        <div className={styles.row}>
          <div className={styles.column}>
            <MySQL/>
          </div>
          <div className={styles.column}>
            <Milvus/>
          </div> 
        </div>
        <div className={styles.row}> 
          <div className={styles.column}>
            <MySQLUser/>
          </div>
          <div className={styles.column}>
            <MilvusUser/>
          </div>
        </div> 
      
        <div className={styles.grid}>
          <a href="https://www.mysql.com/" className={styles.card}>
            <h2>MySQL &rarr;</h2>
            <p>Learn more about MySQL</p>
          </a>

          <a href="https://milvus.io/" className={styles.card}>
            <h2>Milvus &rarr;</h2>
            <p>Learn more about Milvus database</p>
          </a>

          <a
            href="https://github.com/facebookresearch/faiss/wiki" 
            className={styles.card}
          >
            <h2>Faiss &rarr;</h2>
            <p>Learn more about Faiss</p>
          </a>

          <a
            href="https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset"
            className={styles.card}
          >
            <h2>The Movie Dataset&rarr;</h2>
            <p>
              Link to the movie dataset
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Group Member: Lu, Jiecheng; Meng, Guanchen; Tang, Lifeng
      </footer>
    </div>
  )
}

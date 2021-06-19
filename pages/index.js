import Head from 'next/head';
import Image from 'next/image';
import layoutStyles from '../styles/Layout.module.css';

export default function Home() {
  return (
    /*     <div className={layoutStyles.container}> */
    <div className={layoutStyles.bgWrap}>
      <Image
        src='/homepage.jpg'
        alt='homepage picture'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority='true'
      />
      {/*         TEXTYTEXTYTEXTY
      </div> */}
    </div>
  );
}

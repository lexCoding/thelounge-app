import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Loader from '../components/Loader';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      {/* <Loader show />
        <Link prefetch={false} href={{
          pathname: '/[username]',
          query: {username: 'lex27'},
        }}>
          <a>Lex Profile</a>
          </Link> */}

          <button onClick={() => toast.success('Successfully Logged in')}>
            Toast me
          </button>
    </div>
  );
}

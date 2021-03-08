import React, { useState, useEffect } from 'react'
import Header from './Header'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Layout({ children }) {

  const router = useRouter()
  const [search, setSearch] = useState('');

  useEffect( () => {
    if( search !== '' ) {
      router.push(`/items?q=${ search }`);
    }
  }, [search]);

  return (
    <>
      <Header setSearch={ setSearch } />
      <div className="base__container">
        <main> 
          { children }
        </main>
      </div>
    </>
  )

}

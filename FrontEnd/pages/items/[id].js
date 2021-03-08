import Head from 'next/head'

import BreadCrumb from "../../components/shared/BreadCrumb"
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import { getProduct } from '../../lib/products'

export default function ItemById({ product, author }) {
  return (
    <Layout>
      { product && ( 
        <>
          <Head>
            <title> { product.title } </title>
            <meta name="author" content={ `${author.name} ${author.lastname}` } />
            <meta property="og:image" content={ product.picture } />
            <meta property="og:title" content={ product.title.substr(0, 60) } />
            <meta property="og:type" content="product" />
            <meta property="og:description" content={ product.description.substr(0, 200) } />
            <meta property="og:site_name" content="Mercado Libre" />
            <meta property="og:url" content={`${ process.env.URL_MELI_APP}/items/${ product.id }`}></meta>
          </Head>
          <BreadCrumb items={[]} />
          <ProductDetail product={ product } />
        </>
      )}
      
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { item, author } = await getProduct(params.id);
  return {
    props: {
      product: item,
      author
    }
  }
}
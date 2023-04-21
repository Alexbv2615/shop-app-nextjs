import Head from 'next/head'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import style from '@/styles/Home.module.css'
import Layout from '@/components/layout';
import { getLatestItems } from '@/services/itemService';
import Product from '@/components/product';
import styleProduct from "../styles/Product.module.css";


// const inter = Inter({ subsets: ['latin'] })

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop teh Summer 2022 Colletion</h2>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs='item' />
          ))}
      </div>
    </Layout>
  )
};

export async function getStaticProps(){
  const res = await getLatestItems();

  return {
    props:{
      items: res,
    }
  };
};

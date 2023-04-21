import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import styleItems from "../../styles/Product.module.css";
import Image from "next/image";

export default function Index({ items }) {
    return (
        <Layout title="Store">
            <h1>Store</h1>
            <div className={styleItems.items}>
            {
                items && items.map(item => 
                    <Product item={item} showAs="Default" key={item.id} />
                )
            }
            </div>
            
        </Layout>
    )

};

export async function getStaticProps(){
    const res = await getItems();

    return {
        props:{
            items: res,
        },
    };
};
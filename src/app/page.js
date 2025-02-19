import ProductsList from "@/components/ProductsList";
import styles from "./page.module.css";
const  Home = async() => {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
<ProductsList/>
      </main>
   
    </div>
  );
}

export default Home

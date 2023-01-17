import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Nav from "../components/nav";
import Form from "../components/form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta
          name="description"
          content="Hemsida för bröllop mellan Emma och Peter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.textBlubb}>
          <h1>Hej!</h1>
          <p>
            Om du hittat hit får vi anta att du blivit inbjuden till bröllopet
            mellan Emma Hansson & Peter Hogen. Här kommer du och ditt eventuella
            sällskap kunna OSA och hitta all relevant information
          </p>
        </div>
        <div className={styles.textOSA}>
          <h2>OSA till bröllopet</h2>
          <p>
            Fyll i dina uppgifter för de som inbjudan är addreserad till. Man
            kan bara lägga till en person åt gången.
          </p>
        </div>
        <Form />
        <p className={styles.contactUs}>
          Så du vet- om du har någon fråga eller av någon anledning inte känner
          för att skicka in ditt svar kan du maila carlpeterhogen@gmail.com
          eller ring 0768468706
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

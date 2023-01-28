import Head from "next/head";
import styles from "../styles/Home.module.sass";
import Nav from "../components/nav";
import Form from "../components/form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emma och Peter</title>
        <meta
          name="description"
          content="Hemsida för bröllop mellan Emma och Peter"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.textBlubb}>
          <h1>Hej!</h1>
          <p>
            Om du hittat hit får vi anta att du blivit inbjuden till bröllopet
            mellan Emma Hansson & Peter Hogen. Här kan du/ni OSA och hitta all
            relevant information gällande bröllopet.
          </p>
        </div>
        <div className={styles.textOSA}>
          <h2>OSA till bröllopet</h2>
          <p>
            Formuläret nedan gäller för en person. Så är ni flera på inbjudan
            får ni skicka ett svar till.
          </p>
        </div>
        <Form />
        <p className={styles.contactUs}>
          Om du har någon fråga eller av någon anledning inte känner för att
          skicka in ditt svar i formulätet kan du maila{" "}
          <a href="mailto:emmaochpeter2023@gmail.com">
            emmaochpeter2023@gmail.com
          </a>{" "}
          eller ringa <a href="tel:0768468706">076-846 87 06</a> (Peter) eller{" "}
          <a href="tel:0707468548">070-746 85 48</a> (Emma)
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

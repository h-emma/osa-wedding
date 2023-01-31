import Head from "next/head";
import styles from "../styles/Info.module.sass";
import Nav from "../components/nav";
import Image from "next/image";

export default function Info() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emma och Peter</title>
        <meta name="description" content="Information för bröllopet" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <main className={styles.main}>
        <div className={styles.infoBlubb}>
          <h1>Information</h1>
        </div>
        <div className={styles.infoAndFlowerContainer}>
          <div className={styles.infoBox}>
            <h2>Vad kul att gå på bröllop!</h2>
            <p>
              Vi gifter oss <b>17/6-2023 i Göteborgs rådhus.</b> Det ligger på
              Gustaf Adolfs Torg precis vid Brunnsparken.{" "}
              <b>Vi samlas där 14:10 för att gratta oss som nygifta.</b>{" "}
              Därefter sker gemensam transport till festlokalen.{" "}
            </p>
            <h3>Festen</h3>
            <p>
              Festen kommer att hållas på övre kaserngården, som ligger på gamla
              anrika LV6, Kviberg. Det finns goda kommunikationsmöjligheter med
              både spårvagn- och busshållplatser när hemgång nalkas. Det är även
              lätt att få dit en taxi om man nu känner för det.
            </p>
            <h3>Bo</h3>
            <p>
              För långväga gäster eller ni som vill festa till det lite finns
              det många möjligheter till hotell.{" "}
              <b>
                Under fredagen den 16/6 är det dock ett gäng hårdrockare i stan
                och det kan bli lite svårare och dyrare att hitta hotell.
              </b>{" "}
              Vill man bo 200 meter från festlokalen finns{" "}
              <b>Kviberg Park Hotell & Conference</b>. Skidtunnel finns i direkt
              anslutning till hotellet (100 meter kortare än den i Torsby så
              egentligen är den inget att ha). För lite mer flärdfulla
              alternativ finns alla typer av möjligheter inne i city.
            </p>
            <h3>Presenter</h3>
            <p>
              Den största gåvan skulle vara att ni kom till vårt bröllop, men om
              man absolut vill ge något skulle vi uppskatta ett bidrag till vår
              bröllopsresa eller en gåva från hjärtat.
            </p>
            <h3>Barn</h3>
            <p>
              Vi älskar barn. Men vi tänke unna oss en kväll utan de små liven.
              Men vi vill hellre att ni kommer än stannar hemma om ni inte
              hittar barnvakt. Hör av er så kan vi hitta en lösning.
            </p>
            <h3>Toastpar / Tal</h3>
            <p>
              Big bosses på middagen är makarna Elinor och Markus Vestergaard.
              Om man vill hålla tal eller göra något annat kul kontaktar man
              dem. För allas skull kan man inte anmäla spontana tal så se till
              att anmäla innan 1/6-2023. Projektor finns att använda.
            </p>
            <h3>Elinor Vestergaard: </h3>
            <p>
              <a href="tel:0723124232">072-312 42 32</a>
            </p>
            <h3>Markus Vestergaard: </h3>
            <p>
              <a href="tel:0768958977">076-895 89 77</a>
            </p>
            <h3>Eller på mail: </h3>
            <a href="mailto:emmaochpeterstoastmasters@gmail.com">
              emmaochpeterstoastmasters@gmail.com
            </a>
          </div>
          <div className={styles.flowerBox}>
            <Image
              src="/image/flower.svg"
              alt="blomma, ljung"
              width={216}
              height={928}
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

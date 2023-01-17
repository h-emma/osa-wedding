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
              Vi gifter oss <b>17/6-21 på Göteborgs stadshus.</b> Det ligger på
              Gustaf Adolfs Torg precis vid Brunnsparken.{" "}
              <b>Vi samlas där 14:00 för vigsel.</b> Därefter sker gemensam
              transport till festlokalen.{" "}
            </p>
            <h3>Festen</h3>
            <p>
              Festen kommer att hållas på Kvibers Kaserner som är direkt lokerat
              på anrika LV6. Det finns goda kommunikationsmöjligheter med både
              spårvagn- och busshållplatser när hemgång nalkas. Det är även lätt
              att få dit en taxi om man nu känner för det.
            </p>
            <h3>Bo</h3>
            <p>
              För långväga gäster eller ni som vill festa till det lite finns
              det massa möjligheter till hotell. Om man vill bo 200 meter från
              festlokalen finns <b>Kviberg Park Hotell & Conference</b>.
              Skidtunnel finns i direkt anslutning till hotellet (100 meter
              kortare än Torsby så egentligen är den inget att ha). Bekvän
              standard utan överdåd. För lite mer flärdfulla alternativ finns
              alla typer av möjligheter inne i city.
            </p>
            <h3>Toastpar / Tal</h3>
            <p>
              Big bosses på middagen är makarna Eli och Markus Vestergaard. Om
              man nu vill hålla tal eller annat kul meddelar man dem enligt
              nedan. För allas skull kan man inte anmäla spontana tal så se till
              att anmäla innan 1/6.
            </p>
            <h3>Eli Vestergaard: </h3>
            <p>072-312 42 32</p>
            <h3>Markus Vestergaard: </h3>
            <p>076-895 90 77</p>
            <h3>Eller på mail: </h3>
            <p>xxxxxxxxx@gmail.com</p>
            <h3>Presenter</h3>
            <p>
              Den största gåvan skulle vara att ni kom till vårt bröllop, men om
              man absolut vill ge något skulle vi uppskatta ett bidrag till vår
              bröllopsresa.{" "}
            </p>
            <h3>Barn</h3>
            <p>
              Vi älskar barn. Men vi tänker unna oss en kväll utan de små liven.
              Men vi vill hellre att ni kommer än stanna hemma om ni inte hittar
              barnvakt eller liknande. Hör av er så kan vi snacka om det.{" "}
            </p>
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

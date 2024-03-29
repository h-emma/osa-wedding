import styles from "../styles/Form.module.sass";
import { useState } from "react";
import { db } from "../firebase/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Form() {
  const [isModuleOpen, setIsModuleOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [answer, setAnswer] = useState("");
  const [allergies, setAllergies] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collectionRef = collection(db, "answer");
    const payload = {
      firstName,
      lastName,
      answer,
      allergies,
      createdAt: serverTimestamp(),
    };
    await addDoc(collectionRef, payload);

    setFirstName("");
    setLastName("");
    setAnswer("");
    setAllergies("");
    setIsModuleOpen(true);
  };

  return (
    <>
      <div className={styles.formBorder}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="firstName">Förnamn</label>
          <input
            type="text"
            value={firstName}
            required
            placeholder="Ditt förnamn tack"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Efternamn</label>
          <input
            type="text"
            value={lastName}
            required
            placeholder="Ditt efternamn tack"
            onChange={(e) => setLastName(e.target.value)}
          />
          <p className={styles.text}>Kommer du till bröllopet?</p>
          <div className={styles.answerWrapper}>
            <label className={styles.answer} htmlFor="yes">
              <input
                type="radio"
                value="yes"
                name="answer"
                required
                checked={answer === "yes"}
                onChange={(e) => setAnswer("yes")}
              />
              Ja, såklart!
            </label>
            <label className={styles.answer} htmlFor="no">
              <input
                type="radio"
                value="no"
                name="answer"
                checked={answer === "no"}
                onChange={(e) => setAnswer("no")}
              />
              Nej, tyvärr
            </label>
          </div>
          <label htmlFor="allergies">Allergier/Matpreferenser </label>
          <input
            type="text"
            value={allergies}
            placeholder="Skriv OM vi behöver veta något"
            onChange={(e) => setAllergies(e.target.value)}
          />
          <button type="submit">OSA TILL BRÖLLOPET</button>
        </form>
      </div>
      {isModuleOpen && (
        <div className={styles.popupBox}>
          <div className={styles.box}>
            <h2>Tack för ditt svar!</h2>
            <p>
              Om du svarade att du inte kan komma, vad synd. Annars är vi
              väldigt glada över att du vill vara med på vår dag! Tänk på att
              formuläret gäller enbart en person så är ni flera på inbjudan,
              fyll det igen. Då är det bara att pressa byxorna, sula skorna
              eller vad man nu gör så syns vi i Göteborg 17/6-2023.
            </p>
            <button type="button" onClick={() => setIsModuleOpen(false)}>
              TILLBAKA TILL SIDAN
            </button>
          </div>
        </div>
      )}
    </>
  );
}

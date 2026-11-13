import { useState } from "react";
import type { FormEvent } from "react";
import Footer from "../components/footer";
import "./Support.css";

function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);
    setFeedback("");

    setTimeout(function () {
      setIsSending(false);

      setFeedback("Message envoyé avec succès !");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1000);
  }

  return (
    <>
      <main className="support-page">
        <section className="support-hero">
          <p className="support-label">CENTRE D'AIDE</p>

          <h1>Besoin d'aide ?</h1>

          <p>
            Vous avez une question sur notre catalogue de jeux vidéo, rencontré
            un problème ou remarqué une information incorrecte ? N'hésitez pas à
            nous contacter.
          </p>
        </section>

        <section className="support-content">
          <div className="support-container">
            <div className="support-heading">
              <h2>Contactez-nous</h2>

              <p>
                Remplissez le formulaire ci-dessous pour nous faire part de
                votre demande.
              </p>
            </div>

            <form className="support-form" onSubmit={handleSubmit}>
              <div className="support-form-row">
                <div className="support-field">
                  <label htmlFor="name">Votre nom</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    value={name}
                    onChange={function (event) {
                      setName(event.target.value);
                    }}
                    required
                  />
                </div>

                <div className="support-field">
                  <label htmlFor="email">Votre e-mail</label>

                  <input
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    value={email}
                    onChange={function (event) {
                      setEmail(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="support-field">
                <label htmlFor="subject">Sujet de votre demande</label>

                <select
                  id="subject"
                  value={subject}
                  onChange={function (event) {
                    setSubject(event.target.value);
                  }}
                  required
                >
                  <option value="">Choisissez un sujet</option>

                  <option value="Question sur un jeu">
                    Question sur un jeu
                  </option>

                  <option value="Signaler une erreur">
                    Signaler une erreur
                  </option>

                  <option value="Problème technique">Problème technique</option>

                  <option value="Suggestion">Suggestion</option>

                  <option value="Autre demande">Autre demande</option>
                </select>
              </div>

              <div className="support-field">
                <label htmlFor="message">Votre message</label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Décrivez votre demande..."
                  value={message}
                  onChange={function (event) {
                    setMessage(event.target.value);
                  }}
                  required
                />
              </div>

              <button
                className="support-button"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span className="support-loader"></span>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>

              <p className="support-form-note">
                Formulaire de démonstration : aucun message n'est réellement
                envoyé.
              </p>

              {feedback !== "" && (
                <p className="support-success" role="status">
                  {feedback}
                </p>
              )}
            </form>

            <section className="support-faq">
              <div className="support-heading">
                <h2>Questions fréquentes</h2>

                <p>Retrouvez les réponses aux questions les plus courantes.</p>
              </div>

              <div className="support-faq-list">
                <details className="support-question">
                  <summary>Comment rechercher un jeu ?</summary>

                  <p>
                    Rendez-vous dans notre catalogue et utilisez la barre de
                    recherche pour trouver un jeu par son nom ou son
                    développeur.
                  </p>
                </details>

                <details className="support-question">
                  <summary>Comment filtrer les jeux ?</summary>

                  <p>
                    Dans le catalogue, vous pouvez sélectionner un genre et
                    trier les jeux par nom ou par prix.
                  </p>
                </details>

                <details className="support-question">
                  <summary>Comment signaler une erreur ?</summary>

                  <p>
                    Utilisez le formulaire de contact et sélectionnez "Signaler
                    une erreur". Précisez le jeu concerné ainsi que
                    l'information incorrecte.
                  </p>
                </details>

                <details className="support-question">
                  <summary>Peut-on acheter des jeux sur le site ?</summary>

                  <p>
                    Non, notre site est un catalogue informatif. Il permet de
                    consulter les informations des jeux, mais ne propose pas
                    d'achat en ligne.
                  </p>
                </details>

                <details className="support-question">
                  <summary>
                    Pourquoi les jeux de l'accueil changent-ils ?
                  </summary>

                  <p>
                    La page d'accueil affiche trois jeux sélectionnés
                    aléatoirement à chaque actualisation.
                  </p>
                </details>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Support;

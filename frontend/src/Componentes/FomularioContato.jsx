import React from "react";

import styles from "./css/Formulario.module.css";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";

const FomularioContato = () => {
  return (
    <section className={`${styles.formulario} secao__container container`}>
      <div className={styles.container__grid}>
        <div className={styles.grid__conteudo}>
          <h2 className={styles.conteudo__info__titulo}>
            Entre em contato <br /> comigo
          </h2>
          <div className={styles.conteudo__info__contato}>
            <div className={styles.info__item}>
              <div className={styles.item__icone}>
                <EmailRoundedIcon />
              </div>
              <div className={styles.item__link}>
                <a href="mailto:mari.sousa.136@gmail.com" target="_blank">
                  mari.sousa.136@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.info__item}>
              <div className={styles.item__icone}>
                <ForumRoundedIcon />
              </div>
              <div className={styles.item__link}>
                <a
                  href="https://api.whatsapp.com/send?phone=5521976276176&text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20%7Bdigite%20seu%20nome%7D.%20Estou%20entrando%20em%20contato%20por%20meio%20do%20seu%20portf%C3%B3lio.%20Gostaria%20de%20%7Bdigite%20sua%20mensagem%7D."
                  target="_blank"
                >
                  (21)9.7627-6176
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.grid__sociais}>
          <div class={styles.rede__social}>
            <div class={styles.rede__social__container}>
              <div class={styles.container__linha}>
                <div>
                  <div class={styles.container__icones}>
                    <a
                      href="https://www.linkedin.com/in/mariana-de-sousa-desenvolvimento-web/"
                      class={styles.icones__btn}
                      target="_blank"
                    >
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/mari_freela_sousa/"
                      class={styles.icones__btn}
                      target="_blank"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://github.com/MariSousa"
                      class={styles.icones__btn}
                      target="_blank"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://codepen.io/MariSousa"
                      class={styles.icones__btn}
                      target="_blank"
                    >
                      <i class="fa-brands fa-codepen"></i>
                    </a>

                    <a
                      href="https://www.youtube.com/channel/UCGrs_A8hoKON5I9iJGUJqyg"
                      target="_blank"
                      class={styles.icones__btn}
                    >
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a
                      href="http://mari-sousa-front-end.webflow.io/"
                      target="_blank"
                      class={styles.icones__btn}
                    >
                      <i class="fa-solid fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FomularioContato;

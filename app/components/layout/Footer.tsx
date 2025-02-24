'use client'

import Image from "next/image";

export default function Footer() {

  return (
    <footer className="br-footer">
      <div className="container-lg">
        <div className="logo">
          <Image src="/images/govbr.svg" alt="Imagem" width={100} height={50} />

        </div>


        <div className="address">
          <p className="text-gray-800">
            Praça Frei Orlando, 170, Centro <br />
            São João del-Rei, Minas Gerais, 36307-352
          </p>
        </div>

        <div className="d-none d-sm-block">
          <div className="row align-items-end justify-content-between py-5">
            <div className="col">
              <div className="social-network">
                <div className="social-network-title">Redes Sociais</div>
                <div className="d-flex">
                  <a className="br-button circle" href="https://www.facebook.com/ufsjbr" aria-label="Compartilhar por Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a className="br-button circle" href="https://x.com/ufsjbr" aria-label="Compartilhar por Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a className="br-button circle" href="https://www.instagram.com/ufsjbr" aria-label="Compartilhar por Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>

                </div>
              </div>
            </div>
            <div className="row flex text-right">
              <a href="https://ufsj.edu.br/proen/" target="_blank" rel="noopener noreferrer">
                <Image src="/proen/PROEN-4.png" alt="Imagem" width={200} height={200} /></a>
              <a href="https://ufsj.edu.br/seaca/" target="_blank" rel="noopener noreferrer">
                <Image src="/proen/SEACA-4.png" alt="Imagem" width={200} height={200} /></a>
            </div>
          </div>
        </div>
      </div><span className="br-divider my-3"></span>
      <div className="container-lg">
        <div className="info">
          <div className="text-down-01 text-medium pb-3">© Universidade Federal de São João del-Rei.&nbsp;
            <strong>Todos os direitos reservados</strong>
          </div>
        </div>
      </div>
    </footer>

  );
}
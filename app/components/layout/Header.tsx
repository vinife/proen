"use client"

import Link from 'next/link';
import Image from 'next/image';
// import { useEffect } from 'react';
// import Menu from './Menu';

export default function Header() {
  // useEffect(() => {
  //   // Aguarde a renderização do DOM antes de iniciar os Accordions
  //   setTimeout(() => {
  //     const headerList = []
  //     for (const brHeader of window.document.querySelectorAll('.br-header')) {
  //       headerList.push(new core.BRHeader('br-header', brHeader))
  //     }
  //   }, 100);
  // }, []);


  return (
    <header className="br-header">
      <div className='container-lg'>
        <div className='header-top'>
          <div className="header-logo">
            <Link href="/" passHref>
              <Image src="/proen/logo.png" alt="Logo do site" layout="intrinsic" width={250} height={134} priority />
            </Link>
            <span className="br-divider vertical"></span>
            <div className="header-bottom">
              <div className="header-menu">
                <div className="header-info">
                  <Link href="/" passHref>
                    <div className="header-title text-up-04 ">Mostra UFSJ</div>
                    <div className="header-subtitle">Cursos de Graduação</div></Link>
                </div>
              </div>
            </div>

          </div>

          <div className="header-actions">
            <div className="header-links dropdown">
              <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Acesso Rápido">
                <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Acesso Rápido</div>
                </div>
                <Link className="br-item" href="/cidades/divinopolis">Divinópolis</Link>
                <a className="br-item" href="/cidades/ourobranco">Ouro Branco</a>
                <a className="br-item" href="/cidades/saojoaodelrei">São João Del-Rei</a>
                <a className="br-item" href="/cidades/setelagoas">Sete Lagoas</a>
              </div>
            </div>
            <span className="br-divider vertical mx-half mx-sm-1"></span>
            {/* <Image src="/proen/UFSJ.png" alt="Imagem" width={60} height={60} /> */}
            <div className="header-functions dropdown">
              <button className="br-button circle small" type="button" data-toggle="dropdown" aria-label="Abrir Funcionalidades do Sistema"><i className="fas fa-th" aria-hidden="true"></i>
              </button>
              <div className="br-list">
                <div className="header">
                  <div className="title">Funcionalidades do Sistema</div>
                </div>
                <div className="br-item">
                  <button className="br-button circle small" type="button" aria-label="Funcionalidade 1"><i className="fas fa-chart-bar" aria-hidden="true"></i><span className="text">Funcionalidade 1</span>
                  </button>
                </div>
                <div className="br-item">
                  <button className="br-button circle small" type="button" aria-label="Funcionalidade 2"><i className="fas fa-headset" aria-hidden="true"></i><span className="text">Funcionalidade 2</span>
                  </button>
                </div>
                <div className="br-item">
                  <button className="br-button circle small" type="button" aria-label="Funcionalidade 3"><i className="fas fa-comment" aria-hidden="true"></i><span className="text">Funcionalidade 3</span>
                  </button>
                </div>
                <div className="br-item">
                  <button className="br-button circle small" type="button" aria-label="Funcionalidade 4"><i className="fas fa-adjust" aria-hidden="true"></i><span className="text">Funcionalidade 4</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

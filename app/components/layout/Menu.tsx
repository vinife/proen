"use client"

import { useEffect } from 'react';

export default function Menu() {
  useEffect(() => {
    setTimeout(() => {
      const accordionList = []
      for (const brAccordion of window.document.querySelectorAll('.br-accordion')) {
        accordionList.push(Object.create(new core.BRAccordion('br-accordion', brAccordion)))
      }
    }, 100);

  }, []);

  return (

    <div className="row">
      <div className="br-menu push" id="main-navigation">
        <div className="menu-container">
          <div className="menu-panel">
            <div className="menu-header" data-visible="false">
              <div className="menu-title"><span>Identificação do site ou Sistema</span></div>
              <div className="menu-close">
                <button className="br-button circle" type="button" aria-label="Fechar o menu" data-dismiss="menu"><i className="fas fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <nav className="menu-body" role="tree">
              <div className="menu-folder"><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Camada 1</span></a>
                <ul>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-heart" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-address-book" aria-hidden="true"></i></span><span className="content">Camada 2</span></a>
                    <ul>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-book" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-tree" aria-hidden="true"></i></span><span className="content">Camada 3</span></a>
                        <ul>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                        </ul>
                      </li>
                      <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-moon" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-archive" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                </ul>
              </div>
              <div className="menu-folder"><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Camada 1</span></a>
                <ul>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-heart" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-address-book" aria-hidden="true"></i></span><span className="content">Camada 2</span></a>
                    <ul>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-book" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-tree" aria-hidden="true"></i></span><span className="content">Camada 3</span></a>
                        <ul>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                        </ul>
                      </li>
                      <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-moon" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-archive" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                </ul>
              </div>
              <div className="menu-folder"><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Camada 1</span></a>
                <ul>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-heart" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                  <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-address-book" aria-hidden="true"></i></span><span className="content">Camada 2</span></a>
                    <ul>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-book" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                      <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-tree" aria-hidden="true"></i></span><span className="content">Camada 3</span></a>
                        <ul>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                          <li><a className="menu-item" href="javascript: void(0)" role="treeitem"><span className="content">Camada 4</span></a></li>
                        </ul>
                      </li>
                      <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-moon" aria-hidden="true"></i></span><span className="content">Camada 3</span></a></li>
                    </ul>
                  </li>
                  <li><a className="menu-item" href="javascript: void(0)"><span className="icon"><i className="fas fa-archive" aria-hidden="true"></i></span><span className="content">Camada 2</span></a></li>
                </ul>
              </div><a className="menu-item divider" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Item de Camada 1</span></a><a className="menu-item divider" href="javascript: void(0)" role="treeitem"><span className="icon"><i className="fas fa-bell" aria-hidden="true"></i></span><span className="content">Item de Camada 1</span></a>
            </nav>
            <div className="menu-footer" data-visible="false">
              <div className="menu-logos"></div>
              <div className="menu-links"><a href="javascript: void(0)"><span className="mr-1">Link externo 1</span><i className="fas fa-external-link-square-alt" aria-hidden="true"></i></a><a href="javascript: void(0)"><span className="mr-1">Link externo 2</span><i className="fas fa-external-link-square-alt" aria-hidden="true"></i></a></div>
              <div className="social-network">
                <div className="social-network-title">Redes Sociais</div>
                <div className="d-flex"><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Twitter"><i className="fab fa-twitter" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Linkedin"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a><a className="br-button circle" href="javascript: void(0)" aria-label="Compartilhar por Whatsapp"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></div>
              </div>
              <div className="menu-info">
                <div className="text-center text-down-01">Todo o conteúdo deste site está publicado sob a licença <strong>Creative Commons Atribuição-SemDerivações 3.0</strong></div>
              </div>
            </div>
          </div>
          <div className="menu-scrim" data-dismiss="menu" tabIndex="0"></div>
        </div>
      </div>
      {/* <div className="col">
        <div className="d-flex align-items-center mt-3">
          <div>
            <button className="br-button small circle" type="button" aria-label="Menu" data-toggle="menu" data-target="#main-navigation"><i className="fas fa-bars" aria-hidden="true"></i>
            </button>
          </div>
          <div className="ml-3">Acionar menu</div>
        </div>
      </div> */}
    </div>

  );
}
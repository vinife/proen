"use client"

import React, { JSX } from 'react';

type AccordionItem = {
  id: string; // ID único para cada item
  title: string; // Título do item
  content: JSX.Element; // Conteúdo do item
};

type AccordionProps = {
  items: AccordionItem[]; // Lista de itens para o accordion
};

export default function Accordion({ items }: AccordionProps) {

  return (

    <div className="br-accordion" id="accordion4-negative" single="single">
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {/* Div principal do item */}
          <div className="item">
            <button
              className="header"
              type="button"
              aria-controls={item.id}
            >
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
              <span className="title">{item.title}</span>
            </button>
          </div>
          {/* Div separada para o conteúdo */}
          <div className="content" id={item.id}>
            {item.content}
          </div>
        </React.Fragment>

      ))
      }
    </div >

  );
}




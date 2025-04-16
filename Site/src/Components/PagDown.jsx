import React from "react";
import DownloadButton from "./DownloadButton.jsx";
import "./styles/DownloadButton.css"; 

const PagDown = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <h1 className="title">Baixe o Sun PDV</h1>
        <p className="description">
          Clique no botão abaixo para baixar o Nosso Sistema PDV e iniciar a instalação.
        </p>
        <p className="description">
          O <strong>Sun PDV</strong> é um sistema rápido e eficiente para gerenciamento de vendas. Ideal para varejo, supermercados e restaurantes.
        </p>
        
        <div className="system-requirements">
          <h2 className="section-title">Requisitos do Sistema</h2>
          <ul className="requirements-list">
            <li>Windows 10 ou superior / Linux (Ubuntu 20.04+)</li>
            <li>Processador Intel i3 ou superior</li>
            <li>4GB de RAM (8GB recomendado)</li>
            <li>500MB de espaço em disco</li>
          </ul>
        </div>

        <div className="installation-instructions">
          <h2 className="section-title">Como instalar?</h2>
          <ol className="instructions-list">
            <li>Baixe o arquivo clicando no botão abaixo.</li>
            <li>Execute o instalador e siga as instruções.</li>
            <li>Finalize a instalação e abra o Sun PDV.</li>
            <li>Insira sua licença ou faça um teste gratuito!</li>
          </ol>
        </div>

        <DownloadButton />

        <div className="faq-section">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <details className="faq-item">
            <summary className="faq-question">O Sun PDV é gratuito?</summary>
            <p className="faq-answer">Oferecemos um período de teste gratuito, após isso, é necessário adquirir uma licença.</p>
          </details>
          <details className="faq-item">
            <summary className="faq-question">Posso instalar em mais de um computador?</summary>
            <p className="faq-answer">Sim, mas cada instalação requer uma licença separada.</p>
          </details>
        </div>

        <a href="https://wa.me/12997703313" className="whatsapp-link">
          📞 Suporte via WhatsApp
        </a>

        <div className="testimonial-section">
          <h2 className="section-title">O que dizem sobre o Sun PDV?</h2>
          <blockquote className="testimonial">
            "Desde que começamos a usar o Sun PDV, nossas vendas ficaram mais organizadas!" – João, Mercado São José
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default PagDown;

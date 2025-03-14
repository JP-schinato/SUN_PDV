import React from "react";
import DownloadButton from "./DownloadButton.jsx";
import "./styles/DownloadButton.css"; 

const PagDown = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Baixe o Sun PDV </h1>
      <p className="text-lg text-gray-700 mb-6">
        Clique no botão abaixo para baixar o Nosso Sistema PDV e iniciar a instalação.
      </p>
      <p className="text-lg text-gray-700 mb-4">
  O <strong>Sun PDV</strong> é um sistema rápido e eficiente para gerenciamento de vendas. Ideal para varejo, supermercados e restaurantes.
</p>

<div className="bg-white shadow-md rounded-lg p-4 mb-6">
  <h2 className="text-xl font-semibold mb-2">Requisitos do Sistema</h2>
  <ul className="list-disc list-inside text-gray-700">
    <li>Windows 10 ou superior / Linux (Ubuntu 20.04+)</li>
    <li>Processador Intel i3 ou superior</li>
    <li>4GB de RAM (8GB recomendado)</li>
    <li>500MB de espaço em disco</li>
  </ul>
</div>

<div className="bg-white shadow-md rounded-lg p-4 mb-6">
  <h2 className="text-xl font-semibold mb-2">Como instalar?</h2>
  <ol className="list-decimal list-inside text-gray-700">
    <li>Baixe o arquivo clicando no botão abaixo.</li>
    <li>Execute o instalador e siga as instruções.</li>
    <li>Finalize a instalação e abra o Sun PDV.</li>
    <li>Insira sua licença ou faça um teste gratuito!</li>
  </ol>
</div>

      <DownloadButton />
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
  <h2 className="text-xl font-semibold mb-2">Perguntas Frequentes</h2>
  <details className="mb-2">
    <summary className="cursor-pointer font-semibold">O Sun PDV é gratuito?</summary>
    <p className="text-gray-700 mt-1">Oferecemos um período de teste gratuito, após isso, é necessário adquirir uma licença.</p>
  </details>
  <details className="mb-2">
    <summary className="cursor-pointer font-semibold">Posso instalar em mais de um computador?</summary>
    <p className="text-gray-700 mt-1">Sim, mas cada instalação requer uma licença separada.</p>
  </details>
</div>
<a href="https://wa.me/12997703313" 
   className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-bold mt-4 hover:bg-green-600 transition">
   📞 Suporte via WhatsApp
</a>

<div className="bg-white shadow-md rounded-lg p-4">
  <h2 className="text-xl font-semibold mb-2">O que dizem sobre o Sun PDV?</h2>
  <blockquote className="text-gray-700 italic">
    "Desde que começamos a usar o Sun PDV, nossas vendas ficaram mais organizadas!" – João, Mercado São José
  </blockquote>
</div>
    </div>
    
  );
};

export default PagDown;
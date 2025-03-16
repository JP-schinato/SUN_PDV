import React, { useState } from "react";
import "./styles/DownloadButton.css"; // Importando o CSS

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const fileUrl = "/arquivos/pagdown.zip"; // Caminho do arquivo
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "pagdown.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 2000); // Simula um carregamento antes do download iniciar
  };

  return (
    <button 
      className={`download-btn ${isDownloading ? "loading" : ""}`} 
      onClick={handleDownload}
    >
      {isDownloading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>📥 Baixar PagDown</>
      )}
    </button>
  );
};

export default DownloadButton;

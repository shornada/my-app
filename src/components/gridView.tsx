import React, { useState } from 'react';
import { dialogData } from '../data/dialogData';
import Dialog from './dialog'; // Assuming Dialog component is in the same directory

interface DialogItem {
  ID: number;
  Kód: string;
  Název: string;
  Katedra: number;
  'Kontaktní osoba'?: string;
  'Popis stručně': string;
  'Doporučený semestr': number;
  Kredity: number;
  MainTag: string;
  Tags: string;
  Zaměření: string;
  'Role P/V/PV': string;
  Odkaz: string;
  Obsah?: (string | number)[][];
}

const GridView: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number | null>(null);

  const handleTileClick = (nodeID: number) => {
    setSelectedNode(nodeID);
  };

  const handleCloseDialog = () => {
    setSelectedNode(null);
  };

  return (
    <div className="grid-container">
      <h2>Dlaždice</h2>
      <div className="grid-tiles">
        {dialogData.map((item) => (
          <div key={item.ID} className="grid-tile" onClick={() => handleTileClick(item.ID)}>
            <h3>{item['Název']}</h3>
            <p>
              <strong>Katedra:</strong> {item['Katedra']}
            </p>
            <p>
              <strong>Tags:</strong> {item['Podkategorie']}
            </p>
            <p>
              <strong>Zaměření:</strong> 
            </p>
            <p>
              <strong>Kredity:</strong> {item['Kredity']}
            </p>
            <a href={item['Odkaz']} target="_blank" rel="noopener noreferrer">
              Odkaz
            </a>
          </div>
        ))}
      </div>
      {selectedNode !== null && (
        <Dialog node={selectedNode} onClose={handleCloseDialog} onMainTagClick={() => {}} />
      )}
    </div>
  );
};

export default GridView;

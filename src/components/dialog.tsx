import React, { useRef, useEffect } from 'react';
import { BarChart, Bars, Line } from '@rsuite/charts';
import { dialogData } from '../data/dialogData';

interface DialogProps {
  node: number;
  onClose: () => void;
  onMainTagClick: (mainTag: string) => void;
}

const Dialog: React.FC<DialogProps> = ({ node, onClose, onMainTagClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        console.log('Clicked outside the modal. Closing...');
        onClose();
      }
    };

    // Add event listener
    window.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const currentNodeData = dialogData.find((item) => item.ID === node);

  if (!currentNodeData) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Node not found</h2>
          <button onClick={onClose} className="close-button">
            Zavřít
          </button>
        </div>
      </div>
    );
  }

  const obsahData = currentNodeData.Obsah || [];
  const formattedObsahData: [string, ...number[]][] = obsahData.map((entry) => {
    if (Array.isArray(entry) && entry.length >= 2 && typeof entry[0] === 'string') {
      return [entry[0], ...(entry.slice(1) as number[])];
    }
    return ['Invalid Entry', 0];
  });

  const sampleData = [
    ["1", 3,2,1,1,1, 1],
    ["2", 3,2,1,1,1, 1],
    ["3", 1,2, 3],
    ["4", 5, 2,4],
    ["5", 3, 2,1],
    ["6", 1,2, 3],
    ["7", 3,2, 2],
    ["8", 4,2, 1],
    ["9", 1,2, 3],
    ["10", 3,2, 1],
    ["11", 4,2, 3],
    ["12", 2,2, 4],
    ["13", 3,2, 5],
    ["14", 9,2, 7],
  ];

  const formattedSampleData: [string, ...number[]][] = sampleData.map(([label, ...values]) => [
    String(label),
    ...values.map(Number),
  ]);

  const zaměření = currentNodeData.Zaměření;

  // Handling the case where "Zaměření" is a string
  const zaměřeníString = typeof zaměření === 'string' ? zaměření : '';

  // Handling the case where "Zaměření" is an object
  const renderZaměřeníTable = (zaměření: any) => {
    if (typeof zaměření === 'object') {
      return (
        <table className="table">
        <thead>
            <tr>
              <th>Zaměření</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(zaměření).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value as string}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return null;
  };

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <h2>{currentNodeData.Název}</h2>
        <ul className="dialog-list">
          {Object.entries(currentNodeData)
            .filter(([key]) => key !== 'Obsah')
            .map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong>{' '}
                {key === 'Odkaz' ? (
                  <a href={value as string} target="_blank" rel="noopener noreferrer">
                    {value}
                  </a>
                ) : key === 'MainTag' ? (
                  <span className="main-tag" onClick={() => onMainTagClick(currentNodeData.MainTag)}>
                    {currentNodeData.MainTag}
                  </span>
                ) : key === 'Zaměření' ? (
                  <>
                    {zaměřeníString || renderZaměřeníTable(zaměření)}
                  </>
                ) : (
                  value
                )}
              </li>
            ))}
        </ul>
        <h3>Rozvržení obsahu předmětu</h3>
        <BarChart name="Rozvržení obsahu" data={formattedObsahData} yAxis={false}>
          <Bars name="Aplikuje" color="#2485C1" stack="A" />
          <Bars name="Doplňuje" color="#32A4D4" stack="A" />
          <Bars name="Rozšiřuje" color="#34C3FF" stack="A" />
        </BarChart>
        <h3>Náročnost předmětu</h3>
        <BarChart data={formattedSampleData}>
          <Bars name="Domácí úkol" color = "#34C3FF"stack="A"  />
          <Bars name="Semestrální projekt" color="#32A4D4" stack="A" />
          <Bars name="Prezentace" color="#32A4D4" stack="A" />
          <Bars name="Zápočtový test" color="#32A4D4" stack="A" />
          <Bars name="Průběžný test" color="#32A4D4" stack="A" />


          <Line name="Průběžná náročnost" color="red"/>
        </BarChart>

        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;

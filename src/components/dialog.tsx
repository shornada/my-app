import React, { useRef, useEffect } from 'react';
import { BarChart, LineChart, Line, YAxis, Bars } from '@rsuite/charts';
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
    ["1", 3, 1],
    ["2", 2, 1],
    ["3", 1, 3],
    ["4", 5, 4],
    ["5", 3, 1],
    ["6", 1, 3],
    ["7", 3, 2],
    ["8", 4, 1],
    ["9", 1, 3],
    ["10", 3, 1],
    ["11", 4, 3],
    ["12", 2, 4],
    ["13", 3, 5],
    ["14", 9, 7],
  ];
  
  const formattedSampleData: [string, ...number[]][] = sampleData.map(([label, ...values]) => [
    String(label),
    ...values.map(Number),
  ]);
  

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
                  <span
                    className="main-tag"
                    onClick={() => onMainTagClick(currentNodeData.MainTag)}
                  >
                    {currentNodeData.MainTag}
                  </span>
                ) : (
                  value
                )}
              </li>
            ))}
        </ul>
        <h3>Rozvržení obsahu předmětu</h3>
        <BarChart
          name="Rozvržení obsahu"
          data={formattedObsahData}
          yAxis={false} >
          <Bars name="Aplikuje" color="#2485C1" stack="A" />
          <Bars name="Doplňuje" color="#32A4D4" stack="A" />
          <Bars name="Rozšiřuje" color="#34C3FF" stack="A" />
        </ BarChart >
        <h3>Náročnost předmětu</h3>
        <BarChart data={formattedSampleData} >
          <Bars name="Testy/úkoly" barWidth={10} />
          <Line name="Průběžná náročnost" />
        </BarChart>

        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;

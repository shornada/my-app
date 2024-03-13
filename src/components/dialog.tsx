import React, { useRef, useEffect } from 'react';
import { BarChart, Bars, Line, Scatter } from '@rsuite/charts';
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



  const sampleData2 = currentNodeData?.SemesterSchedule || null;
  const formattedSampleData: [string, ...number[]][] = sampleData2
    ? sampleData2.map(([label, ...values]: any[]) => [
        String(label),
        ...(values.map(Number) as number[]),
      ])
    : [];
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
            .filter(([key]) => key !== 'SemesterSchedule')

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
        <BarChart data={formattedSampleData} yAxis={true} >
          <Bars barWidth ="10px" name="Domácí úkol" color = "#33FFAA"stack="A"  />
          <Bars name="Semestrální projekt" color="#33A1FF" stack="A" />
          <Bars name="Prezentace" color="#7933FF" stack="A" />
          <Bars name="Zápočtový test" color="#CA33FF" stack="A" />
          <Bars name="Průběžný test" color="#FF3375" stack="A" />

          <Line name="Průběžná náročnost" color="red" area/>
        </BarChart>

        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;

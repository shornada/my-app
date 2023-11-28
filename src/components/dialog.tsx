import React from 'react';
import { BarChart, LineChart, Line } from '@rsuite/charts';
import { dialogData } from '../data/dialogData';

interface DialogProps {
  node: number;
  onClose: () => void;
  onMainTagClick: (mainTag: string) => void;
}

const Dialog: React.FC<DialogProps> = ({ node, onClose, onMainTagClick }) => {
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
    ['1', 10],
    ['2', 25],
    ['3', 15],
    ['4', 40],
    ['5', 15],
  ];

  const lineChartData: [string, ...number[]][] = sampleData.map(([label, value]) => [
    String(label),
    Number(value),
  ]);

  return (
    <div className="modal">
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
        <BarChart name="Rozvržení obsahu" data={formattedObsahData} yAxis={false} />
        <LineChart data={lineChartData}>
          <Line name="Náročnost" area />
        </LineChart>

        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;
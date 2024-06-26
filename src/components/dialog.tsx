import React, { useRef, useEffect } from 'react';
import { BarChart, Bars, Line } from '@rsuite/charts';
import { dialogData, garantsTable } from '../data/dialogData';
import '@fortawesome/fontawesome-free/css/all.css';
import { departments } from '../data/constantsAndEnums';

// Define the properties that the Dialog component expects
interface DialogProps {
  node: number;
  onClose: () => void;
  onMainTagClick: (mainTag: string) => void;
}

/**
 * Dialog component that displays detailed information about a course.
 * @param {DialogProps} props - The properties passed to the component.
 * @param {number} props.node - The ID of the node (course) to display.
 * @param {function} props.onClose - Callback function to close the dialog.
 * @param {function} props.onMainTagClick - Callback function to handle clicks on the main tag.
 * @returns {JSX.Element} The rendered Dialog component.
 */
const Dialog: React.FC<DialogProps> = ({ node, onClose, onMainTagClick }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Hook to handle clicks outside the modal to close it
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

  // Find the data for the current node
  const currentNodeData = dialogData.find((item) => item.ID === node);

  // If no data found for the node, display an error message
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

  // Format the "Obsah" data for the bar chart
  const obsahData = currentNodeData.Obsah || [];
  const formattedObsahData: [string, ...number[]][] = obsahData.map((entry) => {
    if (Array.isArray(entry) && entry.length >= 2 && typeof entry[0] === 'string') {
      return [entry[0], ...(entry.slice(1) as number[])];
    }
    return ['Invalid Entry', 0];
  });

  // Format the "SemesterSchedule" data for the bar chart
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

  // Function to render "Zaměření" table if it is an object
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
        <a href={currentNodeData.Odkaz as string} target="_blank" rel="noopener noreferrer">
          <h2>
            {currentNodeData.Název}
            <i className="fas fa-link"></i>
          </h2>
        </a>
        <ul className="dialog-list">
          {Object.entries(currentNodeData)
            .filter(([key]) => key !== 'Obsah' && key !== 'SemesterSchedule' && key !== 'ID' && key !== 'Název' && key !== 'Odkaz')
            .map(([key, value]) => (
              <li key={key}>
                {key !== 'Zaměření' && <strong>{key}:</strong>}{' '}
                {key === 'Kategorie' ? (
                  <span className="main-tag" onClick={() => onMainTagClick(currentNodeData.Kategorie)}>
                    {currentNodeData.Kategorie}
                  </span>
                ) : key === 'Zaměření' ? (
                  <>
                    {zaměřeníString || renderZaměřeníTable(zaměření)}
                  </>
                ) : key === 'Kontaktní osoba' ? (
                  <>
                    {garantsTable[value as keyof typeof garantsTable] ? (
                      <a href={garantsTable[value as keyof typeof garantsTable].link} target="_blank" rel="noopener noreferrer">
                        {value}
                        <i className="fas fa-link"></i>
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </>
                ) : key === 'Katedra' ? (
                  <>
                    {departments[value as keyof typeof departments] ? (
                      <a href={departments[value as keyof typeof departments].link} target="_blank" rel="noopener noreferrer">
                        {value} {departments[value as keyof typeof departments].name}
                        <i className="fas fa-link"></i>
                      </a>
                    ) : (
                      <span>{value}</span>
                    )}
                  </>
                ) : (
                  value
                )}
              </li>
            ))}
        </ul>

        <h3>Rozvržení obsahu předmětu</h3>
        <div className="barchart">
          <BarChart name="Rozvržení obsahu" data={formattedObsahData} yAxis={false}>
            <Bars name="Nové znalosti" color="#2485C1" stack="A" />
            <Bars name="Využití znalostí" color="#32A4D4" stack="A" />
            <Bars name="Rozšíření znalostí" color="#34C3FF" stack="A" />
          </BarChart>
        </div>

        <h3>Náročnost předmětu</h3>
        <BarChart data={formattedSampleData} yAxis={true}>
          <Bars barWidth="10px" name="Domácí úkol" color="#33FFAA" stack="A" />
          <Bars name="Semestrální projekt" color="#33A1FF" stack="A" />
          <Bars name="Prezentace" color="#7933FF" stack="A" />
          <Bars name="Zápočtový test" color="#CA33FF" stack="A" />
          <Bars name="Průběžný test" color="#FF3375" stack="A" />
          <Line name="Průběžná náročnost" color="red" area />
        </BarChart>

        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;

import React from 'react';
import Modal from 'react-modal';
import { dialogData } from '../data.ts/dialogData';


interface DialogProps {
  node: number;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ node, onClose }) => {
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

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{currentNodeData.Název}</h2>
        <ul className="dialog-list">
          {Object.entries(currentNodeData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-button">
          Zavřít
        </button>
      </div>
    </div>
  );
};

export default Dialog;

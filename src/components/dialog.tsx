import React from 'react';
import Modal from 'react-modal';
import { json } from 'stream/consumers';


const findNodeByName = (data: any, nameToFind: number): any | undefined => {
  if (data.name === nameToFind.toString()) {
      console.log(data);
      return data;
  }

  if (data.children && data.children.length > 0) {
      for (const child of data.children) {
          const result = findNodeByName(child, nameToFind);
          if (result) {
              console.log(result);
              return result;
          }
      }
  }

  return undefined;
};


const data = {
    name: '1',
    attributes: { sex: 'numberWON' },
    children: [
        {
            name: '2', 
            attributes: { sex: 'male' },
            children: [
                {
                    name: '3',
                    attributes: { sex: 'pes' }

                },
                {
                    name: '4',
                    attributes: { sex: 'male' }

                },
            ],
        },
        {
            name: '5',
            attributes: { sex: 'male' }

        },
    ],
};

interface DialogProps {
  node: any;
  onClose: () => void; // Explicitly define the type for onClose

}


const Dialog: React.FC<DialogProps> = ({ node ,onClose }) => {
  console.log(findNodeByName(data,node))
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{node}</h2>
        <p>pohlaví: {findNodeByName(data,node).attributes.sex}</p>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </div>
  );
};

export default Dialog;


//        <p>pohlaví: {findNodeByName(data,node).attributes.sex}</p>

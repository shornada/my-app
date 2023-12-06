// Grid.tsx

import React, { FC } from 'react';

interface GridProps {
  data: any[]; // Replace 'any' with the type of your data
}

const Grid: FC<GridProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Assuming the keys of the first item in the array represent column names
  const columns = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;

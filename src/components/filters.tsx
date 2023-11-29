// FilterComponent.jsx
import React from "react";
import { graph1 } from "../data/graphData";
interface FilterComponentProps {
    mainTagFilterValue: string;
    specializationFilterValue: string;
    departmentFilterValue: string;
    handleMainTagCheckboxChange: (mainTag: string) => void; // Corrected type
    handleSpecializationDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleMainTagReset: () => void; // Corrected type
    handleSpecializationReset: () => void;
    handleDepartmentReset: () => void;
  }
  
  const FilterComponent: React.FC<FilterComponentProps> = ({
    mainTagFilterValue,
    specializationFilterValue,
    departmentFilterValue,
    handleMainTagCheckboxChange,
    handleSpecializationDropdownChange,
    handleDropdownChange,
    handleMainTagReset,
    handleSpecializationReset,
    handleDepartmentReset,
}) => {
  return (
    <div className="filter-container">
      <div className="tag-filters">
        <label>Main Tag:</label>
        {Array.from(new Set(graph1.nodes.map((node: any) => node.mainTag)))
          .map((mainTag) => (
            <label key={mainTag}>
              <input
                type="checkbox"
                value={mainTag}
                checked={mainTagFilterValue === mainTag}
                onChange={() => handleMainTagCheckboxChange(mainTag)}
              />
              {mainTag}
            </label>
          ))}
        <button onClick={handleMainTagReset}>Reset</button>
      </div>

      <div className="specialization-filter">
        <label>Specialization:</label>
        <select
          value={specializationFilterValue}
          onChange={handleSpecializationDropdownChange}
        >
          <option value="">All</option>
          {Array.from(
            new Set(
              graph1.nodes
                .filter((node: any) => node.specialization)
                .flatMap((node: any) => node.specialization)
            )
          ).map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
        <button onClick={handleSpecializationReset}>Reset</button>
      </div>

      <div className="department-filter">
        <label>Department:</label>
        <select value={departmentFilterValue} onChange={handleDropdownChange}>
          <option value="">All</option>
          {Array.from(
            new Set(graph1.nodes.map((node: any) => node.department))
          ).map((department) => (
            <option key={department} value={department.toString()}>
              Department {department}
            </option>
          ))}
        </select>
        <button onClick={handleDepartmentReset}>Reset</button>
      </div>
    </div>
  );
};

export default FilterComponent;

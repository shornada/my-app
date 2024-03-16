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
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
    handleRestart: () => void; // Add this line
    searchQuery: string; // Include searchQuery in the interface
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
    handleSearchChange,
    handleRestart,
    searchQuery
}) => {
    const handleRestartAll = () => {
        handleMainTagReset();
        handleSpecializationReset();
        handleDepartmentReset();
        handleRestart(); // Trigger any other necessary reset logic
    };

    // Extract unique departments and sort them
    const departments = Array.from(new Set(graph1.nodes.map((node: any) => node.department)))
                                .sort((a, b) => a - b);

    return (
        <div className="filter-container">
            <div className="search-filter">
                <input
                    id="search-input"
                    type="text"
                    placeholder="NSS, OMO, ZDM,..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="tag-filters">
                <label>Náplň předmětu:</label>
                {/* Main Tag */}
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
            </div>

            <div className="specialization-filter">
                <label>Specializace:</label>
                {/* Specialization */}
                <select
                    value={specializationFilterValue}
                    onChange={handleSpecializationDropdownChange}
                >
                    <option value="">...</option>
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
            </div>

            <div className="department-filter">
                <label>Katedra:</label>
                {/* Department */}
                <select value={departmentFilterValue} onChange={handleDropdownChange}>
                    <option value="">...</option>
                    {departments.map((department) => (
                        <option key={department} value={department.toString()}>
                            {department}
                        </option>
                    ))}
                </select>
            </div>

            {/* Restart Button */}
            <button onClick={handleRestartAll}>OBNOVIT</button>
        </div>
    );
};

export default FilterComponent;

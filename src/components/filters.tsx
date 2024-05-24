import React from "react";
import { graph1 } from "../data/graphData";
import { departments } from "../data/constantsAndEnums";

/**
 * Props for the FilterComponent.
 * @param {string} mainTagFilterValue - The current value of the main tag filter.
 * @param {string} specializationFilterValue - The current value of the specialization filter.
 * @param {string} departmentFilterValue - The current value of the department filter.
 * @param {function} handleMainTagCheckboxChange - Function to handle changes in the main tag checkbox.
 * @param {function} handleSpecializationDropdownChange - Function to handle changes in the specialization dropdown.
 * @param {function} handleDropdownChange - Function to handle changes in the department dropdown.
 * @param {function} handleMainTagReset - Function to reset the main tag filter.
 * @param {function} handleSpecializationReset - Function to reset the specialization filter.
 * @param {function} handleDepartmentReset - Function to reset the department filter.
 * @param {function} handleSearchChange - Function to handle changes in the search input.
 * @param {function} handleRestart - Function to handle the restart action.
 * @param {string} searchQuery - The current value of the search query.
 */
interface FilterComponentProps {
    mainTagFilterValue: string;
    specializationFilterValue: string;
    departmentFilterValue: string;
    handleMainTagCheckboxChange: (mainTag: string) => void;
    handleSpecializationDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleDropdownChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleMainTagReset: () => void;
    handleSpecializationReset: () => void;
    handleDepartmentReset: () => void;
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRestart: () => void;
    searchQuery: string;
}

/**
 * FilterComponent for filtering courses based on various criteria.
 * @param {FilterComponentProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered FilterComponent.
 */
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
    /**
     * Handles the reset of all filters and the restart action.
     */
    const handleRestartAll = () => {
        handleMainTagReset();
        handleSpecializationReset();
        handleDepartmentReset();
        handleRestart();
    };

    /**
     * Generates options for the department dropdown.
     */
    const departmentOptions = Object.keys(departments).map((code) => {
        const department = departments[code as unknown as keyof typeof departments];
        return (
            <option key={code} value={code}>
                {department.code} {department.name}
            </option>
        );
    });

    return (
        <div className="filter-container">
            <div className="search-filter">
                <input
                    id="search-input"
                    type="text"
                    placeholder="NSS, návrhy, alge,..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="tag-filters">
                <label>Náplň předmětu:</label>
                {Array.from(new Set(graph1.nodes.map((node: any) => node.mainTag))).map((mainTag) => (
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
                <select
                    value={specializationFilterValue}
                    onChange={handleSpecializationDropdownChange}
                >
                    <option value="">...</option>
                    {Array.from(new Set(graph1.nodes.filter((node: any) => node.specialization).flatMap((node: any) => node.specialization))).map((specialization) => (
                        <option key={specialization} value={specialization}>{specialization}</option>
                    ))}
                </select>
            </div>
            <div className="department-filter">
                <label>Katedra:</label>
                <select value={departmentFilterValue} onChange={handleDropdownChange}>
                    <option value="">...</option>
                    {departmentOptions}
                </select>
            </div>
            <button onClick={handleRestartAll}><i className="fas fa-refresh" aria-hidden="true"></i></button>
        </div>
    );
};

export default FilterComponent;

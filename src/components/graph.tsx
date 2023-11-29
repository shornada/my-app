import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graph1 } from "../data/graphData";
import { tagsData } from "../data/tags";
import Dialog from "./dialog";

const tags = tagsData;

function GraphView() {
    const [selectedNode, setSelectedNode] = useState<any | null>(null);
    const [departmentFilterValue, setDepartmentFilterValue] = useState<string>("");
    const [tagFilterValues, setTagFilterValues] = useState<string[]>([]);
    const [specializationFilterValue, setSpecializationFilterValue] = useState<string>("");
    const [filteredGraph, setFilteredGraph] = useState<any>(graph1);
    const [mainTagFilterValue, setMainTagFilterValue] = useState<string>("");
    const [hoveredNode, setHoveredNode] = useState<any | null>(null);
    const [highlightedNodes, setHighlightedNodes] = useState<number[]>([]);


    const filterNodes = () => {
        let filteredNodes = graph1.nodes;

        if (departmentFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) => node.department === parseInt(departmentFilterValue, 10)
            );
        }

        if (tagFilterValues.length > 0) {
            filteredNodes = filteredNodes.filter((node) =>
                node.tags && node.tags.some((tag) => tagFilterValues.includes(tag))
            );
        }

        if (specializationFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) =>
                    node.specialization &&
                    (node.specialization.includes(specializationFilterValue) ||
                        node.specialization.includes("mandatory"))
            );
        }
        if (mainTagFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) => node.mainTag === mainTagFilterValue
            );
        }

        setFilteredGraph({
            ...graph1,
            nodes: filteredNodes,
        });

    };

    useEffect(() => {
        filterNodes();
    }, [departmentFilterValue, tagFilterValues, specializationFilterValue, mainTagFilterValue]);

    const closeDialog = () => {
        setSelectedNode(null);
    };

    const handleMainTagClick = (mainTag: string) => {
        setMainTagFilterValue(mainTag);
        filterNodes(); // Apply the filter when mainTag is clicked
        closeDialog(); // Close the dialog after setting the filter
    };

    const handleTagCheckboxChange = (tag: string) => {
        const updatedTags = tagFilterValues.includes(tag)
            ? tagFilterValues.filter((t) => t !== tag)
            : [...tagFilterValues, tag];

        setTagFilterValues(updatedTags);
    };
    const handleSpecializationDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        setSpecializationFilterValue(value);
    };
    const handleSpecializationReset = () => {
        setSpecializationFilterValue("");
    };

    const handleDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        setDepartmentFilterValue(value);
    };

    const handleDepartmentReset = () => {
        setDepartmentFilterValue("");
    };

    const handleTagReset = () => {
        setTagFilterValues([]);
    };

    const handleMainTagCheckboxChange = (mainTag: string) => {
        setMainTagFilterValue(mainTag === mainTagFilterValue ? "" : mainTag);
    };


    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: "#000000",
        },
        height: "500px",
        nodes: {
            shape: "dot",
            size: 20,
            borderWidth: 2,
            shadow: true,
            font: {
                size: 12,
            },
        },
        interaction: {
            hover: true,
        },
    };


    const events = {
        click: ({ nodes }: { nodes: any }) => {
            // Node clicked, update selectedNode
            setSelectedNode(nodes.length > 0 ? nodes[0] : null);
        },
        hoverNode: ({ node }: { node: any }) => {
            setHoveredNode(node);
            const neighbors = graph1.edges
                .filter((edge: any) => edge.from === node || edge.to === node)
                .map((edge: any) => (edge.from === node ? edge.to : edge.from));
            setHighlightedNodes([...neighbors, node]);
        },
        blurNode: () => {
            setHoveredNode(null);
            setHighlightedNodes([]);
        },
    };
    
    return (
        <div className="graph-container">
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
                    <button onClick={() => setMainTagFilterValue("")}>Reset</button>
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
                    <select
                        value={departmentFilterValue}
                        onChange={handleDropdownChange}
                    >
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

            <Graph
                graph={filteredGraph}
                options={options}
                events={events}
                getNetwork={(network: any) => {
                    // Highlight nodes on hover
                    network.on("hoverNode", ({ node }: { node: any }) => {
                        if (node) {
                            network.selectNodes([node]);
                        }
                    });
                    // Reset highlighting on mouseout
                    network.on("blurNode", () => {
                        network.unselectAll();
                    });
                }}
            />
            {
                selectedNode && (
                    <div className="dialog">
                        <Dialog node={selectedNode} onClose={closeDialog} onMainTagClick={handleMainTagClick} />
                    </div>
                )
            }
        </div >
    );
}

export default GraphView;

import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graph1 } from "../data/graphData";
import Dialog from "./dialog";
import FilterComponent from "./filters";
import { CurrentView } from '../App';


function GraphView({ currentView }: { currentView: CurrentView }) {
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

    useEffect(() => {
        // Reset the view to 'graph' when the component unmounts
        return () => {
            // You can add any cleanup logic here if needed
            // For now, just reset the view to 'graph'
            setFilteredGraph(graph1);
        };
    }, []);

    const closeDialog = () => {
        setSelectedNode(null);
    };

    const handleMainTagClick = (mainTag: string) => {
        setMainTagFilterValue(mainTag);
        filterNodes();
        closeDialog();
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

    const handleMainTagReset = () => {
        setMainTagFilterValue("");
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
          <FilterComponent
            mainTagFilterValue={mainTagFilterValue}
            specializationFilterValue={specializationFilterValue}
            departmentFilterValue={departmentFilterValue}
            handleMainTagCheckboxChange={handleMainTagCheckboxChange}
            handleSpecializationDropdownChange={handleSpecializationDropdownChange}
            handleDropdownChange={handleDropdownChange}
            handleMainTagReset={handleMainTagReset}
            handleSpecializationReset={handleSpecializationReset}
            handleDepartmentReset={handleDepartmentReset}
          />
    
          {currentView === 'graph' && (
            <Graph
              graph={filteredGraph}
              options={options}
              events={events}
              getNetwork={(network: any) => {
                network.on("hoverNode", ({ node }: { node: any }) => {
                  if (node) {
                    network.selectNodes([node]);
                  }
                });
                network.on("blurNode", () => {
                  network.unselectAll();
                });
              }}
            />
          )}
    
          {selectedNode && (
            <div className="dialog">
              <Dialog node={selectedNode} onClose={closeDialog} onMainTagClick={handleMainTagClick} />
            </div>
          )}
        </div>
      );
    }
    
    export default GraphView;
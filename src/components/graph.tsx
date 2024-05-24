import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graph1 } from "../data/graphData";
import ComparisonDialog from "./comparisomDialog";
import Dialog from "./dialog";
import FilterComponent from "./filters";
import LegendGraphView from "./graphLegend";

/**
 * GraphView component for displaying and interacting with a graph visualization.
 * @returns {JSX.Element} The rendered GraphView component.
 */
function GraphView() {
    const [selectedNode, setSelectedNode] = useState<any | null>(null);
    const [departmentFilterValue, setDepartmentFilterValue] = useState<string>("");
    const [specializationFilterValue, setSpecializationFilterValue] = useState<string>("");
    const [filteredGraph, setFilteredGraph] = useState<any>(graph1);
    const [mainTagFilterValue, setMainTagFilterValue] = useState<string>("");
    const [hoveredNode, setHoveredNode] = useState<any | null>(null);
    const [highlightedNodes, setHighlightedNodes] = useState<number[]>([]);
    const [network, setNetwork] = useState<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedNodes, setSelectedNodes] = useState<number[]>([]);

    useEffect(() => {
        filterNodes();
    }, [departmentFilterValue, specializationFilterValue, mainTagFilterValue, searchQuery]);

    useEffect(() => {
        const selectedNodes = getSelectedNodes();
        setSelectedNodes(selectedNodes);
    }, []);

    /**
     * Unselects all nodes in the graph.
     */
    const unselectALL = () => {
        setSelectedNodes([]);
        network.unselectAll();
    };

    useEffect(() => {
        if (!network) return;

        /**
         * Handles changes in the selection of nodes.
         */
        const handleSelectionChange = () => {
            const selectedNodes = getSelectedNodes();
            setSelectedNodes(selectedNodes);
        };

        network.on("selectNode", handleSelectionChange);
        network.on("deselectNode", handleSelectionChange);

        return () => {
            network.off("selectNode", handleSelectionChange);
            network.off("deselectNode", handleSelectionChange);
        };
    }, [network]);

    /**
     * Closes the comparison dialog.
     */
    const handleCloseComparismDialog = () => {
        setIsDialogOpen(false);
    };

    /**
     * Gets the currently selected nodes in the network.
     * @returns {number[]} The IDs of the selected nodes.
     */
    const getSelectedNodes = () => {
        if (network) {
            return network.getSelectedNodes();
        }
        return [];
    };

    useEffect(() => {
        return () => {
            setFilteredGraph(graph1);
        };
    }, []);

    /**
     * Filters the nodes in the graph based on the selected filter values.
     */
    const filterNodes = () => {
        let filteredNodes = graph1.nodes;

        if (departmentFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) => node.department === parseInt(departmentFilterValue, 10)
            );
        }

        if (specializationFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) =>
                    node.specialization &&
                    (node.specialization.includes(specializationFilterValue) ||
                        node.specialization.includes("Společné (povinné)"))
            );
        }

        if (mainTagFilterValue !== "") {
            filteredNodes = filteredNodes.filter(
                (node) => node.mainTag === mainTagFilterValue
            );
        }

        filteredNodes = filteredNodes.filter(
            (node) =>
                node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (node.name && node.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );

        setFilteredGraph({
            ...graph1,
            nodes: filteredNodes,
        });
    };

    /**
     * Closes the dialog.
     */
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    /**
     * Handles the click on a main tag to filter the nodes.
     * @param {string} mainTag - The main tag to filter by.
     */
    const handleMainTagClick = (mainTag: string) => {
        setMainTagFilterValue(mainTag);
        filterNodes();
        handleCloseDialog();
    };

    /**
     * Handles the change in the specialization dropdown.
     * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event.
     */
    const handleSpecializationDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        setSpecializationFilterValue(value);
    };

    /**
     * Resets the specialization filter.
     */
    const handleSpecializationReset = () => {
        setSpecializationFilterValue("");
    };

    /**
     * Handles the change in the department dropdown.
     * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event.
     */
    const handleDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = event.target.value;
        setDepartmentFilterValue(value);
    };

    /**
     * Resets the department filter.
     */
    const handleDepartmentReset = () => {
        setDepartmentFilterValue("");
    };

    /**
     * Resets the main tag filter.
     */
    const handleMainTagReset = () => {
        setMainTagFilterValue("");
    };

    /**
     * Handles the change in the main tag checkbox.
     * @param {string} mainTag - The main tag to filter by.
     */
    const handleMainTagCheckboxChange = (mainTag: string) => {
        setMainTagFilterValue(mainTag === mainTagFilterValue ? "" : mainTag);
    };

    /**
     * Handles the restart action to reset all filters and selections.
     */
    const handleRestart = () => {
        handleDepartmentReset();
        handleSpecializationReset();
        handleMainTagReset();
        setSearchQuery("");
        unselectALL();
    };

    // Options for the graph
    const options = {
        edges: {
            color: "#000000",
            smooth: {
                type: "cubicBezier",
                roundness: 0.7
            },
            chosen: false
        },
        height: "800px",
        nodes: {
            shape: "circle",
            borderWidth: 4,
            shadow: true,
            font: {
                size: 15,
                face: "monospace"
            },
            size: 20,
        },
        interaction: {
            multiselect: true,
            hover: true,
            navigationButtons: true,
            zoomView: false
        },
        physics: {
            solver: "forceAtlas2Based",
            wind: { x: 0, y: 0 },
            forceAtlas2Based: {
                gravitationalConstant: -100,
                springLength: 50,
                theta: 0.3,
                springConstant: 0.3
            },
        },
    };

    /**
     * Sets the network instance.
     * @param {any} networkInstance - The network instance.
     */
    const handleGetNetwork = (networkInstance: any) => {
        setNetwork(networkInstance);
    };

    const events = {
        hoverNode: ({ event, node }: { event: MouseEvent, node: any }) => {
            if (network) {
                setHoveredNode(node);
                const neighbors = graph1.edges
                    .filter((edge: any) => edge.from === node || edge.to === node)
                    .map((edge: any) => (edge.from === node ? edge.to : edge.from));
                setHighlightedNodes([...neighbors, node]);

                const hoveredNode = graph1.nodes.find((n: any) => n.id === node);
                const popupContent = hoveredNode ? hoveredNode.name : '';

                const popupElement = document.getElementById('custom-popup');
                if (popupElement && event) {
                    const offset = -100;
                    popupElement.innerHTML = `<div>${popupContent}</div>`;
                    popupElement.style.left = `${event.pageX + offset}px`;
                    popupElement.style.top = `${event.pageY + offset}px`;
                    popupElement.style.display = 'block';
                }
            }
        },
        blurNode: () => {
            setHoveredNode(null);
            setHighlightedNodes([]);

            const popupElement = document.getElementById('custom-popup');
            if (popupElement) {
                popupElement.style.display = 'none';
            }
        },
    };

    /**
     * Handles the key down event for focusing on the search input.
     * @param {KeyboardEvent} event - The keyboard event.
     */
    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
            event.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    };

    /**
     * Handles the change in the search input.
     * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
     */
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    /**
     * Adds event listener for focusing on search input.
     */
        useEffect(() => {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }, []);
    
        /**
         * Closes the dialog and resets selected node.
         */
        const closeDialog = () => {
            setSelectedNode(null);
            setIsDialogOpen(false);
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
                    handleSearchChange={handleSearchChange}
                    handleRestart={handleRestart}
                    searchQuery={searchQuery}
                />
                <div className="graph-and-legend-container">
                    <div className="graph-wrapper">
                        <Graph
                            graph={filteredGraph}
                            options={options}
                            events={events}
                            getNetwork={handleGetNetwork}
                        />
                        <div id="custom-popup" className="custom-popup" style={{ display: 'none' }} />
                        {selectedNode && (
                            <div className="dialog">
                                <Dialog node={selectedNode} onClose={closeDialog} onMainTagClick={handleMainTagClick} />
                            </div>
                        )}
                    </div>
                    <div className="legend-wrapper">
                        <LegendGraphView />
                    </div>
                </div>
                <ComparisonDialog
                    nodes={selectedNodes}
                    onClose={handleCloseComparismDialog}
                    onMainTagClick={(mainTag: string) => {
                        setMainTagFilterValue(mainTag);
                        handleCloseComparismDialog();
                    }}
                />
            </div>
        );
    }
    
    export default GraphView;
    
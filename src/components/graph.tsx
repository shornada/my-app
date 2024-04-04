import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graph1 } from "../data/graphData";
import ComparisonDialog from "./comparisomDialog";
import Dialog from "./dialog";
import FilterComponent from "./filters";
import LegendGraphView from "./graphLegend";

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
        if (network) {
            const selectedNodes = getSelectedNodes();
            setSelectedNodes(selectedNodes);
        }
    }, [selectedNodes]); // Listen for changes in network instance

    const handleOpenComparisonDialog = () => {
        const selectedNodes = getSelectedNodes();
        setSelectedNodes(selectedNodes);
        setIsDialogOpen(true);
    };

    const handleCloseComparismDialog = () => {
        setIsDialogOpen(false);
        // if (network) {
        //     network.unselectAll();
        // }
    };

    const getSelectedNodes = () => {
        if (network) {
            const selectedNodes = network.getSelectedNodes();
            return selectedNodes; 
        }
        return [];
    };

    useEffect(() => {
        filterNodes();
    }, [departmentFilterValue, specializationFilterValue, mainTagFilterValue, searchQuery]);

    useEffect(() => {
        return () => {
            setFilteredGraph(graph1);
        };
    }, []);

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
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    const handleMainTagClick = (mainTag: string) => {
        setMainTagFilterValue(mainTag);
        filterNodes();
        handleCloseDialog();
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

    const handleRestart = () => {
        handleDepartmentReset();
        handleSpecializationReset();
        handleMainTagReset();
        setSearchQuery("");
        if (network) {
            network.unselectAll();
            setIsDialogOpen(false);
        }
    };

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
            navigationButtons: true
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

    const handleGetNetwork = (networkInstance: any) => {
        setNetwork(networkInstance);
    };

    const events = {
        // click: ({ nodes }: { nodes: any }) => {
        //     if (isDialogOpen) {
        //         const popupElement = document.getElementById('custom-popup');
        //         if (popupElement) {
        //             popupElement.style.display = 'none';
        //         }
        //     }
        //     setSelectedNode(nodes.length > 0 ? nodes[0] : null);
        // },
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

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
            event.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const closeDialog = () => {
        setSelectedNode(null);
        setIsDialogOpen(false); // Set dialog state to false when closing
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
            <button onClick={handleOpenComparisonDialog}>Otevřít detail vybraných předmětů</button>
            {isDialogOpen && (
                <ComparisonDialog
                    nodes={selectedNodes}
                    onClose={handleCloseComparismDialog}
                    onMainTagClick={(mainTag: string) => {
                        setMainTagFilterValue(mainTag);
                        handleCloseComparismDialog();
                    }}
                />
            )}
        </div>
    );
}

export default GraphView;
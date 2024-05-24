import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graphLegend } from "../data/graphData"; // Importing legend data


function LegendGraphView() {
    // State for storing network instance
    const [network, setNetwork] = useState<any>(null);
    // State for storing legend graph data
    const [legendGraph, setFilteredGraph] = useState<any>(graphLegend); // Initialize with graphLegend data

    // Options for the graph
    const options = {
        layout: {
            hierarchical: false, 
        },
        edges: {
            color: "#000000", 
        },
        height: "600px", 
        nodes: {
            shape: "circle", 
            borderWidth: 4, 
            shadow: true, 
            size: 20, 
            font: {
                size: 15, 
            },
        },
        interaction: {
            dragNodes: false, 
            dragView: false, 
            zoomView: false, 
            selectable: false, 
        }
    };

    // Function to get network instance
    const handleGetNetwork = (networkInstance: any) => {
        setNetwork(networkInstance);
    };

    return (
        <div className="graph-container">
            <h3>Doporučený semestr</h3>
            {/* Graph component for displaying legend */}
            <Graph
                graph={legendGraph} 
                options={options} 
                getNetwork={handleGetNetwork} 
            />
        </div>
    );
}

export default LegendGraphView;

import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import { graphLegend } from "../data/graphData";
import Dialog from "./dialog";
import FilterComponent from "./filters";
import { CurrentView } from '../App';

function LegendGraphView() {

    const [network, setNetwork] = useState<any>(null);
    const [legendGraph, setFilteredGraph] = useState<any>(graphLegend);




   

    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: "#000000",
        },
        height: "1000px",
        nodes: {
            shape: "circle",
            borderWidth: 4,
            shadow: true,
            font: {
                size: 15,
            },
            size: 20, 
        },
        interaction: {
            hover: true,
        },
    };
    

    const handleGetNetwork = (networkInstance: any) => {
        setNetwork(networkInstance);
    };

    

    return (
        <div className="graph-container">
                    {/* Graph component */}
                    <Graph
                        graph={legendGraph}
                        options={options}
                        getNetwork={handleGetNetwork}
                    />
        </div>
    );
}

export default LegendGraphView;
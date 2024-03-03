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

        interaction:{
            dragNodes:false,
            dragView: false,
            zoomView: false,
            selectable: false,

          }
    };
    

    const handleGetNetwork = (networkInstance: any) => {
        setNetwork(networkInstance);
    };

    

    return (
        <div className="graph-container">
            <h3>Doporučený semestr</h3>
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
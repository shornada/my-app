import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Graph from "react-graph-vis";
import { graph1 } from "../data.ts/graph";
import Dialog from "./dialog";

function GraphView() {
  const [selectedNode, setSelectedNode] = useState<any | null>(null);
  const [nodeFilterValue, setNodeFilterValue] = useState<string>("");
  const [departmentFilterValue, setDepartmentFilterValue] = useState<string>("");

  const originalGraph = graph1;
  const [filteredGraph, setFilteredGraph] = useState<any>(originalGraph);

  // Filter nodes based on age and department
  const filterNodes = () => {
    let filteredNodes = originalGraph.nodes;

    if (nodeFilterValue !== "") {
      filteredNodes = filteredNodes.filter(
        (node: any) => node.age === nodeFilterValue
      );
    }

    if (departmentFilterValue !== "") {
      filteredNodes = filteredNodes.filter(
        (node: any) => node.department === parseInt(departmentFilterValue, 10)
      );
    }

    setFilteredGraph({
      ...originalGraph,
      nodes: filteredNodes,
    });
  };

  useEffect(() => {
    filterNodes();
  }, [departmentFilterValue]); // Run filterNodes when departmentFilterValue changes

  const closeDialog = () => {
    setSelectedNode(null);
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setNodeFilterValue(value);
    filterNodes();
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setDepartmentFilterValue(value);
    // No need to call filterNodes here; it will be called by useEffect
  };

  // Reset the department filter when "All" is selected
  const handleDepartmentReset = () => {
    setDepartmentFilterValue("");
    // No need to call filterNodes here; it will be called by useEffect
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
  };

  const events = {
    select: ({ nodes }: { nodes: any }) => {
      setSelectedNode(nodes[0]);
    },
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            value="kid"
            checked={nodeFilterValue === "kid"}
            onChange={handleCheckboxChange}
          />
          Kid
        </label>
        <label>
          <input
            type="checkbox"
            value="adult"
            checked={nodeFilterValue === "adult"}
            onChange={handleCheckboxChange}
          />
          Adult
        </label>
      </div>

      <div>
        <label>
          Department:
          <select
            value={departmentFilterValue}
            onChange={handleDropdownChange}
          >
            <option value="">All</option>
            {/* Add options for each department dynamically based on data */}
            {Array.from(
              new Set(originalGraph.nodes.map((node: any) => node.department))
            ).map((department) => (
              <option key={department} value={department.toString()}>
                Department {department}
              </option>
            ))}
          </select>
          <button onClick={handleDepartmentReset}>Reset</button>
        </label>
      </div>

      <Graph graph={filteredGraph} options={options} events={events} />

      {selectedNode && (
        <div className="dialog">
          {/* Assuming Dialog is a component that displays information about the selected node */}
          <Dialog node={selectedNode} onClose={closeDialog} />
        </div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<GraphView />, rootElement);

export default GraphView;

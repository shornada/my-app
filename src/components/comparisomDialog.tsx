import React from 'react';
import { BarChart, Bars, Line } from '@rsuite/charts';
import { dialogData, garantsTable } from '../data/dialogData';
import { departments } from '../data/constantsAndEnums';

interface ComparisonDialogProps {
    nodes: number[];
    onClose: () => void;
    onMainTagClick: (mainTag: string) => void;
}

const ComparisonDialog: React.FC<ComparisonDialogProps> = ({ nodes, onClose, onMainTagClick }) => {
    return (
        <div className="comparison-dialog-container">
            {nodes.map((nodeId, index) => {
                const currentNodeData = dialogData.find((item) => item.ID === nodeId);
                if (!currentNodeData) return null;

                const obsahData = currentNodeData.Obsah || [];
                const formattedObsahData: [string, ...number[]][] = obsahData.map((entry) => {
                    if (Array.isArray(entry) && entry.length >= 2 && typeof entry[0] === 'string') {
                        return [entry[0], ...(entry.slice(1) as number[])];
                    }
                    return ['Invalid Entry', 0];
                });

                const sampleData2 = currentNodeData?.SemesterSchedule || null;
                const formattedSampleData: [string, ...number[]][] = sampleData2
                    ? sampleData2.map(([label, ...values]: any[]) => [
                        String(label),
                        ...(values.map(Number) as number[]),
                    ])
                    : [];

                const zaměření = currentNodeData.Zaměření;
                const zaměřeníString = typeof zaměření === 'string' ? zaměření : '';

                const renderZaměřeníTable = (zaměření: any) => {
                    if (typeof zaměření === 'object') {
                        return (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Zaměření</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(zaměření).map(([key, value]) => (
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{value as string}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        );
                    }
                    return null;
                };

                return (
                    <div key={index} className="comparison-dialog">
                        <a href={currentNodeData.Odkaz as string} target="_blank" rel="noopener noreferrer">
                            <h2>
                                {currentNodeData.Název}
                                <i className="fas fa-link"></i>
                            </h2>
                        </a>
                        <div className="modal-content">

                            <ul className="dialog-list">
                                {Object.entries(currentNodeData)
                                    .filter(([key]) => key !== 'Obsah')
                                    .filter(([key]) => key !== 'SemesterSchedule')
                                    .filter(([key]) => key !== 'ID')
                                    .filter(([key]) => key !== 'Název')
                                    .filter(([key]) => key !== 'Odkaz')
                                    .map(([key, value]) => (
                                        <li key={key}>
                                            {key !== 'Zaměření' && <strong>{key}:</strong>}{' '}
                                            {key === 'Kategorie' ? (
                                                <span className="main-tag" onClick={() => onMainTagClick(currentNodeData.Kategorie)}>
                                                    {currentNodeData.Kategorie}
                                                </span>
                                            ) : key === 'Zaměření' ? (
                                                <>
                                                    {zaměřeníString || renderZaměřeníTable(zaměření)}
                                                </>
                                            ) : key === 'Kontaktní osoba' ? (
                                                <>
                                                    {garantsTable[value as keyof typeof garantsTable] ? (
                                                        <a href={garantsTable[value as keyof typeof garantsTable].link} target="_blank" rel="noopener noreferrer">
                                                            {value}
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    ) : (
                                                        <span>{value}</span>
                                                    )}
                                                </>
                                            ) : key === 'Katedra' ? (
                                                <>
                                                    {departments[value as keyof typeof departments] ? (
                                                        <a href={departments[value as keyof typeof departments].link} target="_blank" rel="noopener noreferrer">
                                                            {value} {departments[value as keyof typeof departments].name}
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    ) : (
                                                        <span>{value}</span>
                                                    )}
                                                </>
                                            ) : (
                                                value
                                            )}
                                        </li>
                                    ))}
                            </ul>
                            <h3>Rozvržení obsahu předmětu</h3>
                            <div className="barchart">
                            <BarChart name="Rozvržení obsahu" data={formattedObsahData} yAxis={false}>
                                <Bars name="Nové znalosti" color="#2485C1" stack="A" />
                                <Bars name="Využití znalostí" color="#32A4D4" stack="A" />
                                <Bars name="Rozšíření znalostí" color="#34C3FF" stack="A" />
                            </BarChart>
                            </div>

                            <h3>Náročnost předmětu</h3>
                            <BarChart data={formattedSampleData} yAxis={false}>
                                <Bars barWidth="10px" name="Domácí úkol" color="#33FFAA" stack="A" />
                                <Bars name="Semestrální projekt" color="#33A1FF" stack="A" />
                                <Bars name="Prezentace" color="#7933FF" stack="A" />
                                <Bars name="Zápočtový test" color="#CA33FF" stack="A" />
                                <Bars name="Průběžný test" color="#FF3375" stack="A" />
                                <Line name="Průběžná náročnost" color="red" area />
                            </BarChart>
                            {/* <button onClick={onClose} className="close-button">
                                Zavřít
                            </button> */}
                        </div>
                    </div>
                );
            })}
            {/* <button className="close-button" onClick={onClose}>
                Zavřít
            </button> */}
        </div>
    );
};

export default ComparisonDialog;

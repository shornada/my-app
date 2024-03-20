const firstSemColor = "#e09c41";
const secondtSemColor = "#e0df41";
const thirdSemColor = "#7be041";
const fourthSemColor = "#41e0c9";
const fifthSemColor = "#1460c9";
const sixthSemColor = "#cb4041";

const optionalSemColor = "#808080"

export const graph1 = {
    nodes: [
        // 1. semester
        // 1. semester
        // { id: 0, name: "SIT", title: "node 1 tooltip text", label: "SIT", color: "#e04141", department: 13101 },
        
        { fixed: true, x: -40, y: -80, id: 1, name: "Základy diskrétní matematiky", mainTag: "Matematika", title: "node 1 tooltip text", label: "ZDM", color: firstSemColor, department: 13101, specialization: ["Společné (povinné)"] },
        { fixed: true, x: 100, y: 0, id: 2, name: "Základy softwarových projektů", mainTag: "Analýza", title: "node 2 tooltip text", label: "ZSO", color: firstSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        { fixed: true, x: 40, y: -80, id: 3, name: "Základy algoritmizace", mainTag: "Programování", title: "node 3 tooltip text", label: "ZAL", color: firstSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        { fixed: true, x: -100, y: 0, id: 4, name: "Základy počítačových systémů", mainTag: "Hardware/sítě", title: "node 4 tooltip text", label: "ZPS", color: firstSemColor, department: 13138, specialization: ["Společné (povinné)"] },
        { fixed: true, x: -40, y: 80, id: 5, name: "Základy multimediální tvorby", mainTag: "Multimédia", title: "node 5 tooltip text", label: "ZMT", color: firstSemColor, department: 13139, specialization: ["Společné (povinné)"] },
        { fixed: true, x: 40, y: 80, id: 6, name: "Základy webových aplikací", mainTag: "Programování", title: "node 5 tooltip text", label: "ZWA", color: firstSemColor, department: 13139, specialization: ["Společné (povinné)"] },
      
        // { id: 1, name: "Základy diskrétní matematiky", mainTag: "Matematika", title: "node 1 tooltip text", label: "ZDM", color: firstSemColor, department: 13101, specialization: ["Společné (povinné)"] },
        // { id: 2, name: "Základy softwarových projektů", mainTag: "Analýza", title: "node 2 tooltip text", label: "ZSO", color: firstSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        // { id: 3, name: "Základy algoritmizace", mainTag: "Programování", title: "node 3 tooltip text", label: "ZAL", color: firstSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        // { id: 4, name: "Základy počítačových systémů", mainTag: "Hardware/sítě", title: "node 4 tooltip text", label: "ZPS", color: firstSemColor, department: 13138, specialization: ["Společné (povinné)"] },
        // { id: 5, name: "Základy multimediální tvorby", mainTag: "Multimédia", title: "node 5 tooltip text", label: "ZMT", color: firstSemColor, department: 13139, specialization: ["Společné (povinné)"] },
        // { id: 6, name: "Základy webových aplikací", mainTag: "Programování", title: "node 5 tooltip text", label: "ZWA", color: firstSemColor, department: 13139, specialization: ["Společné (povinné)"] },

        // 2. semester
        {  id: 7, name: "Lineární algebra", mainTag: "Matematika", title: "node 1 tooltip text", label: "LAG", color: secondtSemColor, department: 13101, specialization: ["Společné (povinné)"] },
        {  id: 8, name: "Databázové systémy", mainTag: "Programování", title: "node 1 tooltip text", label: "DBS", color: secondtSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        {  id: 9, name: "Programování v JAVA", mainTag: "Programování", title: "node 1 tooltip text", label: "PJV", color: secondtSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        {  id: 10, name: "Sběr a modelování požadavků", mainTag: "Analýza", title: "node 1 tooltip text", label: "SMP", color: secondtSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        {  id: 11, name: "Testování softwaru", mainTag: "Programování", title: "node 1 tooltip text", label: "TS1", color: secondtSemColor, department: 13136, specialization: ["Společné (povinné)"] },

        // 3. semester
        {  id: 12, name: "Matematická analýza", mainTag: "Matematika", title: "node 1 tooltip text", label: "MAA", color: thirdSemColor, department: 13101, specialization: ["Společné (povinné)"] },
        {  id: 13, name: "Počítačové sítě", mainTag: "Hardware/sítě", title: "node 1 tooltip text", label: "PSI", color: thirdSemColor, department: 13132, specialization: ["Společné (povinné)"] },
        {  id: 14, name: "Objektový návrh a modelování", mainTag: "Programování", title: "node 1 tooltip text", label: "OMO", color: thirdSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        {  id: 15, name: "Programování v C/C++", mainTag: "Programování", title: "node 1 tooltip text", label: "PCC", color: thirdSemColor, department: 13136, specialization: ["Společné (povinné)"] },

        // 4. semester
        {  id: 16, name: "Statistika a pravděpodobnost", mainTag: "Matematika", title: "node 1 tooltip text", label: "PRA", color: fourthSemColor, department: 13101, specialization: ["Společné (povinné)"] },
        {  id: 19, name: "Informační systémy", mainTag: "Analýza", title: "node 1 tooltip text", label: "INS", color: fourthSemColor, department: 13116, specialization: ["Společné (povinné)"] },
        {  id: 17, name: "Datové struktury a algoritmy", mainTag: "Programování", title: "node 1 tooltip text", label: "DSA", color: fourthSemColor, department: 13136, specialization: ["Společné (povinné)"] },
        {  id: 18, name: "Návrh softwarových systémů", mainTag: "Programování", title: "node 1 tooltip text", label: "NSS", color: fourthSemColor, department: 13136, specialization: ["Společné (povinné)"] },

        // 5. semester
        {  id: 20, name: "Kryptografie a síťová bezpečnost", mainTag: "Hardware/sítě", title: "node 1 tooltip text", label: "KSB", color: fifthSemColor, department: 13132, specialization: ["Společné (povinné)"] },
        {  id: 21, name: "Řízení softwarových projektů", mainTag: "Programování", title: "node 1 tooltip text", label: "PM2", color: fifthSemColor, department: 13136, specialization: ["Společné (povinné)"] },

        // 6. semester
        // optional
        {  id: 22, name: "Procesní řízení", mainTag: "Analýza", title: "Procesní řízení", label: "ISP", color: thirdSemColor, department: 13116, specialization: ["Enterprise systémy", "Business informatics"] },
        {  id: 23, name: "Enterprise architektury", mainTag: "Programování", title: "Enterprise architektury", label: "EAR", color: thirdSemColor, department: 13136, specialization: ["Enterprise systémy"] },
        {  id: 24, name: "Vývoj klientských aplikací v Javascriptu", mainTag: "Programování", title: "Vývoj klientských aplikací v Javascriptu", label: "KAJ", color: fourthSemColor, department: 13139, specialization: ["Enterprise systémy", "Business informatics"] },
        {  id: 25, name: "Distribuované systémy a výpočty", mainTag: "Programování", title: "Distribuované systémy a výpočty", label: "DSVA", color: fifthSemColor, department: 13132, specialization: ["Enterprise systémy", "Technologie pro multimédia a VR"] },
        {  id: 26, name: "Principy tvorby mobilních aplikací", mainTag: "Programování", title: "Principy tvorby mobilních aplikací", label: "PDA", color: fourthSemColor, department: 13139, specialization: ["Enterprise systémy", "Business informatics", "Technologie internetu věcí"] },
        {  id: 27, name: "Správa počítačových sítí", mainTag: "Hardware/sítě", title: "Správa počítačových sítí", label: "SPS", color: fourthSemColor, department: 13139, specialization: ["Enterprise systémy"] },
        {  id: 28, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", title: "Pokročilé síťové technologie", label: "PST", color: fifthSemColor, department: 13132, specialization: ["Enterprise systémy"] },
        {  id: 29, name: "Unixové operační systémy", mainTag: "Hardware/sítě", title: "Unixové operační systémy", label: "UOP", color: fifthSemColor, department: 13132, specialization: ["Enterprise systémy"] },
        {  id: 30, name: "Multimedia 1", mainTag: "Multimédia", title: "Multimedia 1", label: "MM1", color: thirdSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 31, name: "Vytváření grafického obsahu", mainTag: "Multimédia", title: "Vytváření grafického obsahu", label: "VGO", color: thirdSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 32, name: "Tvorba virtuálních světů", mainTag: "Multimédia", title: "Tvorba virtuálních světů", label: "TVS", color: fourthSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 33, name: "Virtuální a rozšířená realita", mainTag: "Multimédia", title: "Virtuální a rozšířená realita", label: "VAR", color: fifthSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 34, name: "Multimedia 2", mainTag: "Multimédia", title: "Multimedia 2", label: "MM2", color: fourthSemColor, department: 13137, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 35, name: "Programování grafiky", mainTag: "Programování", title: "Programování grafiky", label: "PGR", color: fourthSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 36, name: "3D modelování", mainTag: "Multimédia", title: "3D modelování", label: "TDM", color: fifthSemColor, department: 13139, specialization: ["Technologie pro multimédia a VR"] },
        {  id: 37, name: "Základy datových analýz", mainTag: "Analýza", title: "Základy datových analýz", label: "ZDA", color: fourthSemColor, department: 13116, specialization: ["Business informatics"] },
        {  id: 38, name: "Metody pro plánování a rozhodování", mainTag: "Analýza", title: "Metody pro plánování a rozhodování", label: "MPR", color: fifthSemColor, department: 13116, specialization: ["Business informatics"] },
        {  id: 39, name: "Tvorba podnikových aplikací", mainTag: "Analýza", title: "Tvorba podnikových aplikací", label: "TPA", color: fifthSemColor, department: 13136, specialization: ["Business informatics"] },
        {  id: 40, name: "Základy podnikání", mainTag: "Analýza", title: "Základy podnikání", label: "ZPD", color: thirdSemColor, department: 13116, specialization: ["Business informatics"] },
        {  id: 41, name: "Finance a podnikání", mainTag: "Analýza", title: "Finance a podnikání", label: "FIP", color: fourthSemColor, department: 13116, specialization: ["Business informatics"] },
        {  id: 42, name: "Komunikační technologie pro IoT", mainTag: "Hardware/sítě", title: "Komunikační technologie pro IoT", label: "KTI", color: thirdSemColor, department: 13132, specialization: ["Technologie internetu věcí"] },
        {  id: 43, name: "Síťové operační systémy", mainTag: "Hardware/sítě", title: "Síťové operační systémy", label: "SOS", color: thirdSemColor, department: 13132, specialization: ["Technologie internetu věcí"] },
        {  id: 44, name: "Návrh systémů IoT", mainTag: "Hardware/sítě", title: "Návrh systémů IoT", label: "NSI", color: fourthSemColor, department: 13137, specialization: ["Technologie internetu věcí"] },
        {  id: 45, name: "Logické systémy a procesory", mainTag: "Hardware/sítě", title: "Logické systémy a procesory", label: "LSP", color: fourthSemColor, department: 13135, specialization: ["Technologie internetu věcí"] },
        {  id: 46, name: "Laboratoře průmyslové elektroniky a senzorů", mainTag: "Hardware/sítě", title: "Laboratoře průmyslové elektroniky a senzorů", label: "LPE", color: fourthSemColor, department: 13138, specialization: ["Technologie internetu věcí"] },
        {  id: 47, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", title: "Pokročilé síťové technologie", label: "ST2", color: fifthSemColor, department: 13132, specialization: ["Technologie internetu věcí"] },
        {  id: 48, name: "Mikrokontroléry", mainTag: "Hardware/sítě", title: "Mikrokontroléry", label: "MK2", color: fifthSemColor, department: 13134, specialization: ["Technologie internetu věcí"] },
        {  id: 49, name: "Návrh vestavných systémů", mainTag: "Hardware/sítě", title: "Návrh vestavných systémů", label: "NVS", color: fifthSemColor, department: 13138, specialization: ["Technologie internetu věcí"] },



    ],

    edges: [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 3 },
        { from: 0, to: 4 },
        { from: 0, to: 5 },
        { from: 0, to: 6 },

        { from: 1, to: 7 },
        { from: 1, to: 16 },

        { from: 2, to: 10 }, //doplněno mnou

        { from: 2, to: 19 },
        { from: 2, to: 21 },
        { from: 2, to: 22 },
        { from: 2, to: 37 },
        { from: 2, to: 39 },


        { from: 3, to: 9 },
        { from: 3, to: 11 },
        { from: 3, to: 15 },

        { from: 6, to: 13},
        { from: 6, to: 20},

        { from: 7, to: 12 },

        { from: 9, to: 14 },
        { from: 9, to: 18 },

        { from: 10, to: 19 },
        { from: 10, to: 22 },


        { from: 14, to: 39 },

        { from: 16, to: 37 },

        { from: 18, to: 39 },

        { from: 22, to: 19 },
        { from: 22, to: 39 },

        { from: 40, to: 19 },
        { from: 40, to: 38 },
        { from: 40, to: 41 },


    ],
};

export const graphLegend = {
    nodes: [
        //legend
        { label: "1. semestr", shape: "dot", x: 30, y: -500, physics: false, id: 1001, color: firstSemColor, fixed: true },
        { label: "2. semestr", shape: "dot", x: 30, y: -400, physics: false, id: 1002, color: secondtSemColor, fixed: true },
        { label: "3. semestr", shape: "dot", x: 30, y: -300, physics: false, id: 1003, color: thirdSemColor, fixed: true },
        { label: "4. semestr", shape: "dot", x: 30, y: -200, physics: false, id: 1004, color: fourthSemColor, fixed: true },
        { label: "5. semestr", shape: "dot", x: 30, y: -100, physics: false, id: 1005, color: fifthSemColor, fixed: true },
        { label: "6. semestr", shape: "dot", x: 30, y: 0, physics: false, id: 1006, color: sixthSemColor, fixed: true },
        { label: "Volitelné", shape: "dot", x: 30, y: 100, physics: false, id: 1007, color: optionalSemColor, fixed: true },


    ],
    edges: [

    ],
}

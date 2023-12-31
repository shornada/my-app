const firstSemColor = "#e09c41";
const secondtSemColor = "#e0df41";
const thirdSemColor = "#7be041";
const fourthSemColor = "#41e0c9";
const fifthSemColor = "#33df41";
const sixthSemColor = "#e0df41";

const optionalSemColor = "#808080"

export const graph1 = {
    nodes: [
        // 1. semester
        // 1. semester
        { id: 0, name: "SIT", title: "node 1 tooltip text", label: "SIT", color: "#e04141", department: 13101 },
        { id: 1, name: "Základy diskrétní matematiky", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "ZDM", color: firstSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 2, name: "Základy softwarových projektů", mainTag: "Analýza", tags: ["Analýza", "Projektové řízení"], title: "node 2 tooltip text", label: "ZSO", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 3, name: "Základy algoritmizace", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 3 tooltip text", label: "ZAL", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 4, name: "Základy počítačových systémů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "node 4 tooltip text", label: "ZPS", color: firstSemColor, department: 13138, specialization: ["mandatory"] },
        { id: 5, name: "Základy multimediální tvorby", mainTag: "Multimédia", tags: ["Multimédia"], title: "node 5 tooltip text", label: "ZMT", color: firstSemColor, department: 13139, specialization: ["mandatory"] },
        { id: 6, name: "Základy webových aplikací", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "node 5 tooltip text", label: "ZWA", color: firstSemColor, department: 13139, specialization: ["mandatory"] },

        // 2. semester
        { id: 7, name: "Lineární algebra", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "LAG", color: secondtSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 8, name: "Databázové systémy", mainTag: "Programování", tags: ["Analýza", "Programování", "Databáze"], title: "node 1 tooltip text", label: "DBS", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 9, name: "Programování v JAVA", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tooltip text", label: "PJV", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 10, name: "Sběr a modelování požadavků", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tooltip text", label: "BSMP", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 11, name: "Testování softwaru", mainTag: "Programování", tags: ["Testování", "Programování"], title: "node 1 tooltip text", label: "TS1", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },

        // 3. semester
        { id: 12, name: "Matematická analýza", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "MAA", color: thirdSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 13, name: "Počítačové sítě", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware"], title: "node 1 tooltip text", label: "PSI", color: thirdSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 14, name: "Objektový návrh a modelování", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tooltip text", label: "OMO", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 15, name: "Programování v C/C++", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tooltip text", label: "PCC", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },

        // 4. semester
        { id: 16, name: "Statistika a pravděpodobnost", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "PRA", color: fourthSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 17, name: "Informační systémy", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tooltip text", label: "INS", color: fourthSemColor, department: 13116, specialization: ["mandatory"] },
        { id: 18, name: "Datové struktury a algoritmy", mainTag: "Programování", tags: ["Programování", "Algoritmizace"], title: "node 1 tooltip text", label: "DSA", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 19, name: "Návrh softwarových systémů", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tooltip text", label: "NSS", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },

        // 5. semester
        { id: 20, name: "Kryptografie a síťová bezpečnost", mainTag: "Hardware/sítě", tags: ["Bezpečnost", "Sítě"], title: "node 1 tooltip text", label: "KSB", color: fifthSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 21, name: "Řízení softwarových projektů", mainTag: "Programování", tags: ["Teamwork", "Programování", "Architektura", "Analýza"], title: "node 1 tooltip text", label: "BPM2", color: fifthSemColor, department: 13136, specialization: ["mandatory"] },

        // 6. semester
        // optional
        { id: 22, name: "Procesní řízení", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "Procesní řízení", label: "ISP", color: optionalSemColor, department: 13116, specialization: ["enterprise", "business"] },
        { id: 23, name: "Enterprise architektury", mainTag: "Programování", tags: ["Architektura", "Programování"], title: "Enterprise architektury", label: "EAR", color: optionalSemColor, department: 13136, specialization: ["enterprise"] },
        { id: 24, name: "Vývoj klientských aplikací v Javascriptu", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "Vývoj klientských aplikací v Javascriptu", label: "KAJ", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business"] },
        { id: 25, name: "Distribuované systémy a výpočty", mainTag: "Programování", tags: ["Algoritmizace", "Optimalizace", "Programování"], title: "Distribuované systémy a výpočty", label: "DSVA", color: optionalSemColor, department: 13132, specialization: ["enterprise", "multimedia"] },
        { id: 26, name: "Principy tvorby mobilních aplikací", mainTag: "Programování", tags: ["Programování", "Analýza", "Mobilní aplikace"], title: "Principy tvorby mobilních aplikací", label: "PDA", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business", "IoT"] },
        { id: 27, name: "Správa počítačových sítí", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Správa počítačových sítí", label: "SPS", color: optionalSemColor, department: 13139, specialization: ["enterprise"] },
        { id: 28, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", label: "PST", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 29, name: "Unixové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Unixové operační systémy", label: "UOP", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 30, name: "Multimedia 1", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 1", label: "MM1", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 31, name: "Vytváření grafického obsahu", mainTag: "Multimédia", tags: ["Multimédia", "Vytváření grafiky", "3D modelování"], title: "Vytváření grafického obsahu", label: "VGO", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 32, name: "Tvorba virtuálních světů", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Tvorba virtuálních světů", label: "TVS", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 33, name: "Virtuální a rozšířená realita", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Virtuální a rozšířená realita", label: "VAR", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 34, name: "Multimedia 2", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 2", label: "MM2", color: optionalSemColor, department: 13137, specialization: ["multimedia"] },
        { id: 35, name: "Programování grafiky", mainTag: "Programování", tags: ["Grafika", "Programování"], title: "Programování grafiky", label: "PGR", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 36, name: "3D modelování", mainTag: "Multimédia", tags: ["Multimédia", "3D modelování"], title: "3D modelování", label: "TDM", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 37, name: "Základy datových analýz", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Základy datových analýz", label: "ZDA", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 38, name: "Metody pro plánování a rozhodování", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Metody pro plánování a rozhodování", label: "MPR", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 39, name: "Tvorba podnikových aplikací", mainTag: "Analýza", tags: ["Procesy", "Analýza"], title: "Tvorba podnikových aplikací", label: "TPA", color: optionalSemColor, department: 13136, specialization: ["business"] },
        { id: 40, name: "Základy podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Základy podnikání", label: "ZPD", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 41, name: "Finance a podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Finance a podnikání", label: "FIP", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 42, name: "Komunikační technologie pro IoT", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware", "IoT"], title: "Komunikační technologie pro IoT", label: "KTI", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 43, name: "Síťové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Síťové operační systémy", label: "SOS", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 44, name: "Návrh systémů IoT", mainTag: "Hardware/sítě", tags: ["Architektura", "Programování", "Analýza", "IoT"], title: "Návrh systémů IoT", label: "NSI", color: optionalSemColor, department: 13137, specialization: ["IoT"] },
        { id: 45, name: "Logické systémy a procesory", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Logické systémy a procesory", label: "LSP", color: optionalSemColor, department: 13135, specialization: ["IoT"] },
        { id: 46, name: "Laboratoře průmyslové elektroniky a senzorů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Laboratoře průmyslové elektroniky a senzorů", label: "LPE", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
        { id: 47, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", label: "ST2", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 48, name: "Mikrokontroléry", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Mikrokontroléry", label: "MK2", color: optionalSemColor, department: 13134, specialization: ["IoT"] },
        { id: 49, name: "Návrh vestavných systémů", mainTag: "Hardware/sítě", tags: ["Hardware", "Architektura", "Programování"], title: "Návrh vestavných systémů", label: "NVS", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
    ],

    edges: [
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 3 },
        { from: 0, to: 4 },
        { from: 0, to: 5 },
        { from: 0, to: 6 },

        { from: 1, to: 7 },

        { from: 2, to: 10 },
        { from: 2, to: 21 },

        { from: 3, to: 9 },
        { from: 3, to: 15 },

        { from: 6, to: 13, dashes: true },
        { from: 6, to: 20, dashes: true },

        { from: 7, to: 12 },

        { from: 9, to: 14 },
        { from: 9, to: 18 },
    ],
};

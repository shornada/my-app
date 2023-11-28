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
        { id: 0, label: "SIT", title: "node 1 tootip text", color: "#e04141", department: 13101 },
        { id: 1, label: "Základy diskrétní matematiky", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tootip text", color: firstSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 2, label: "Základy softwarových projektů", mainTag: "Analýza", tags: ["Analýza", "Projektové řízení"], title: "node 2 tootip text", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 3, label: "Základy algoritmizace", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 3 tootip text", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 4, label: "Základy počítačových systémů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "node 4 tootip text", color: firstSemColor, department: 13138, specialization: ["mandatory"] },
        { id: 5, label: "Základy multimediální tvorby", mainTag: "Multimédia", tags: ["Multimédia"], title: "node 5 tootip text", color: firstSemColor, department: 13139, specialization: ["mandatory"] },
        { id: 6, label: "Základy webových aplikací", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "node 5 tootip text", color: firstSemColor, department: 13139, specialization: ["mandatory"] },

        // 2. semester
        { id: 7, label: "Lineární algebra", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tootip text", color: secondtSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 8, label: "Databázové systémy", mainTag: "Programování", tags: ["Analýza", "Programování", "Databáze"], title: "node 1 tootip text", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 9, label: "Programování v JAVA", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tootip text", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 10, label: "Sběr a modelování požadavků", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tootip text", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 11, label: "Testování softwaru", mainTag: "Programování", tags: ["Testování", "Programování"], title: "node 1 tootip text", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },

        // 3. semester
        { id: 12, label: "Matematická analýza", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tootip text", color: thirdSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 13, label: "Počítačové sítě", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware"], title: "node 1 tootip text", color: thirdSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 14, label: "Objektový návrh a modelování", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tootip text", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 15, label: "Programování v C/C++", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tootip text", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },

        // 4. semester
        { id: 16, label: "Statistika a pravděpodobnost", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tootip text", color: fourthSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 17, label: "Informační systémy", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tootip text", color: fourthSemColor, department: 13116, specialization: ["mandatory"] },
        { id: 18, label: "Datové struktury a algoritmy", mainTag: "Programování", tags: ["Programování", "Algoritmizace"], title: "node 1 tootip text", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 19, label: "Návrh softwarových systémů", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tootip text", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },

        // 5. semester
        { id: 20, label: "Kryptografie a síťová bezpečnost", mainTag: "Hardware/sítě", tags: ["Bezpečnost", "Sítě"], title: "node 1 tootip text", color: fifthSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 21, label: "Řízení softwarových projektů", mainTag: "Programování", tags: ["Teamwork", "Programování", "Architektura", "Analýza"], title: "node 1 tootip text", color: fifthSemColor, department: 13136, specialization: ["mandatory"] },

        // 6. semester
        // optional
        { id: 22, label: "Procesní řízení", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "Procesní řízení", color: optionalSemColor, department: 13116, specialization: ["enterprise", "business"] },
        { id: 23, label: "Enterprise architektury", mainTag: "Programování", tags: ["Architektura", "Programování"], title: "Enterprise architektury", color: optionalSemColor, department: 13136, specialization: ["enterprise"] },
        { id: 24, label: "Vývoj klientských aplikací v Javascriptu", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "Vývoj klientských aplikací v Javascriptu", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business"] },
        { id: 25, label: "Distribuované systémy a výpočty", mainTag: "Programování", tags: ["Algoritmizace", "Optimalizace", "Programování"], title: "Distribuované systémy a výpočty", color: optionalSemColor, department: 13132, specialization: ["enterprise", "multimedia"] },
        { id: 26, label: "Principy tvorby mobilních aplikací", mainTag: "Programování", tags: ["Programování", "Analýza", "Mobilní aplikace"], title: "Principy tvorby mobilních aplikací", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business", "IoT"] },
        { id: 27, label: "Správa počítačových sítí", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Správa počítačových sítí", color: optionalSemColor, department: 13139, specialization: ["enterprise"] },
        { id: 28, label: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 29, label: "Unixové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Unixové operační systémy", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 30, label: "Multimedia 1", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 1", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 31, label: "Vytváření grafického obsahu", mainTag: "Multimédia", tags: ["Multimédia", "Vytváření grafiky", "3D modelování"], title: "Vytváření grafického obsahu", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 32, label: "Tvorba virtuálních světů", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Tvorba virtuálních světů", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 33, label: "Virtuální a rozšířená realita", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Virtuální a rozšířená realita", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 34, label: "Multimedia 2", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 2", color: optionalSemColor, department: 13137, specialization: ["multimedia"] },
        { id: 35, label: "Programování grafiky", mainTag: "Programování", tags: ["Grafika", "Programování"], title: "Programování grafiky", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 36, label: "3D modelování", mainTag: "Multimédia", tags: ["Multimédia", "3D modelování"], title: "3D modelování", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 37, label: "Základy datových analýz", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Základy datových analýz", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 38, label: "Metody pro plánování a rozhodování", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Metody pro plánování a rozhodování", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 39, label: "Tvorba podnikových aplikací", mainTag: "Analýza", tags: ["Procesy", "Analýza"], title: "Tvorba podnikových aplikací", color: optionalSemColor, department: 13136, specialization: ["business"] },
        { id: 40, label: "Základy podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Základy podnikání", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 41, label: "Finance a podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Finance a podnikání", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 42, label: "Komunikační technologie pro IoT", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware", "IoT"], title: "Komunikační technologie pro IoT", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 43, label: "Síťové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Síťové operační systémy", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 44, label: "Návrh systémů IoT", mainTag: "Hardware/sítě", tags: ["Architektura", "Programování", "Analýza", "IoT"], title: "Návrh systémů IoT", color: optionalSemColor, department: 13137, specialization: ["IoT"] },
        { id: 45, label: "Logické systémy a procesory", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Logické systémy a procesory", color: optionalSemColor, department: 13135, specialization: ["IoT"] },
        { id: 46, label: "Laboratoře průmyslové elektroniky a senzorů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Laboratoře průmyslové elektroniky a senzorů", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
        { id: 47, label: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 48, label: "Mikrokontroléry", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Mikrokontroléry", color: optionalSemColor, department: 13134, specialization: ["IoT"] },
        { id: 49, label: "Návrh vestavných systémů", mainTag: "Hardware/sítě", tags: ["Hardware", "Architektura", "Programování"], title: "Návrh vestavných systémů", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
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

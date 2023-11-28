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
        { id: 0, name: "SIT", title: "node 1 tooltip text", label: "B6B01SIT", color: "#e04141", department: 13101 },
        { id: 1, name: "Základy diskrétní matematiky", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "B6B01ZDM", color: firstSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 2, name: "Základy softwarových projektů", mainTag: "Analýza", tags: ["Analýza", "Projektové řízení"], title: "node 2 tooltip text", label: "B6B36ZSO", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 3, name: "Základy algoritmizace", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 3 tooltip text", label: "B0B36ZAL", color: firstSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 4, name: "Základy počítačových systémů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "node 4 tooltip text", label: "B6B38ZPS", color: firstSemColor, department: 13138, specialization: ["mandatory"] },
        { id: 5, name: "Základy multimediální tvorby", mainTag: "Multimédia", tags: ["Multimédia"], title: "node 5 tooltip text", label: "B6B39ZMT", color: firstSemColor, department: 13139, specialization: ["mandatory"] },
        { id: 6, name: "Základy webových aplikací", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "node 5 tooltip text", label: "B6B39ZWA", color: firstSemColor, department: 13139, specialization: ["mandatory"] },

        // 2. semester
        { id: 7, name: "Lineární algebra", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "B6B01LAG", color: secondtSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 8, name: "Databázové systémy", mainTag: "Programování", tags: ["Analýza", "Programování", "Databáze"], title: "node 1 tooltip text", label: "B0B36DBS", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 9, name: "Programování v JAVA", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tooltip text", label: "B0B36PJV", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 10, name: "Sběr a modelování požadavků", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tooltip text", label: "B6B36SMP", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 11, name: "Testování softwaru", mainTag: "Programování", tags: ["Testování", "Programování"], title: "node 1 tooltip text", label: "B6B36TS1", color: secondtSemColor, department: 13136, specialization: ["mandatory"] },

        // 3. semester
        { id: 12, name: "Matematická analýza", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "B6B01MAA", color: thirdSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 13, name: "Počítačové sítě", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware"], title: "node 1 tooltip text", label: "B6B32PSI", color: thirdSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 14, name: "Objektový návrh a modelování", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tooltip text", label: "B6B36OMO", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 15, name: "Programování v C/C++", mainTag: "Programování", tags: ["Algoritmizace", "Programování"], title: "node 1 tooltip text", label: "B6B36PCC", color: thirdSemColor, department: 13136, specialization: ["mandatory"] },

        // 4. semester
        { id: 16, name: "Statistika a pravděpodobnost", mainTag: "Matematika", tags: ["Matematika"], title: "node 1 tooltip text", label: "B6B01PRA", color: fourthSemColor, department: 13101, specialization: ["mandatory"] },
        { id: 17, name: "Informační systémy", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "node 1 tooltip text", label: "B6B16INS", color: fourthSemColor, department: 13116, specialization: ["mandatory"] },
        { id: 18, name: "Datové struktury a algoritmy", mainTag: "Programování", tags: ["Programování", "Algoritmizace"], title: "node 1 tooltip text", label: "B6B36DSA", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },
        { id: 19, name: "Návrh softwarových systémů", mainTag: "Programování", tags: ["Architektura", "Programování", "Analýza"], title: "node 1 tooltip text", label: "B6B36NSS", color: fourthSemColor, department: 13136, specialization: ["mandatory"] },

        // 5. semester
        { id: 20, name: "Kryptografie a síťová bezpečnost", mainTag: "Hardware/sítě", tags: ["Bezpečnost", "Sítě"], title: "node 1 tooltip text", label: "B0M32KSB", color: fifthSemColor, department: 13132, specialization: ["mandatory"] },
        { id: 21, name: "Řízení softwarových projektů", mainTag: "Programování", tags: ["Teamwork", "Programování", "Architektura", "Analýza"], title: "node 1 tooltip text", label: "B6B36PM2", color: fifthSemColor, department: 13136, specialization: ["mandatory"] },

        // 6. semester
        // optional
        { id: 22, name: "Procesní řízení", mainTag: "Analýza", tags: ["Analýza", "Teamwork"], title: "Procesní řízení", label: "B6B16ISP", color: optionalSemColor, department: 13116, specialization: ["enterprise", "business"] },
        { id: 23, name: "Enterprise architektury", mainTag: "Programování", tags: ["Architektura", "Programování"], title: "Enterprise architektury", label: "B6B36EAR", color: optionalSemColor, department: 13136, specialization: ["enterprise"] },
        { id: 24, name: "Vývoj klientských aplikací v Javascriptu", mainTag: "Programování", tags: ["Web", "Programování", "Multimédia"], title: "Vývoj klientských aplikací v Javascriptu", label: "B0B39KAJ", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business"] },
        { id: 25, name: "Distribuované systémy a výpočty", mainTag: "Programování", tags: ["Algoritmizace", "Optimalizace", "Programování"], title: "Distribuované systémy a výpočty", label: "B2M32DSVA", color: optionalSemColor, department: 13132, specialization: ["enterprise", "multimedia"] },
        { id: 26, name: "Principy tvorby mobilních aplikací", mainTag: "Programování", tags: ["Programování", "Analýza", "Mobilní aplikace"], title: "Principy tvorby mobilních aplikací", label: "B6B39PDA", color: optionalSemColor, department: 13139, specialization: ["enterprise", "business", "IoT"] },
        { id: 27, name: "Správa počítačových sítí", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Správa počítačových sítí", label: "B0B39SPS", color: optionalSemColor, department: 13139, specialization: ["enterprise"] },
        { id: 28, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", label: "B2M32PST", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 29, name: "Unixové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Unixové operační systémy", label: "B6B32UOP", color: optionalSemColor, department: 13132, specialization: ["enterprise"] },
        { id: 30, name: "Multimedia 1", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 1", label: "B0B39MM1", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 31, name: "Vytváření grafického obsahu", mainTag: "Multimédia", tags: ["Multimédia", "Vytváření grafiky", "3D modelování"], title: "Vytváření grafického obsahu", label: "BE4B39VGO", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 32, name: "Tvorba virtuálních světů", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Tvorba virtuálních světů", label: "B0B39TVS", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 33, name: "Virtuální a rozšířená realita", mainTag: "Multimédia", tags: ["Multimédia", "VR"], title: "Virtuální a rozšířená realita", label: "B0B39VAR", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 34, name: "Multimedia 2", mainTag: "Multimédia", tags: ["Multimédia"], title: "Multimedia 2", label: "B6B37MM2", color: optionalSemColor, department: 13137, specialization: ["multimedia"] },
        { id: 35, name: "Programování grafiky", mainTag: "Programování", tags: ["Grafika", "Programování"], title: "Programování grafiky", label: "B0B39PGR", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 36, name: "3D modelování", mainTag: "Multimédia", tags: ["Multimédia", "3D modelování"], title: "3D modelování", label: "B6B39TDM", color: optionalSemColor, department: 13139, specialization: ["multimedia"] },
        { id: 37, name: "Základy datových analýz", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Základy datových analýz", label: "B6B16ZDA", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 38, name: "Metody pro plánování a rozhodování", mainTag: "Analýza", tags: ["Analýza", "Data"], title: "Metody pro plánování a rozhodování", label: "B6B16MPR", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 39, name: "Tvorba podnikových aplikací", mainTag: "Analýza", tags: ["Procesy", "Analýza"], title: "Tvorba podnikových aplikací", label: "B0B36TPA", color: optionalSemColor, department: 13136, specialization: ["business"] },
        { id: 40, name: "Základy podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Základy podnikání", label: "B6B16ZPD", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 41, name: "Finance a podnikání", mainTag: "Analýza", tags: ["Analýza", "Podnikání/Finance"], title: "Finance a podnikání", label: "B6B16FIP", color: optionalSemColor, department: 13116, specialization: ["business"] },
        { id: 42, name: "Komunikační technologie pro IoT", mainTag: "Hardware/sítě", tags: ["Sítě", "Hardware", "IoT"], title: "Komunikační technologie pro IoT", label: "B0B32KTI", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 43, name: "Síťové operační systémy", mainTag: "Hardware/sítě", tags: ["Sítě", "Linux"], title: "Síťové operační systémy", label: "B6B32SOS", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 44, name: "Návrh systémů IoT", mainTag: "Hardware/sítě", tags: ["Architektura", "Programování", "Analýza", "IoT"], title: "Návrh systémů IoT", label: "B0B37NSI", color: optionalSemColor, department: 13137, specialization: ["IoT"] },
        { id: 45, name: "Logické systémy a procesory", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Logické systémy a procesory", label: "B0B35LSP", color: optionalSemColor, department: 13135, specialization: ["IoT"] },
        { id: 46, name: "Laboratoře průmyslové elektroniky a senzorů", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Laboratoře průmyslové elektroniky a senzorů", label: "B3B38LPE", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
        { id: 47, name: "Pokročilé síťové technologie", mainTag: "Hardware/sítě", tags: ["Sítě"], title: "Pokročilé síťové technologie", label: "B6B32ST2", color: optionalSemColor, department: 13132, specialization: ["IoT"] },
        { id: 48, name: "Mikrokontroléry", mainTag: "Hardware/sítě", tags: ["Hardware"], title: "Mikrokontroléry", label: "B6B34MK2", color: optionalSemColor, department: 13134, specialization: ["IoT"] },
        { id: 49, name: "Návrh vestavných systémů", mainTag: "Hardware/sítě", tags: ["Hardware", "Architektura", "Programování"], title: "Návrh vestavných systémů", label: "B4B38NVS", color: optionalSemColor, department: 13138, specialization: ["IoT"] },
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

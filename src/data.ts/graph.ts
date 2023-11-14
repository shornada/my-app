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
        { id: 0, label: "SIT", title: "node 1 tootip text", color: "#e04141", age: "kid", department: 13101 },
        { id: 1, label: "Základy diskrétní matematiky", title: "node 1 tootip text", color: firstSemColor, age: "kid", department: 13101 },
        { id: 2, label: "Základy softwarových projektů", title: "node 2 tootip text", color: firstSemColor, age: "kid", department: 13136 },
        { id: 3, label: "Základy algoritmizace", title: "node 3 tootip text", color: firstSemColor, age: "kid", department: 13136 },
        { id: 4, label: "Základy počítačových systémů", title: "node 4 tootip text", color: firstSemColor, age: "kid", department: 13138 },
        { id: 5, label: "Základy multimediální tvorby", title: "node 5 tootip text", color: firstSemColor, age: "kid", department: 13139 },
        { id: 6, label: "Základy webových aplikací", title: "node 5 tootip text", color: firstSemColor, age: "kid", department: 13139 },

        // 2. semester
        { id: 7, label: "Lineární algebra", title: "node 1 tootip text", color: secondtSemColor, age: "kid", department: 13101 },
        { id: 8, label: "Databázové systémy", title: "node 1 tootip text", color: secondtSemColor, age: "kid", department: 13136 },
        { id: 9, label: "Programování v JAVA", title: "node 1 tootip text", color: secondtSemColor, age: "kid", department: 13136 },
        { id: 10, label: "Sběr a modelování požadavků", title: "node 1 tootip text", color: secondtSemColor, age: "kid", department: 13136 },
        { id: 11, label: "Testování softwaru", title: "node 1 tootip text", color: secondtSemColor, age: "kid", department: 13136 },

        // 3. semester
        { id: 12, label: "Matematická analýza", title: "node 1 tootip text", color: thirdSemColor, age: "kid", department: 13101 },
        { id: 13, label: "Počítačové sítě", title: "node 1 tootip text", color: thirdSemColor, age: "kid", department: 13132 },
        { id: 14, label: "Objektový návrh a modelování", title: "node 1 tootip text", color: thirdSemColor, age: "kid", department: 13136 },
        { id: 15, label: "Programování v C/C++", title: "node 1 tootip text", color: thirdSemColor, age: "kid", department: 13136 },

        // 4. semester
        { id: 16, label: "Statistika a pravděpodobnost", title: "node 1 tootip text", color: fourthSemColor, age: "kid", department: 13101 },
        { id: 17, label: "Informační systémy", title: "node 1 tootip text", color: fourthSemColor, age: "kid", department: 13116 },
        { id: 18, label: "Datové struktury a algoritmy", title: "node 1 tootip text", color: fourthSemColor, age: "kid", department: 13136 },
        { id: 19, label: "Návrh softwarových systémů", title: "node 1 tootip text", color: fourthSemColor, age: "kid", department: 13136 },

        // 5. semester
        { id: 20, label: "Kryptografie a síťová bezpečnost", title: "node 1 tootip text", color: fifthSemColor, age: "kid", department: 13132 },
        { id: 21, label: "Řízení softwarových projektů", title: "node 1 tootip text", color: fifthSemColor, age: "kid", department: 13136 },

        // 6. semester
        // optional
        { id: 22, label: "B6B16ISP", title: "Procesní řízení", color: optionalSemColor, age: "kid", department: 13116 },
        { id: 23, label: "B6B36EAR", title: "Enterprise architektury", color: optionalSemColor, age: "kid", department: 13136 },
        { id: 24, label: "B0B39KAJ", title: "Vývoj klientských aplikací v Javascriptu", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 25, label: "B2M32DSVA", title: "Distribuované systémy a výpočty", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 26, label: "B6B39PDA", title: "Principy tvorby mobilních aplikací", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 27, label: "B0B39SPS", title: "Správa počítačových sítí", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 28, label: "B2M32PST", title: "Pokročilé síťové technologie", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 29, label: "B6B32UOP", title: "Unixové operační systémy", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 30, label: "B0B39MM1", title: "Multimedia 1", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 31, label: "BE4B39VGO", title: "Vytváření grafického obsahu", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 32, label: "B0B39TVS", title: "Tvorba virtuálních světů", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 33, label: "B0B39VAR", title: "Virtuální a rozšířená realita", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 34, label: "B6B37MM2", title: "Multimedia 2", color: optionalSemColor, age: "kid", department: 13137 },
        { id: 35, label: "B0B39PGR", title: "Programování grafiky", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 36, label: "B6B39TDM", title: "3D modelování", color: optionalSemColor, age: "kid", department: 13139 },
        { id: 37, label: "B6B16ZDA", title: "Základy datových analýz", color: optionalSemColor, age: "kid", department: 13116 },
        { id: 38, label: "B6B16MPR", title: "Metody pro plánování a rozhodování", color: optionalSemColor, age: "kid", department: 13116 },
        { id: 39, label: "B0B36TPA", title: "Tvorba podnikových aplikací", color: optionalSemColor, age: "kid", department: 13136 },
        { id: 40, label: "B6B16ZPD", title: "Základy podnikání", color: optionalSemColor, age: "kid", department: 13116 },
        { id: 41, label: "B6B16FIP", title: "Finance a podnikání", color: optionalSemColor, age: "kid", department: 13116 },
        { id: 42, label: "B0B32KTI", title: "Komunikační technologie pro IoT", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 43, label: "B6B32SOS", title: "Síťové operační systémy", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 44, label: "B0B37NSI", title: "Návrh systémů IoT", color: optionalSemColor, age: "kid", department: 13137 },
        { id: 45, label: "B0B35LSP", title: "Logické systémy a procesory", color: optionalSemColor, age: "kid", department: 13135 },
        { id: 46, label: "B3B38LPE", title: "Laboratoře průmyslové elektroniky a senzorů", color: optionalSemColor, age: "kid", department: 13138 },
        { id: 47, label: "B6B32ST2", title: "Pokročilé síťové technologie", color: optionalSemColor, age: "kid", department: 13132 },
        { id: 48, label: "B6B34MK2", title: "Mikrokontroléry", color: optionalSemColor, age: "kid", department: 13134 },
        { id: 49, label: "B4B38NVS", title: "Návrh vestavných systémů", color: optionalSemColor, age: "kid", department: 13138 }
      
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

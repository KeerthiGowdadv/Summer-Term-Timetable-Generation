// src/App.js
// Clean version — NO image, NO external files.

import React from "react";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const COLUMNS = [
  { key: "9:00am-11:00am", label: "9:00am-11:00am" },
  { key: "11:00am-1:00pm", label: "11:00am-1:00pm" },
  { key: "Lunch Break", label: "Lunch Break" },
  { key: "2:00pm-4:00pm", label: "2:00pm-4:00pm" },
];

// Your full timetable data
const TIMETABLE = {
  "Monday|9:00am-11:00am": [
    "ECE2007-A : F1, F2 ; R1",
    "ECE2007-B : F3, F4 ; R2",
    "ECE2007-C : F5, F6 ; R3",
    "CSE3078-A : F7, F8 ; R4",
    "CSE2010-A : F9, F10 ; R5",
    "CSE3150-A : F11, F12 ; R6",
  ],
  "Monday|11:00am-1:00pm": [
    "MAT1002-A : F13, F14 ; R1",
    "MAT1002-B : F15, F16 ; R2",
    "MAT1002-C : F17, F18 ; R3",
    "CSE3082-A : F19, F20 ; R4",
    "CSE2015-A : F21, F22 ; R5",
    "LAW1007-A : F99, F100 ; R5",
  ],
  "Monday|Lunch Break": [],

  "Monday|2:00pm-4:00pm": [
    "CSE2014-A : F25, F26 ; R1",
    "CSE2014-B : F27, F28 ; R2",
    "MAT2003-A : F29, F30 ; R3",
    "CIV1008-A : F31, F32 ; R4",
    "DES1146-A : F33, F34 ; R5",
  ],

  // Other days (same as before)...
  "Tuesday|9:00am-11:00am": [
    "CSE2007-A : F35, F36 ; R1",
    "CSE2007-B : F37, F38 ; R2",
    "MEC1006-A : F39, F40 ; R3",
    "MEC1006-B : F41, F42 ; R4",
  ],
  "Tuesday|11:00am-1:00pm": [
    "CSE2009-A : F43, F44 ; R1",
    "CSE2009-B : F45, F46 ; R2",
    "MAT1003-A : F47, F48 ; R3",
    "PPS4006-A : F49, F50 ; R4",
  ],
  "Tuesday|Lunch Break": [],

  "Tuesday|2:00pm-4:00pm": [
    "CSE2001-A : F51, F52 ; R1",
    "CSE2001-B : F53, F54 ; R2",
    "CSE2001-C : F55, F56 ; R3",
    "CSE3151-A : F57, F58 ; R4",
    "CSE1006-A : F59, F60 ; R5",
    "CSE1006-B : F61, F62 ; R6",
    "MGT2021-A : F63, F64 ; R7",
  ],
  "Wednesday|9:00am-11:00am": [
    "MGT2020-A : F65, F66 ; R1",
    "MGT2020-B : F67, F68 ; R2",
    "MAT1001-A : F69, F70 ; R3",
    "MAT1001-B : F71, F72 ; R4",
    "EEE1007-A : F73, F74 ; R5",
  ],
  "Wednesday|11:00am-1:00pm": [
    "CSE2018-A : F75, F76 ; R1",
    "PPS4002-A : F77, F78 ; R2",
    "PPS4002-B : F79, F80 ; R3",
    "ECE1001-A : F81, F82 ; R4",
    "ECE2010-A : F83, F84 ; R5",
  ],
  "Wednesday|2:00pm-4:00pm": [
    "CSE2074-A : F85, F86 ; R1",
    "PPS1001-A : F87, F88 ; R2",
    "CSE2013-A : F89, F90 ; R3",
  ],

  "Thursday|9:00am-11:00am": [
    "CSE1005-A : F91, F92 ; R1",
    "CSE1005-B : F93, F94 ; R2",
    "CSE2067-A : F95, F96 ; R3",
    "CSE3075-A : F97, F98 ; R4",
    "LAW1007-A : F99, F100 ; R5",
    "CSE3348-A : F101, F102 ; R6",
  ],
  "Thursday|11:00am-1:00pm": [
    "CSE2011-A : F103, F104 ; R1",
    "CSE2011-B : F105, F106 ; R2",
    "ENG2001-A : F107, F108 ; R3",
    "PPS4005-A : F109, F110 ; R4",
  ],
  "Thursday|2:00pm-4:00pm": [
    "CSE2021-A : F111, F112 ; R1",
    "CSE2066-A : F113, F114 ; R2",
    "CSE1004-A : F115, F116 ; R3",
  ],

  "Friday|9:00am-11:00am": [
    "MAT2004-A : F117, F118 ; R1",
    "ECE2011-A : F119, F120 ; R2",
    "PHY1002-A : F121, F122 ; R3",
  ],
  "Friday|11:00am-1:00pm": [
    "CSE1001-A : F123, F124 ; R1",
    "CSE3001-A : F125, F126 ; R2",
  ],
  "Friday|2:00pm-4:00pm": [
    "PPS1011-A : F127, F128 ; R1",
    "CSE2027-A : F129, F130 ; R2",
  ],
};


function Cell({ items }) {
  if (items.length === 0) {
    return <div style={{ color: "gray", fontStyle: "italic" }}>Lunch Break</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((text, i) => (
        <div
          key={i}
          style={{
            background: "#f2f3f5",
            padding: "6px 8px",
            borderRadius: 6,
            border: "1px solid #dcdfe2",
            fontSize: 13,
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial", background: "#f2f4f7", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: 20 }}>SUMMER-TERM TIMETABLE</h1>

      <div style={{ overflowX: "auto", background: "white", padding: 16, borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#e8edf2" }}>
              <th style={{ padding: 10, textAlign: "left" }}>Day</th>
              {COLUMNS.map((col) => (
                <th key={col.key} style={{ padding: 10, textAlign: "left" }}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {DAYS.map((day) => (
              <tr key={day} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={{ padding: 10, fontWeight: "bold" }}>{day}</td>

                {COLUMNS.map((col) => {
                  const key = `${day}|${col.key}`;
                  const items = TIMETABLE[key] || [];
                  return (
                    <td key={key} style={{ padding: 10, verticalAlign: "top", minWidth: 200 }}>
                      <Cell items={items} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

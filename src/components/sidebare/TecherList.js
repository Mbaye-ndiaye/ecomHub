// import React from "react";
// import img from "../../assets/imgShop.jpg";
// const teachers = [
//   {
//     image: img,
//     name: "Dos Snatos",
//     duration: "medine",
//     const: "",
//   },
// ];

// const TeachersList = () => {
//   return (
//     <div>
//       <div className="flex my-[2rem] mx-0 justify-between">
//         <h2 className="text-xl text-[#526d82]">Boutiques</h2>
//         <select className="rounded border-0 py-[8px] px-[12px] border-1 boder-[#dde6ed] text-[#526d82]">
//           <option value="boutique1">Boutique1</option>
//           <option value="boutique2">Boutique2</option>
//         </select>
//       </div>
//       <div className="flex flex-col gap-[15px]">
//         {teachers.map((bout) => (
//           <div className="flex pr-[10px] items-center justify-between hover:bg-[#dde6ed] hover:rounded">
//             <div className="flex items-center gap-[20px] text-[#526d82]">
//               <img
//                 src={bout.image}
//                 alt="/"
//                 className="w-[50px] h-[50px] bg-[#dde6ed] rounded-full"
//               />
//               <h2>{bout.name}</h2>
//             </div>
//             <span>{bout.duration}</span>
//             <span>{bout.const}</span>
//             <span>:</span>
//           </div>
//         ))}
//       </div>

//       <div className="flex my-[2rem] mx-0 justify-between">
//         <h2 className="text-xl text-[#526d82]">Boutiques</h2>
//         <select className="rounded border-0 py-[8px] px-[12px] border-1 boder-[#dde6ed] text-[#526d82]">
//           <option value="boutique1">Boutique1</option>
//           <option value="boutique2">Boutique2</option>
//         </select>
//       </div>
//       <div className="flex flex-col gap-[15px]">
//         {teachers.map((bout) => (
//           <div className="flex pr-[10px] items-center justify-between hover:bg-[#dde6ed] hover:rounded">
//             <div className="flex items-center gap-[20px] text-[#526d82]">
//               <img
//                 src={bout.image}
//                 alt="/"
//                 className="w-[50px] h-[50px] bg-[#dde6ed] rounded-full"
//               />
//               <h2>{bout.name}</h2>
//             </div>
//             <span>{bout.duration}</span>
//             <span>{bout.const}</span>
//             <span>:</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeachersList;

import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function TeachersList() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default TeachersList;

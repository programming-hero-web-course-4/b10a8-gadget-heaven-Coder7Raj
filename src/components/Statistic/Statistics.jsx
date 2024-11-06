import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "Laptop", Price: 1350, Total: 80, Rating: 4.5 },
  { name: "Phone", Price: 790, Total: 75, Rating: 4.8 },
  { name: "Ear Pods", Price: 580, Total: 70, Rating: 4.2 },
  { name: "Smart Watch", Price: 375, Total: 65, Rating: 4.7 },
];

const Statistics = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3 className="font-bold text-xl mt-4 mb-10">Statistics</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Price" fill="#8e24aa" barSize={20}>
            <LabelList dataKey="Price" position="top" />
          </Bar>
          <LineChart>
            <Line
              type="monotone"
              dataKey="Total"
              stroke="#d1c4e9"
              strokeWidth={5}
              dot={false}
            />
          </LineChart>
          <Bar dataKey="Rating" fill="#f44336" barSize={5}>
            <LabelList dataKey="Rating" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;

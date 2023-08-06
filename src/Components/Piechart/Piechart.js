import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { api } from "../../api";
import "./piechart.css";
const Piechart = () => {
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
          fontWeight="700"
        >
          {payload.name.toUpperCase()}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#fff"
        >
          {payload.name === "total24hVolume" ||
          payload.name === "totalMarketCap"
            ? "$" +
              Intl.NumberFormat("en", {
                notation: "compact",
                compactDisplay: "long",
              }).format(value)
            : value.toLocaleString("en-US")}
        </text>
      </g>
    );
  };

  const [pieIndex, setPieIndex] = useState(0);
  const [crypApi, setCrypApi] = useState([]);
  useEffect(() => {
    try {
      api(20).then((el) => {
        setCrypApi(el.data.stats);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const COLORS = [
    "#1976D2",
    "#2196F3",
    "#1976D2",
    "#2196F3",
    "#1976D2",
    "#2196F3",
  ];
  let arr2 = [];
  let obj2 = {};
  for (let i in crypApi) {
    arr2.push({
      ...obj2,
      name: i,
      value: Number(crypApi[i]),
    });
  }
  arr2.shift();
  function test(e, index) {
    setPieIndex(index);
  }
  return (
    <div className="pieCnt">
      <PieChart width={500} height={300}>
        <Pie
          activeIndex={pieIndex}
          activeShape={renderActiveShape}
          data={arr2}
          cx={230}
          cy={160}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          minAngle={45}
          onMouseEnter={test}
        >
          {arr2.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Piechart;

import "./card.css";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";
function Card({ coinData }) {
  let arr = [];
  let obj = {};
  for (let i = 0; i < 16; i++) {
    arr.push({ ...obj, price: coinData.sparkline[i], name: "data" });
  }
  return (
    <div className="card_cnt" id="card_cnt">
      <div className="left_dv">
        <div className="coin_icon">
          <img src={coinData.iconUrl} alt={coinData.symbol} />
          <span>{coinData.symbol}</span>
        </div>
        <div className="coin_name">{coinData.name}</div>
        <div className="coin_price">$ {Number(coinData.price).toFixed(2)}</div>
      </div>
      <div className="right_dv">
        <div
          className="coin_ch_per"
          style={{ color: coinData.change > 0 ? "#00B053" : "#EB0A25" }}
        >
          {coinData.change > 0 ? "+" + coinData.change : coinData.change}%
        </div>
        <div className="chart_div">
          <ResponsiveContainer width="99%" height="70%">
            <LineChart data={arr}>
              <Line
                type="monotone"
                dataKey="price"
                stroke={coinData.change > 0 ? "#00B053" : "#EB0A25"}
                strokeWidth={2}
                fill={coinData.change > 0 ? "#00B053" : "#EB0A25"}
                dot={false}
              />
              <YAxis tick={false} hide domain="auto" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Card;

import { useState, useEffect, useContext } from "react";
import "./table.css";
import { api } from "../../api";
import { TableContext } from "../../Context/tableContext";

const Table = () => {
  const {
    tableState: { data },
  } = useContext(TableContext);
  const [crypApi, setCrypApi] = useState([]);
  useEffect(() => {
    try {
      api(50).then((el) => {
        setCrypApi(el.data.coins);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    setCrypApi(data);
  }, [data]);
  return (
    <div id="table_container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {crypApi.length > 0 ? (
            crypApi.map((el, i) => {
              return (
                <tr key={i}>
                  <td>
                    <img src={el.iconUrl} alt={el.symbol} />
                  </td>
                  <td>{el.name}</td>
                  <td>${Number(el.price).toLocaleString("en-US")}</td>
                  <td>
                    $
                    {Intl.NumberFormat("en", {
                      notation: "compact",
                      compactDisplay: "long",
                    }).format(Number(el.marketCap))}
                  </td>
                  <td>
                    <div
                      style={{
                        color: el.change > 0 ? "#00B053" : "#EB0A25",
                      }}
                    >
                      {el.change > 0 ? "+" + el.change : el.change}%
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td> - </td>
              <td> - </td>
              <td style={{ textAlign: "center", color: "white" }}>
                Loading...
              </td>
              <td> - </td>
              <td> - </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

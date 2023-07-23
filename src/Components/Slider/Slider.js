import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./slider.css";
import { register } from "swiper/element/bundle";
register();

function Slider() {
  let [fetchData, setFetchData] = useState([]);
  let loadApi = async () => {
    const options = {
      headers: {
        "x-access-token":
          "coinranking6a40593da1e7dbe46d7730c04ad819d3cb05dc836d334a85",
      },
    };
    let data = await fetch(
      "https://api.coinranking.com/v2/coins?limit=10",
      options
    );
    let response = await data.json();
    setFetchData(response.data.coins);
  };
  useEffect(() => {
    loadApi();
  }, []);
  return (
    <div className="slide_cnt" virtual="true">
      {fetchData.length > 0 ? (
        <swiper-container
          slides-per-view="3"
          space-between="30"
          speed="800"
          delay="4000"
          loop="true"
          autoplay="true"
          navigation="true"
        >
          {fetchData.map((el, i) => {
            return (
              <swiper-slide
                key={i}
                style={{
                  boxShadow:
                    "4px 4px 10px rgba(0,0,0,0.4),-4px -4px 10px rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  marginLeft: "30px",
                }}
              >
                <Card coinData={el} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      ) : (
        console.log(fetchData)
      )}
    </div>
  );
}

export default Slider;

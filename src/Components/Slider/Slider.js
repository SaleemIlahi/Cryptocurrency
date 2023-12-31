import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./slider.css";
import { register } from "swiper/element/bundle";
import { api } from "../../api";
register();

function Slider() {
  const [crypApi, setCrypApi] = useState([]);
  useEffect(() => {
    try {
      api(20).then((el) => {
        setCrypApi(el.data.coins);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="slide_cnt" virtual="true">
      {crypApi.length > 0 ? (
        <swiper-container
          slides-per-view="3"
          space-between="30"
          speed="800"
          delay="4000"
          loop="true"
          autoplay="true"
          navigation="true"
        >
          {crypApi.map((el, i) => {
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
        <h4 style={{ textAlign: "center", color: "white" }}>Loading...</h4>
      )}
    </div>
  );
}

export default Slider;

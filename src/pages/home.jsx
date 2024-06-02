import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomeRepository from "../repositories/HomeRepository";
import Navbar from '../layout/base/Navbar'

export default function Home() {
  const [apiData, setApiData] = useState([]);
  const [logo, setLogo] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await HomeRepository.getData();
    if (res) {
      console.log(res, "dfbjbkjnkj")
      setApiData(res.features)
      setLogo(res.logo)
    }
  };

  let colour = ['green', 'orange', 'purple', 'red', 'pink', 'blue']

  return (
    <section className="gridItems">
      <Navbar logo={logo} />
      <div className="container">
        {apiData && apiData.map((data, i) => (
          <div className={`col ${colour[i]}`}>
            <div className="row">
              <div className="partition-left">
                <img src={data.logo} alt="Logo" className="img-res1" />
                <h6>{data.title}</h6>
                <p>{data.desc}</p>
              </div>
              <div className="partition-right">
                <img src={data.image} alt="Logo" className="img-res" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-wrapper">
        <Slider {...settings}>
          {apiData.length > 0 &&
            apiData.map((item, i) => {
              return (
                <div className="slider-items" key={i}>
                  <div className={`col ${colour[i]}`}>
                    <div className="row">
                      <div className="partition-left">
                        <img src={item.logo} alt="Logo" className="img-res1" />
                        <h6>{item.title}</h6>
                        <p>{item.desc}</p>
                      </div>
                      <div className="partition-right">
                        <img src={item.image} alt="Logo" className="img-res" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section >


  );
}

import { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fatchData } from "../utilits";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/testimonial.json"));
  }, []);
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Reports</span>
<p> Chaoqi Yang, Cheng Qian, Navjot Singh, Cao Xiao, Brandon Westover, Edgar Solomonik, Jimeng Sun; Augmented tensor decomposition with stochastic optimization; arxiv:2106.07900 [math.NA], 39 pages, June 2021 </p>
<p> Yang Gao, Phillip Helms, Garnet Kin-Lic Chan, and Edgar Solomonik; Automatic transformation of irreducible representations for efficient contraction of tensors with cyclic group symmetry; arXiv:20001.08056 [physics.comp-ph], 20 pages, July 2020. </p>
<p> Yifan Zhang and Edgar Solomonik; On stability of tensor networks and canonical forms; arXiv:2001.01191 [math.NA], 24 pages, January 2020.</p>
<p> Edwin Pednault, John A. Gunnels, Giacomo Nannicini, Lior Horesh, Thomas Magerlein, Edgar Solomonik, Erik Draeger, Eric Holland, and Robert Wisnieff; Breaking the 49-qubit barrier in the simulation of quantum circuits; arXiv:1710.05867 [quant-ph], 44 pages, October 2017.</p>
<p> Edgar Solomonik and Torsten Hoefler; Sparse tensor algebra as a parallel programming model arXiv preprint, arXiv:1512.00066 [cs.MS], 20 pages, November 2015.</p>
<p> Edgar Solomonik, Jeff Hammond, and James Demmel; A preliminary analysis of Cyclops Tensor Framework; 12 pages, EECS Department, University of California, Berkeley, March 2012.</p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/2.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/1.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/3.jpg"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/4.jpg"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/5.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/6.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/7.jpg"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
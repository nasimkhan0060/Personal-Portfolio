import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {   
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
          <span>Publications</span>
            <h3>Journals and Articles</h3>
            <h4>Selected Articles in Journals</h4>
    <text>
    <p>1</p><p>&bull; Linjian Ma and Edgar Solomonik; Accelerating alternating least squares for tensor decomposition by pairwise perturbation; Numerical Linear Algebra with Applications (NLAA), 27 pages, 2022, to appear.</p>
    <p>2</p><p>&bull; Navjot Singh, Zecheng Zhang, Xiaoxiao Wu, Naijing Zhang, Siyuan Zhang, and Edgar Solomonik; Distributed-memory tensor completion for generalized loss functions in Python using new sparse tensor kernels; Journal of Parallel and Distributed Computing (JPDC), 29 pages, 2022, to appear.</p>
    <p>3</p><p>&bull; Edgar Solomonik, James Demmel, and Torsten Hoefler; Communication lower bounds of bilinear algorithms for symmetric tensor contractions; SIAM Journal of Scientific Computing (SISC), 28 pages, 2021.</p> 
    <p>4</p><p>&bull;  Navjot Singh, Linjian Ma, Hongru Yang, and Edgar Solomonik. Comparison of accuracy and scalability of Gauss-Newton and alternating least squares for CP decomposition. SIAM Journal of Scientific Computing (SISC), 20 pages, 2021.
    Caleb Ju and Edgar Solomonik; Derivation and analysis of fast bilinear algorithms for convolution; SIAM Review, 34 pages, 2020.</p> </text>
    

    <h4>Articles in Conference Proceedings</h4>
    <p>&bull; Tim Baer, Raghavendra Kanakagiri, and Edgar Solomonik; Parallel minimum spanning forest computation using sparse matrix kernels: SIAM Conference of Parallel Processing for
        Scientific Computing (SIAM PP), 11 pages. February 2022.</p>
        <p>&bull; Linjian Ma and Edgar Solomonik: Fast and accurate randomized algorithms for low-rank tensor decompositions: Conference on Neural Information Processing Systems (NeurIPS), 13 pages, November 2021. Acceptance rate: 27%</p>
        <p>&bull; Chaogi Yang, Navjot Singh, Cao Xiao, Cheng Qian, Edgar Solomonik, Jimeng Sun; MTC: Multiresolution tensor completion from partial and coarse observations; ACM SIGKDD Conference, 11 pages, June 2021.</p>
        <p>&bull; Edward Hutter and Edgar Solomonik; Confidence-based approximation for performance prediction using execution path analysis; IEEE International Parallel and Distributed Processing Symposium (IPDPS), 12 pages, May 2021.</p>
        <p>&bull; Linjian Ma and Edgar Solomonik: Efficient parallel CP decomposition with pairwise perturbation and multi-sweep dimension tree; IEEE International Parallel and Distributed Processing Symposium (IPDPS), 11 pages, May 2021.</p>
        
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
               
              </li>
              <li>
                
              </li>
              <li>
                
              </li>
              <li>
               
              </li>
              <li>
               
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Mockup Shape"
                    data-category="Youtube"
                  >
                   
                  </div>
                  <div className="mobile_title">
                    <h3>Mockup Shape</h3>
                    <span>Youtube</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ave Bottle"
                    data-category="Vimeo"
                  >
                    
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Magic Art"
                    data-category="Soundcloud"
                  >
                    
                  </div>
                  <div className="mobile_title">
                    <h3>Magic Art</h3>
                    <span>Soundcloud</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li>

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Global Evolution"
                    data-category="Detail"
                  >
                   
                  </div>
                  <div className="mobile_title">
                    <h3>Global Evolution</h3>
                    <span>Detail</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

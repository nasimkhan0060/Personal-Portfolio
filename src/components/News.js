import { useEffect, useState } from "react";
import { aTagClick, fatchData } from "../utilits";
import BlogPopUp from "./popup/BlogPopUp";
const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/blog.json"));
    aTagClick();
  }, []);
  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Some other details</span>
            <h3>{`Research Honors`}</h3>
             <p><strong>C.W.</strong> Gear Outstanding Junior Faculty Award <strong>(2021)</strong>.</p>
             <span></span>
             <p><strong>UIUC Dean's</strong> Award for Excellence in Research <strong>(2021)</strong>.</p>
             <span></span>
             <p><strong>UIUC</strong> List of Instructors Ranked as Excellent <strong>(2020)</strong>.</p>
             <span></span>
             <p><strong><em>NSF</em> CAREER</strong> Award <strong>(2020)</strong>.</p>
             <span></span>
             <p><strong>SIAM</strong> Activity Group on Supercomputing Early Career Prize <strong>(2020)</strong>.</p>
             <span></span>
             <p><strong>IEEE-CS</strong><u> Technical Consortium on High Performance Computing </u><em><strong>(TCHPC)</strong></em> Early Career Researchers Award for Excellence in High Performance Computing <strong>(2018)</strong>.</p>
             <span></span>
             <p><strong><em><u>Alston S.</u></em></strong> Householder Prize <strong>(2017)</strong>.</p>
             <span></span>
             <p><strong>ETH Zurich</strong> Postdoctoral Fellowship <strong>(2014)</strong>.</p>
             <span></span>
             <p><strong><em><u>David J. Sakrison</u></em></strong> Memorial Prize <strong>(2014)</strong>.</p>
             <span></span>
             <p><strong>ACM-IEEE</strong> George Michael HPC Fellowship <strong>(2013)</strong>.</p>
             <span></span>
             <p><strong>NERSC</strong> Award for Innovative Use of High Performance Computing <strong>(2013)</strong>.</p>
             <span></span>
             <p><u><strong>Distinguished Paper Award,</strong></u> Euro-Par <strong>(2011)</strong>.</p>
             <span></span>
             <p><strong><en>DOE</en></strong> Computational Science Graduate Fellowship <strong>(2010)</strong>.</p>
             <span></span>
          </div>
          <div className="dizme_tm_main_title" data-align="center">
          <span></span>
          <h3>{`Recent Courses Taught`}</h3>
             <p>CS 450 <strong><em>(CSE 401, ECE 491, MATH 450)</em></strong> - Numerical Analysis.</p>
             <span></span>
             <p>CS 554 <strong><em>(CSE 512)</em></strong> - Parallel Numerical Algorithms.</p>
             <span></span>
             <p><strong><u><em>CS 598 EVS</em></u></strong> - Tensor Computations.</p>
             <span></span>
          </div>
          <div className="dizme_tm_main_title" data-align="center">
          <span></span>
          <h3>{`Documents with details`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/42-29.jpg" alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{blog.category}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default News;

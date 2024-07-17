import React, { useEffect, useState } from 'react'
import image13 from '../../Images/img/image13.jpg'
import image14 from '../../Images/img/image14.jpg'
import image17 from '../../Images/img/image17.jpg'
import image33 from '../../Images/img/image17.jpg'
import image34 from '../../Images/img/image17.jpg'
import image35 from '../../Images/img/image17.jpg'
import axios from 'axios'
const Event = () => {
  const [news, setNews] = useState([])

  const getNews = async () => {
    try {
      let res = await axios.get("https://api.sitarammarriagebureau.com/api/success")
      console.log(res)
      setNews(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNews()
  }, [])
  return (
    <>

      <>

        <section id="blog_h" className="p_3">
          <div className="container-xl mt-5">
            <div className="row story_1 text-center mb-4">
              <div className="col-md-12">
                <span className="col_brown icon_dove fs-2">
                  <i className="fa fa-dove" />
                </span>
                <h1 className="font_50">Latest Weddings  </h1>
              </div>
            </div>
            <div className="row blog_h1">
              {
                news.map((item, index) =>
                  <div className="col-md-4">
                    <div className="blog_hm shadow_box">
                      <div className="blog_hm1 position-relative">
                        <div className="blog_hm1i">
                          <div className="grid clearfix">
                            <figure className="effect-jazz mb-0">
                              <a href="#">
                                <img src={item.image} className="w-100" alt="img25" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div className="blog_hm1i1 p-3 position-absolute top-0">
                          <h6 className="mb-0 d-inline-block bg_brown text-white p-2 px-3 text-center">
                            <span className="fw-bold">{item.date}</span>
                          </h6>
                        </div>
                      </div>
                      <div className="blog_hm2 p-4">
                        <h4>
                          <a href="#">
                            {item.description}
                          </a>
                        </h4>
                        <p>
                          {item.subdescription}
                        </p>

                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </section>
        {/* <div className="center_main position-relative">
    <section id="center" className="pt-5 pb-5 center_o bg_light">
      <div className="container-xl">
        <div className="row center_o1 text-center">
          <div className="col-md-12">
            <h1 className="font_50">Our Events</h1>
            <span className="col_brown icon_dove fs-2">
              <i className="fa fa-dove" />
            </span>
            <ul className="mt-3 mb-0">
              <li className="d-inline-block">
                <a href="#">Home</a>
              </li>
              <li className="d-inline-block mx-2 text-muted">|</li>
              <li className="d-inline-block col_brown"> Our Events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="center_top">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12" />
        </div>
      </div>
    </section>
    <section id="center_bottom">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12" />
        </div>
      </div>
    </section>
  </div>
  <section id="event" className="p_3">
    <div className="container-xl">
      <div className="row event_1">
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image13} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Lorem Porta, New Yok 16 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">LightFox Night Party</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image14} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Eget Dolor, Spain 26 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">Quis And Sem Wedding</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image17} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Nulla Quis, London 19 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">Techohub 2020</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row event_1 mt-4">
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image33} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Lorem Porta, New Yok 16 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">LightFox Night Party</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image34} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Eget Dolor, Spain 26 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">Quis And Sem Wedding</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="event_1l">
            <div className="grid clearfix">
              <figure className="effect-jazz mb-0">
                <a href="/event_detail">
                  <img src={image35} className="w-100" alt="img25" />
                </a>
              </figure>
            </div>
            <div className="event_1li p-4 shadow_box">
              <h6 className="text-muted">Nulla Quis, London 19 Oct 2021</h6>
              <h4 className="mb-0">
                <a href="/event_detail">Techohub 2020</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="pages  text-center  mt-4 row">
        <div className="col-md-12">
          <ul className="mb-0">
            <li>
              <a href="detail.html">
                <i className="fa fa-chevron-left" />
              </a>
            </li>
            <li>
              <a className="act" href="/event_detail">
                1
              </a>
            </li>
            <li>
              <a href="/event_detail">2</a>
            </li>
            <li>
              <a href="/event_detail">3</a>
            </li>
            <li>
              <a href="/event_detail">4</a>
            </li>
            <li>
              <a href="/event_detail">5</a>
            </li>
            <li>
              <a href="/event_detail">6</a>
            </li>
            <li>
              <a href="/event_detail">
                <i className="fa fa-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section> */}
      </>


    </>
  )
}

export default Event
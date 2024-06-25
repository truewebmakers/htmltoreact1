import React , { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Index() {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 120,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        },
      });
    }
  }, []);


  return (
    <>
   <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
          data-aos="zoom-out"
        >
          <h1>Better Solutions For Your Business</h1>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex">
            <a href="#about" className="btn-get-started">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-out"
          data-aos-delay={200}
        >
          <img
            src="assets/img/hero-img.png"
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* /Hero Section */}
  {/* Clients Section */}
  <section id="clients" className="clients section">

  <Swiper
      spaceBetween={50}
      slidesPerView={6}
      loop={true}
      speed={1000}
      autoplay={{ delay: 500 }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 120,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      }}
    >
      <SwiperSlide> <img src="assets/img/clients/client-1.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-2.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-3.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-4.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-5.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-6.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-7.png"  className="img-fluid"  alt="" /></SwiperSlide>
      <SwiperSlide> <img src="assets/img/clients/client-8.png"  className="img-fluid"  alt="" /></SwiperSlide>
        
    </Swiper>
  </section>

 
  {/* /Clients Section */}
  {/* About Section */}
  <section id="about" className="about section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>About Us</h2>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-6 content"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="bi bi-check2-circle" />{" "}
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </span>
            </li>
            <li>
              <i className="bi bi-check2-circle" />{" "}
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </span>
            </li>
            <li>
              <i className="bi bi-check2-circle" />{" "}
              <span>Ullamco laboris nisi ut aliquip ex ea commodo</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.{" "}
          </p>
          <a href="#!" className="read-more">
            <span>Read More</span>
            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
  {/* Why Us Section */}
  <section id="why-us" className="section why-us" data-builder="section">
    <div className="container-fluid">
      <div className="row gy-4">
        <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
          <div
            className="content px-xl-5"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <h3>
              <span>Eum ipsam laborum deleniti </span>
              <strong>velit pariatur architecto aut nihil</strong>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
          <div
            className="faq-container px-xl-5"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="faq-item faq-active">
              <h3>
                <span>01</span> Non consectetur a erat nam at lectus urna duis?
              </h3>
              <div className="faq-content">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span>02</span> Feugiat scelerisque varius morbi enim nunc
                faucibus a pellentesque?
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span>03</span> Dolor sit amet consectetur adipiscing elit
                pellentesque?
              </h3>
              <div className="faq-content">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 why-us-img">
          <img
            src="assets/img/why-us.png"
            className="img-fluid"
            alt=""
            data-aos="zoom-in"
            data-aos-delay={100}
          />
        </div>
      </div>
    </div>
  </section>
  {/* /Why Us Section */}
  {/* Skills Section */}
  <section id="skills" className="skills section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <img src="assets/img/skills.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content">
          <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="skills-content skills-animation">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Photoshop</span> <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Skills Section */}
  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-xl-3 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-activity icon" />
            </div>
            <h4>
              <a href="service-details.html" className="stretched-link">
                Lorem Ipsum
              </a>
            </h4>
            <p>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles icon" />
            </div>
            <h4>
              <a href="service-details.html" className="stretched-link">
                Sed ut perspici
              </a>
            </h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week icon" />
            </div>
            <h4>
              <a href="service-details.html" className="stretched-link">
                Magni Dolores
              </a>
            </h4>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-3 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast icon" />
            </div>
            <h4>
              <a href="service-details.html" className="stretched-link">
                Nemo Enim
              </a>
            </h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
  {/* Call To Action Section */}
  <section id="call-to-action" className="call-to-action section">
    <img src="assets/img/cta-bg.jpg" alt="" />
    <div className="container">
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-xl-9 text-center text-xl-start">
          <h3>Call To Action</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="col-xl-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="#!">
            Call To Action
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* /Call To Action Section */}
  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Portfolio</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Card</li>
          <li data-filter=".filter-branding">Web</li>
        </ul>
        {/* End Portfolio Filters */}
        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Product 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                title="Product 1"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Branding 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                title="Branding 1"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                title="App 2"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Product 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                title="Product 2"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Branding 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                title="Branding 2"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                title="App 3"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Product 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                title="Product 3"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img
              src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Branding 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                title="Branding 2"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in" />
              </a>
              <a
                href="portfolio-details.html"
                title="More Details"
                className="details-link"
              >
                <i className="bi bi-link-45deg" />
              </a>
            </div>
          </div>
          {/* End Portfolio Item */}
        </div>
        {/* End Portfolio Container */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}
  {/* Team Section */}
  <section id="team" className="team section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Team</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="team-member d-flex align-items-start">
            <div className="pic">
              <img
                src="assets/img/team/team-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-linkedin" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="team-member d-flex align-items-start">
            <div className="pic">
              <img
                src="assets/img/team/team-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <p>
                Aut maiores voluptates amet et quis praesentium qui senda para
              </p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-linkedin" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="team-member d-flex align-items-start">
            <div className="pic">
              <img
                src="assets/img/team/team-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-linkedin" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
          <div className="team-member d-flex align-items-start">
            <div className="pic">
              <img
                src="assets/img/team/team-4.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <p>
                Dolorum tempora officiis odit laborum officiis et et accusamus
              </p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-linkedin" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Member */}
      </div>
    </div>
  </section>
  {/* /Team Section */}
  {/* Pricing Section */}
  <section id="pricing" className="pricing section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Pricing</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={100}>
          <div className="pricing-item">
            <h3>Free Plan</h3>
            <h4>
              <sup>$</sup>0<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <a href="#!" className="buy-btn">
              Buy Now
            </a>
          </div>
        </div>
        {/* End Pricing Item */}
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={200}>
          <div className="pricing-item featured">
            <h3>Business Plan</h3>
            <h4>
              <sup>$</sup>29<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <a href="#!" className="buy-btn">
              Buy Now
            </a>
          </div>
        </div>
        {/* End Pricing Item */}
        <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={300}>
          <div className="pricing-item">
            <h3>Developer Plan</h3>
            <h4>
              <sup>$</sup>49<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <a href="#!" className="buy-btn">
              Buy Now
            </a>
          </div>
        </div>
        {/* End Pricing Item */}
      </div>
    </div>
  </section>
  {/* /Pricing Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Testimonials</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="swiper init-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-1.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-2.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-3.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-item">
              <img
                src="assets/img/testimonials/testimonials-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left" />
                <span>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </span>
                <i className="bi bi-quote quote-icon-right" />
              </p>
            </div>
          </div>
          {/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* /Testimonials Section */}
  {/* Faq 2 Section */}
  <section id="faq-2" className="faq-2 section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Frequently Asked Questions</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="faq-container">
            <div
              className="faq-item faq-active"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="faq-icon bi bi-question-circle" />
              <h3>Non consectetur a erat nam at lectus urna duis?</h3>
              <div className="faq-content">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item" data-aos="fade-up" data-aos-delay={300}>
              <i className="faq-icon bi bi-question-circle" />
              <h3>
                Feugiat scelerisque varius morbi enim nunc faucibus a
                pellentesque?
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item" data-aos="fade-up" data-aos-delay={400}>
              <i className="faq-icon bi bi-question-circle" />
              <h3>Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
              <div className="faq-content">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item" data-aos="fade-up" data-aos-delay={500}>
              <i className="faq-icon bi bi-question-circle" />
              <h3>
                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item" data-aos="fade-up" data-aos-delay={600}>
              <i className="faq-icon bi bi-question-circle" />
              <h3>
                Tempus quam pellentesque nec nam aliquam sem et tortor
                consequat?
              </h3>
              <div className="faq-content">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Faq 2 Section */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-lg-5">
          <div className="info-wrap">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
            
          </div>
        </div>
        <div className="col-lg-7">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <label htmlFor="name-field" className="pb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email-field" className="pb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="subject-field" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="message-field" className="pb-2">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  id="message-field"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  </section>
  {/* /Contact Section */}
</main>


      
      
    </>
  );
}

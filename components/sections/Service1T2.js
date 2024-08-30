import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 5,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
	loop: true,
	breakpoints:{
		320: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			// spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			// spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			// spaceBetween: 30,
		},
		1350: {
			slidesPerView: 5,
			// spaceBetween: 30,
		},
	}
};
const Service1T2 = () => {
	return (
	<>
  <section className="services-section-two">
    <div className="bg bg-pattern-1"></div>
    <div className="auto-container">
      <div className="sec-title light text-center text-gradient"> <span className="sub-title">what we’re offering</span>
        <h2>Get the best IT technology <br/>services & solutions</h2>
      </div>
			<Swiper {...swiperOptions} className="services-carousel owl-carousel owl-theme disabled-nav">
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
								<h4 className="title"><Link href="page-service-details">Product <br/>development</Link></h4>
								<div className="text">Providing the solutions for non-IT businesses.</div>
								<div className="icon-box"> <i className="icon flaticon-bank"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
								<h4 className="title"><Link href="page-service-details">Digital <br/>marketing</Link></h4>
								<div className="text">Providing the solutions for non-IT businesses.</div>
								<div className="icon-box"> <i className="icon flaticon-technology"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
								<h4 className="title"><Link href="page-service-details">Security <br/>system</Link></h4>
								<div className="text">Providing the solutions for non-IT businesses.</div>
								<div className="icon-box"> <i className="icon flaticon-digital-services"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
								<h4 className="title"><Link href="page-service-details">UI/Ux <br/>designing</Link></h4>
								<div className="text">Providing the solutions for non-IT businesses.</div>
								<div className="icon-box"> <i className="icon flaticon-laptop"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
								<h4 className="title"><Link href="page-service-details">Data <br/>analysis</Link></h4>
								<div className="text">Providing the solutions for non-IT businesses.</div>
								<div className="icon-box"> <i className="icon flaticon-laptop"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="service-block-two">
						<div className="inner-box">
							<div className="content-box">
							<h4 className="title"><Link href="page-service-details">Data <br/>analysis</Link></h4>
							<div className="text">Providing the solutions for non-IT businesses.</div>
							<div className="icon-box"> <i className="icon flaticon-laptop"></i> </div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
    </div>
  </section>
	</>
	);
};
export default Service1T2
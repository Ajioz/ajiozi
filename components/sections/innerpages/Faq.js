import { useState } from 'react';
import Link from "next/link";

const Faq = () => {

	const [isActive, setIsActive] = useState({
		status: false,
		key: 1,
	})
	const handleClick = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			})
		} else {
			setIsActive({
				status: true,
				key,
			})
		}
	}
	return (
	<>

   {/*  FAQ Section  */}
  <section className="faqs-section">
      <div className="anim-icons">
        <span className="icon icon-flower"></span>
        <span className="icon icon-chat"></span>
      </div>
      <div className="auto-container">
        <div className="row">
          {/*  FAQ Column  */}
          <div className="faq-column col-xl-6 col-lg-7">
            <div className="inner-column">
              <ul className="accordion-box wow fadeInRight">
                {/* Block */}
                <li className="accordion block active-block">
                  <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  	How To Start Business Without Investment? <div className="icon fa fa-plus"></div>
                  </div>
                  <div className="acc-content current">
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                      <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  	How to Get Your Business Report For Me? <div className="icon fa fa-plus"></div>
                  </div>
                  <div className="acc-content">
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                      <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  	Why should I hire a digital agency? <div className="icon fa fa-plus"></div>
                  </div>
                  <div className="acc-content">
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                      <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                    </div>
                  </div>
                </li>
                {/* Block */}
                <li className="accordion block">
                  <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  	Designing in a powerful way of just not <div className="icon fa fa-plus"></div>
                  </div>
                  <div className="acc-content">
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                      <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        {/*  Image Column  */}
        <div className="faq-column col-xl-6 col-lg-5">
          <div className="inner-column">
            <ul className="accordion-box wow fadeInRight">
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                	What happens to my data if I cancel?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                	What are the different types of tecnology solutions?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(7)}>
                	How often should i work on the digital marketing?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(8)}>
                	Are social media good for the business growth?
                  <div className="icon fa fa-plus"></div>
                </div>
                <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End FAQ Section  */}


	</>
	);
};
export default Faq

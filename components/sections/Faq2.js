import { useState } from 'react'
const Faq2 = () => {
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
            <section className="faqs-section pt-0">
                <div className="icon-circle-lines"></div>
                <div className="auto-container">
                <div className="row"> 
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <div className="row">
                        <div className="sec-title"> <span className="sub-title">Company features</span>
                            <h2>improve & inhance your business with us</h2>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="image-box">
                            <figure className="image overlay-anim"><img src="images/resource/faq-1.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="exp-box">
                            <div className="count-box"> <span className="count">30+</span>
                                <h4 className="text">Years <br/>
                                Experience</h4>
                            </div>
                            <h5 className="title">Donec Quis felis Commodo</h5>
                            <div className="text">Web designing in a powerful way of just not an only professions</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column">
                        <ul className="accordion-box wow fadeInRight">
                        <li className="accordion block">
                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>What happens to my data if I cancel?
                            <div className="icon fa fa-plus"></div>
                            </div>
                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                            </div>
                            </div>
                        </li>
                        <li className="accordion block active-block">
                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>What are the different types of tecnology solutions?
                            <div className="icon fa fa-plus"></div>
                            </div>
                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                            </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>How often should i work on the digital marketing?
                            <div className="icon fa fa-plus"></div>
                            </div>
                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                            <div className="content">
                                <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</div>
                            </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>Are social media good for the business growth?
                            <div className="icon fa fa-plus"></div>
                            </div>
                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
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
        </>
    );
};
export default Faq2

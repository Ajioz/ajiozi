import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
            <section className="fun-fact-section-two">
                <div className="bg bg-pattern-9"></div>
                <div className="auto-container">
                <div className="fact-counter">
                    <div className="row"> 
                    <div className="counter-info-block col-xl-6 wow fadeInUp">
                        <div className="inner">
                            <div className="sec-title light text-gradient"> <span className="sub-title">Funfacts</span>
                                <h2>Creativity funfacts <br/>in great numbers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="column col-xl-6">
                        <div className="row"> 
                        <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner"> <i className="icon flaticon-targeted-marketing"></i>
                            <div className="count-box"><CounterUp count={886} time={3} /></div>
                            <h6 className="counter-title">Projects Completed</h6>
                            </div>
                        </div>
                        <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner"> <i className="icon flaticon-recommend"></i>
                            <div className="count-box"><CounterUp count={601} time={3} /></div>
                            <h6 className="counter-title">Satisfied Customers</h6>
                            </div>
                        </div>
                        <div className="counter-block-two col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner">
                            <div className="content"> <i className="icon flaticon-technology"></i>
                                <div className="count-box"><CounterUp count={960} time={3} /></div>
                                <h6 className="counter-title">Repeat Customers</h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};
export default Funfact2

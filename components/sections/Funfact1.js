import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
            <section className="fun-fact-section">
                <div className="bg bg-pattern-3"></div>
                <div className="auto-container">
                <div className="fact-counter">
                    <div className="row"> 
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                        <div className="inner"> <i className="icon flaticon-targeted-marketing"></i>
                        <div className="count-box"><CounterUp count={450} time={3} /></div>
                        <h6 className="counter-title">Project Completed</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner"> <i className="icon flaticon-diplomat"></i>
                        <div className="count-box"><CounterUp count={326} time={3} /></div>
                        <h6 className="counter-title">IT Specialists</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner"> <i className="icon flaticon-recommend"></i>
                        <div className="count-box"><CounterUp count={860} time={3} /></div>
                        <h6 className="counter-title">Satisfied Clients</h6>
                        </div>
                    </div>
                    <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner">
                        <div className="content"> <i className="icon flaticon-technology"></i>
                            <div className="count-box"><CounterUp count={238} time={3} /></div>
                            <h6 className="counter-title">Smart Solutions</h6>
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
export default Funfact1

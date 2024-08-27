import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video2T2 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
			<section className="video-section-two pull-down">
				<div className="bg bg-pattern-10"></div>
				<div className="icon-lines-6"></div>
				<div className="auto-container">
				<div className="sec-title text-center light"> 
					<a onClick={() => setOpen(true)} className="play-btn"><i className="icon fa fa-play" aria-hidden="true"></i></a> 
					<h2>IT Solutions services built specifically <br/>for your <span className="selected"> business</span></h2>
				</div>
				</div>
			</section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video2T2

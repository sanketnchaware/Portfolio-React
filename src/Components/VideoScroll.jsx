import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const VideoScroll = () => {
  gsap.registerPlugin(ScrollTrigger);
  const parentContainer = useRef(null);
  const videoRef = useRef(null);
  const bgVideo = document?.querySelector("#bgVideo");

  useEffect(() => {
    if (bgVideo) {
      bgVideo.pause();
      bgVideo.currentTime = 0;
    }

    let sections = gsap.utils.toArray(".step");
    sections.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: "bottom bottom",
        end: "+=1000",
        pin: true,
        anticipatePin: 1,
      });

      gsap.fromTo(
        bgVideo,
        { currentTime: 3 * i },
        {
          scrollTrigger: {
            trigger: step,
            scrub: 2,
            start: "top bottom",
            end: "bottom bottom",
          },
          currentTime: 3 * (i + 1),
          duration: 1,
          ease: "none",
        }
      );
    });
  }, []);
  return (
    <>
      <div id="background-container" className="background-container">
        <div id="video-container" className="video-container">
          <video
            src="https://videos.pexels.com/video-files/5190548/5190548-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
            id="bgVideo"
            controls
          ></video>
        </div>
      </div>
      <div id="scroll-container" className="scroll-container">
        <section id="step0" className="step">
          <div>
            <h3>Hello</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>My</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>Name</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>Is</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>Rahul</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>jangid</h3>
          </div>
        </section>
        <section className="step">
          <div>
            <h3>Thanks :)</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideoScroll;

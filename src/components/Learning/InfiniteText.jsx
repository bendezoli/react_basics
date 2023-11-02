import styles from "./InfiniteText.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const InfiniteText = () => {
  const slider1firstText = useRef(null);
  const slider1secondText = useRef(null);
  const slider1thirdText = useRef(null);
  const slider2firstText = useRef(null);
  const slider2secondText = useRef(null);
  const slider2thirdText = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  let xPercentRight = 0;
  let xPercentLeft = 0;
  let directionRight = 1;
  let directionLeft = -1;
  let speedMultiplier = 2; // Adjust this value to control animation speed

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider1.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => {
          xPercentRight = e.progress * -100;
        },
      },
      x: `-600`,
    });

    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => {
          xPercentLeft = e.progress * -100;
        },
      },
      x: `300`,
    });
  }, []);

  const animation = () => {
    if (xPercentRight > 0) {
      xPercentRight = -100;
    }
    gsap.set(slider1firstText.current, {
      xPercent: xPercentRight * speedMultiplier,
    });
    gsap.set(slider1secondText.current, {
      xPercent: xPercentRight * speedMultiplier,
    });
    gsap.set(slider1thirdText.current, {
      xPercent: xPercentRight * speedMultiplier,
    });
    xPercentRight += 0.2 * directionRight;

    if (xPercentLeft < -100) {
      xPercentLeft = 0;
    }
    gsap.set(slider2firstText.current, {
      xPercent: xPercentLeft * speedMultiplier,
    });
    gsap.set(slider2secondText.current, {
      xPercent: xPercentLeft * speedMultiplier,
    });
    gsap.set(slider2thirdText.current, {
      xPercent: xPercentLeft * speedMultiplier,
    });
    xPercentLeft += 0.2 * directionLeft;

    requestAnimationFrame(animation);
  };

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider1} className={styles.slider1}>
          <p ref={slider1firstText}>Anant Sharma *</p>
          <p ref={slider1secondText}>Anant Sharma *</p>
          <p ref={slider1thirdText}>Anant Sharma *</p>
        </div>
      </div>

      <div className={styles.sliderContainer2}>
        <div ref={slider2} className={styles.slider2}>
          <p ref={slider2firstText}>CEO of Matter Of Form *</p>
          <p ref={slider2secondText}>CEO of Matter Of Form *</p>
          <p ref={slider2thirdText}>CEO of Matter Of Form *</p>
        </div>
      </div>
    </main>
  );
};

export default InfiniteText;

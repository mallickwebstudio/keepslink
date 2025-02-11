"use client"
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const SparkleText = ({ text, className }) => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animate = (star) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
  };

  // useEffect(() => {
  //     let index = 0;
  //     const interval = 1000;

  //     const animateInterval = (star) => setInterval(() => animate(star), interval);

  //     const stars = document.getElementsByClassName("magic-star");

  //     for (const star of stars) {
  //         setTimeout(() => {
  //             animate(star);
  //             animateInterval(star);
  //         }, index++ * (interval / 3));
  //     }

  //     // Cleanup intervals on component unmount
  //     return () => {
  //         for (const star of stars) {
  //             clearInterval(animateInterval(star));
  //         }
  //     };
  // }, []); // Empty dependency array to run the effect only once on mount

  /* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace the above useEffect with this code ↓↓↓ -- */

  useEffect(() => {
    const magic = document.querySelector(".magic");

    const animateInterval = (star) => setInterval(() => animate(star), 1000);

    const stars = document.getElementsByClassName("magic-star");
    const timeouts = [];
    const intervals = [];

    const onMouseEnter = () => {
      let index = 1;
      for (const star of stars) {
        timeouts.push(setTimeout(() => {
          animate(star);
          intervals.push(animateInterval(star));
        }, index++ * 300));
      }
    };

    const onMouseLeave = () => {
      for (const t of timeouts) clearTimeout(t);
      for (const i of intervals) clearInterval(i);
    };

    magic.addEventListener("mouseenter", onMouseEnter);
    magic.addEventListener("mouseleave", onMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      magic.removeEventListener("mouseenter", onMouseEnter);
      magic.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [animate]);

  return (
    <span className={cn('sparkle-text', className)} id='sparkle-text'>
      <span className="magic">
        <span className="magic-star">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        </span>
        <span className="magic-star">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        </span>
        <span className="magic-star">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            <path d="M20 3v4" />
            <path d="M22 5h-4" />
            <path d="M4 17v2" />
            <path d="M5 18H3" />
          </svg>
        </span>
        <span className="magic-text">{text}</span>
      </span>
    </span>
  );
};

export default SparkleText;

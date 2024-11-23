import { AppContext } from "@/src/context/ContextProvider";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";

const AnimateMouse = () => {
  const { isEnter } = useContext(AppContext); // Get context state
  const eRef = useRef(null);
  const tRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (tRef.current) {
        tRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      if (eRef.current) {
        eRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      {/* Outer Cursor */}
      <div
        ref={eRef}
        style={{ visibility: "visible" }}
        className={`mouseCursor cursor-outer ${isEnter ? "cursor-big" : ""}`}
      ></div>
      
      {/* Inner Cursor */}
      <div
        ref={tRef}
        style={{ visibility: "visible" }}
        className={`mouseCursor cursor-inner ${isEnter ? "cursor-big" : ""}`}
      >
        <Link href="#">
          <i className="fas fa-play"></i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AnimateMouse;

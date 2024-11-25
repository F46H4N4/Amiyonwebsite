'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Count from './count';

// Fun fact data
const fun_fact_data = [
  {
    id: 1,
    cls: '1',
    count: 10,
    simble: '+',
    description: <>Years <br /> Of Experience</>,
  },
  {
    id: 2,
    cls: '2',
    count: 99,
    simble: '%',
    description: <>Customer<br />Satisfaction</>,
  },
  {
    id: 3,
    cls: '3',
    count: 350,
    simble: '+',
    description: <>Projects<br />Completed</>,
  },
];

const CountArea = () => {
  const headerRef = useRef(null);
  const factsRef = useRef([]);

  useEffect(() => {
    // Header animation
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });
    tl.from(headerRef.current, { opacity: 0, y: 50 });

    // Fun fact items animation
    factsRef.current.forEach((fact, i) => {
      tl.fromTo(
        fact,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, delay: i * 0.2 },
        '-=0.5'
      );
    });
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className="text-center mb-12"
        style={{ paddingBottom: '74px' }}
      >
        <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
          Our Numbers Speak
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Proven Track Record</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering excellence through years of dedication, successful projects, and satisfied clients
        </p>
      </div>

      <div className="row">
        {fun_fact_data.map((item, i) => (
          <div
            key={item.id}
            className="col-xl-4 col-lg-4 col-md-4 mb-60 tp-counter-br"
            ref={(el) => (factsRef.current[i] = el)} // Attach ref for GSAP
          >
            <div
              className={`tp-fun-fact-item tp-fun-fact-space-${item.cls} d-flex align-items-center`}
            >
              <h4>
                <span
                  data-purecounter-duration="1"
                  data-purecounter-end="300"
                  className="purecounter"
                >
                  <Count number={item.count} text={item.simble} />
                </span>
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountArea;

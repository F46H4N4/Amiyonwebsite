const ServiceArea = () => {
  return (
    <>
      <div
        className="centralized-content"
        style={{
          width: '100%', // Full width for smaller screens
          maxWidth: '806px', // Restrict width on larger screens
          margin: '0 auto', // Center the container horizontally
          textAlign: 'center', // Center text alignment
          padding: '20px', // Add padding for better spacing
        }}
      >
        <div
          className="heading"
          style={{
            // fontFamily: 'geist',
            fontWeight: '400',
            lineHeight: '1.2',
            fontSize: '82.5px', // Default font size for larger screens
          }}
        >
          Our Impact!
        </div>
        <div
          className="content"
          style={{
            // fontFamily: 'geist',
            fontWeight: '400',
            lineHeight: '1.5',
            fontSize: '20px', // Default font size for larger screens
            marginTop: '10px',
          }}
        >
          For over a decade, Amiyon has delivered impactful, tailored solutions
          that drive efficiency and growth. We provide high-quality software on
          time, within budget, and designed to make a difference.
        </div>
      </div>
      <style jsx>{`
        .centralized-content .heading {
          font-size: 10vw; /* Adjust font size for smaller screens */
        }
        .centralized-content .content {
          font-size: 4vw; /* Adjust font size for smaller screens */
        }

        @media (min-width: 768px) {
          /* Larger screens */
          .centralized-content .heading {
            font-size: 82.5px; /* Fixed font size */
          }
          .centralized-content .content {
            font-size: 20px; /* Fixed font size */
          }
        }
      `}</style>
    </>
  );
};

export default ServiceArea;

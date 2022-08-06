

const Heading = (props) => {
    const { heading, className } = props;
    return (
      <h1
        className={`font-maven not-italic font-medium text-[1rem] leading-[1.1875rem] text-black tracking-[0.01em] ${className}`}
      >
        {heading}
      </h1>
    );
  };
  
  export default Heading;
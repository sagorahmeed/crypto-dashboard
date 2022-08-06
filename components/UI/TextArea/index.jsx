import PropTypes from "prop-types";

export const TextArea = ({
  title,
  variant,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <>
      {title && <h5 className="pb-[1.5rem]">{title}</h5>}
      <textarea
        type="text"
        className={`textarea textarea-${variant}`}
        style={{ height: "7.5rem" }}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

TextArea.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "light", "outlined"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextArea.defaultProps = {
  title: "TextArea Title",
  variant: "primary",
  placeholder: "Placeholder text",
};

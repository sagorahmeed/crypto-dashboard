import PropTypes from "prop-types";

const Description = ({ children, className, ...props }) => (
  <label {...props}>{children}</label>
);

const RadioButton = ({
  id,
  name,
  value,
  label,
  description,
  className,
  onChange,
  isChecked,
  ...props
}) => (
  <div className="flex flex-col">
    <div className="flex items-center mb-2">
      <input
        className="appearance-none h-4 w-4 border border-green rounded-full checked:bg-green checked:shadow-[0_0_0_2.5px_white_inset] float-left mr-2 cursor-pointer"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
      />
      <label
        className="inline-block text-sm font-normal cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
    {description && (
      <Description
        className="inline-block text-gray-800 cursor-pointer"
        htmlFor={id}
      >
        {description}
      </Description>
    )}
  </div>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.elementType,
  className: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};

export const RadioButtonGroup = ({
  title,
  name,
  options,
  selectedOption,
  onChange,
  className,
  ...props
}) => (
  <div {...props}>
    {title && <h5 className="mb-3">{title}</h5>}
    <div className={className} {...props}>
      {options.map((option, index) => (
        <div key={option.value} className="flex flex-col">
          <label className="flex items-center mb-2 inline-block text-sm font-normal cursor-pointer">
            <input
              type="radio"
              className="appearance-none h-4 w-4 border border-green rounded-full checked:bg-green checked:shadow-[0_0_0_2.5px_white_inset] float-left mr-2 cursor-pointer"
              id={`${name}-${index}`}
              name={name}
              value={option.value}
              checked={selectedOption === option.value}
              // checked={option.checked}
              onChange={onChange}
            />
            {option.label}
          </label>
          {option.description && (
            <Description
              className="inline-block text-gray-800 cursor-pointer"
              htmlFor={`${name}-${index}`}
            >
              {option.description}
            </Description>
          )}
        </div>
      ))}
    </div>
  </div>
);

RadioButtonGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func,
  isChecked: PropTypes.bool,
  className: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  title: "Radio Button Group",
  name: "defaultRadio",
  options: [
    {
      label: "Option 1",
      value: "Option 1",
      isChecked: true,
    },
    {
      label: "Option 2",
      value: "Option 2",
    },
    {
      label: "Option 3",
      value: "Option 3",
    },
  ],
  className: "",
};

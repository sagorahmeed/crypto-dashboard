import PropTypes from "prop-types";
import { MdMinimize } from "react-icons/md";

export const TextField = ({
  title,
  variant,
  placeholder,
  value,
  className,
  errorFieldBg,
  isShowMinimize,
  ...props
}) => (
  <>
    {title && <h5 className="pb-[.75rem]">{title}</h5>}
    <div className="relative">
    <input
      type="text"
      className={`${
        errorFieldBg ? "textinputError" : "textinput"
      }   textinput-${variant} ${className}`}
      placeholder={placeholder}
      defaultValue={value}
      {...props}
    />
      {isShowMinimize && (
        <div className="w-[13.33px] h-[13.33px] rounded-full bg-[#ffa298] top-3.5 absolute right-3.5">
          <MdMinimize className="text-white flex justify-center items-center text-sm -mt-[5px] -ml-[0.2px]" />
        </div>
      )}
    </div>
  </>
);

TextField.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "light", "outlined"]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  title: "TextField Title",
  variant: "primary",
  placeholder: "Placeholder text",
};

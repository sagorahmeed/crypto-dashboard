import classNames from "classnames";
import PropTypes from "prop-types";
import { LoadingIcon } from "public/icon/LoadingIcon";

export const Button = ({
  children,
  className,
  variant,
  size,
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled,
  isLoading,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        `btn ${!disabled && `btn-${variant}`} btn-${size} ${className}`,
        {
          "pointer-events-none": isLoading,
        },
        { "pointer-events-none btn-disabled": disabled }
      )}
      {...props}
    >
      {LeadingIcon ? <LeadingIcon {...LeadingIcon.props} /> : null}
      {isLoading ? <LoadingIcon className="animate-spin" /> : children}
      {IconOnly ? <IconOnly {...IconOnly.props} /> : null}
      {TrailingIcon ? <TrailingIcon {...TrailingIcon.props} /> : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "outlined",
    "danger",
    "warning",
    "aquamarine",
    "darkaquamarine",
    "purple"
  ]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  LeadingIcon: PropTypes.element,
  TrailingIcon: PropTypes.element,
  IconOnly: PropTypes.element,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "Button",
  variant: "purple",
  size: "md",
  disabled: false,
  isLoading: false,
};

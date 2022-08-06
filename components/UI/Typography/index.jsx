import classNames from "classnames";
import PropTypes from "prop-types";

const TypographyVariantClasses = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  h5: "text-h5",
  h6: "text-h6",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const TypographyWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const Typography = ({ as, variant, weight, className, children, isLink, ...props }) => {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[weight];

  const isHeading = variant.startsWith("h");
  const Heading = as || (isHeading ? variant : "p");

  return (
    <Heading
      className={classNames(TypographyVariantClassName, TypographyWeightClassName, className, { link: isLink })}
      {...props}>
      {children}
    </Heading>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "xs", "sm", "md", "lg", "xl"]),
  weight: PropTypes.oneOf(["normal", "medium", "semibold", "bold"]),
  className: PropTypes.string,
  children: PropTypes.string.isRequired || PropTypes.node.isRequired,
  isLink: PropTypes.bool,
};

Typography.defaultProps = {
  variant: "primary",
  weight: "normal",
  children: "Display Text",
};

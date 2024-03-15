import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./March4Button.css";

const BUTTON_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  ELEVATED: "elevated",
};

const BUTTON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

const March4Button = ({ children, type, size, disabled, onClick }) => {
  const buttonClasses = classNames(
    "button",
    `button-${type}`,
    `button-${size}`,
    {
      "button-disabled": disabled,
    }
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

March4Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)).isRequired,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

March4Button.defaultProps = {
  disabled: false,
};

export default March4Button;

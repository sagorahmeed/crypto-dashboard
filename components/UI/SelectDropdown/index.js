/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-pascal-case */
import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { MdExpandMore, MdSchedule } from "react-icons/md";

export function SelectDropdown({
  title,
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  className,
  isPercentage,
  isSchedule,
  endDatebgColor,
  errorFieldBg
}) {
  return (
    <div className={classNames("relative", className)}>
      <Listbox value={selectedOption?.value} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            {title && (
              <Listbox.Label className="block text-normal font-maven font-medium text-black leading-[1.175rem]">
                {title}
              </Listbox.Label>
            )}
            <div className={classNames("relative", { "mt-3": title })}>
              <Listbox.Button className={`relative w-[100%] h-10  rounded-[4px] ${endDatebgColor ? "bg-[#D6D6D6]":errorFieldBg?"bg-[#FFF6F5] border border-red ":"bg-aquamarine cursor-pointer"}  text-gray rounded pl-3 pr-3 py-2 text-left  focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
                {LeadingIcon && (
                  <div className="w-5 h-5 mr-2 overflow-hidden">
                    <LeadingIcon.type size={20} className="text-gray-400" />
                  </div>
                )}
                <span className="flex items-center">
                  <span className={`block truncate ${selectedOption ? 'text-black' : 'text-gray'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  {isPercentage  ? (
                    " % "
                  ) : isSchedule ?  <MdSchedule className="h-5 w-5 text-gray"/> : (
                      <MdExpandMore
                        className="h-5 w-5 text-gray"
                        aria-hidden="true"
                      />
                    ) }
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute mt-[0.125rem] p-3 space-y-2 ${className} ${endDatebgColor && "hidden"} bg-white z-40 shadow-lg max-h-56 rounded-md text-base ring-0 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
                  style={{zIndex:'100'}}
                >
                  {options?.map((option, index) => (
                    <Listbox.Option
                      key={option?.value}
                      className={({ active }) =>
                        classNames(
                          active ? "text-green" : "text-gray",
                          "cursor-pointer select-none relative"
                        )
                      }
                      value={option?.value}
                    >
                      {({ active, selected }) => (
                        <div className="flex items-center">
                          <span className={classNames("block truncate")}>
                            {option?.label}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

SelectDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  selectedOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  setSelectedOption: PropTypes.func,
  placeholder: PropTypes.string,
  LeadingIcon: PropTypes.elementType,
  width: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "outlined"]),
};

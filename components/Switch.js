/* eslint-disable import/prefer-default-export */
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import Collapse from "./UI/Collapse";
import { SelectDropdown } from "./UI/SelectDropdown";
import { ToggleSwitch } from "./UI/ToggleSwitch";

const Switch = ({ heading, desc, id, isChecked, onChange }) => {
  const salesDrivenYearOptions = [
    {
      label: "Auto Generated Single Use",
      value: "AUTO_GENERATED_SINGLE_USE",
    },
    {
      label: "Single Code for All",
      value: "SINGLE_CODE_FOR_ALL",
    },
  ];
  const salesDrivenSortingOptions = [
    {
      label: "Auto Generated Single Use",
      value: "AUTO_GENERATED_SINGLE_USE",
    },
    {
      label: "Single Code for All",
      value: "SINGLE_CODE_FOR_ALL",
    },
  ];

  const [salesDrivenYearSelected, setSalesDrivenYearSelected] = useState(salesDrivenSortingOptions[0]);
  const [salesDrivenSortBy, setSalesDrivenSortBy] = useState();

  const handleSalesDrivenYearSelected = (selectedOption) => {
    setSalesDrivenYearSelected(
      salesDrivenYearOptions.find((option) => option.value === selectedOption)
    );
  };
  const handleSalesDrivenSortBy = (selectedOption) => {
    setSalesDrivenSortBy(
      salesDrivenSortingOptions.find(
        (option) => option.value === selectedOption
      )
    );
  };
  const [toggleCheck, setToggleCheck] = useState(false);

  const handleCheck = () => {
    setToggleCheck(!toggleCheck);
  };

  return (
    <div className="p-4 rounded-2lg bg-white mb-[1.5rem] overflow-hidden">
      <div className="mb-3 flex items-center justify-between">
        <h5>{heading}</h5>
        <div className="flex items-center space-x-3">
          <ToggleSwitch id={id} checked={isChecked} onChange={onChange} />
          <MdExpandMore
            onClick={handleCheck}
            className={`w-5 h-5 cursor-pointer ${
              toggleCheck
                ? "-rotate-90 transition-all duration-300 ease-in-out"
                : "rotate-0 transition-all duration-300 ease-in-out"
            }`}
          />
        </div>
      </div>
      <p>{desc}</p>

      <Collapse isActive={toggleCheck}>
        <h5 className="mt-6 pb-3">Discount Code Type</h5>
        <SelectDropdown
          options={salesDrivenSortingOptions}
          placeholder="Select type"
          selectedOption={salesDrivenYearSelected}
          setSelectedOption={handleSalesDrivenYearSelected}
          width="w-[full]"
        />
        {salesDrivenYearSelected?.value === "SINGLE_CODE_FOR_ALL" && (
          <div className="pt-[1.5rem]">
            <SelectDropdown
              options={salesDrivenYearOptions}
              placeholder="Select Code"
              selectedOption={salesDrivenSortBy}
              setSelectedOption={handleSalesDrivenSortBy}
              width="[full]"
            />
          </div>
        )}

        <div className="mt-[1.5rem] flex justify-end">
          <button
            type="button"
            className="btn btn-primary text-sm w-[5.4375rem]"
          >
            Save
          </button>
        </div>
      </Collapse>
    </div>
  );
}

export default Switch;

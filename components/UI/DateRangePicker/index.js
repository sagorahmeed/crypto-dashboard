import ModernDatepicker from "react-modern-datepicker";

const DateRangePicker = ({ placeholder ,date,onChange,icon}) => {

 

 
  

  return (
    <div>
      <ModernDatepicker
        date={date}
        format={"DD/MM/YYYY"}
        onChange={date => onChange(date)}
        placeholder={placeholder}
        allowEdit={true}
        icon={icon}
        secondaryTextColor="black"
        showBorder={false}
        primaryColor={"#1DC895"}
        secondaryColor={"white"}
        primaryTextColor={"#4f6457"}
        className='color'
      />
    </div>
  );
};

export default DateRangePicker;

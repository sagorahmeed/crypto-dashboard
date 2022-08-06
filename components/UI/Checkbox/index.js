import PropTypes from 'prop-types';

export const Checkbox = ({
  title, TrailingIcon, checked, onChange
}) => (
  <label className='inline-flex items-center'>
    <input
      type='checkbox'
      className='form-checkbox w-[0.9375rem] h-[0.9375rem] text-green border border-gray focus:border-green rounded-sm cursor-pointer'
      checked={checked}
      onChange={onChange}
    />
    <p className='font-manrope ml-[.625rem] cursor-pointer select-none flex items-center'>
      {title}
      {TrailingIcon ? <TrailingIcon.type {...TrailingIcon.props} /> : null}
    </p>
  </label>
);

Checkbox.propTypes = {
  title: PropTypes.string,
  TrailingIcon: PropTypes.element,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

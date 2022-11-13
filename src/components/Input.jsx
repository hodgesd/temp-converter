// import capitalize from "lodash/capitalize";
import PropTypes from "prop-types";

export default function Input({ id, label, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

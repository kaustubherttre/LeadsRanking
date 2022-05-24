import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
        label,
        onChange,
        error,
        required,
        options,
        value,
        readOnly,
        dropDownKeyValue
    }) => {

    const [fieldValue, setFieldValue] = useState(value);

    let errorClass = error ? 'error': undefined;
    let readOnlyClass = readOnly ? 'readOnly': undefined;

    const change = (e) => {
        setFieldValue(e.target.value);
        onChange(e);
        if (required && e.target.value) {
            errorClass = undefined;
        }
    }

    return (<div className="form-field">
        {label && <label>{label}</label>}
        <select onChange={change} className={`form-field-drpdwn ${errorClass} ${readOnlyClass}`} value={fieldValue} disabled={readOnly}>
          <option value="-1">Please select...</option>

            {options.length > 0 && dropDownKeyValue !== true &&
                options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
            {options.length > 0 && dropDownKeyValue === true &&
                options.map(option => (
                    <option key={option.value} value={option.key}>{option.value}</option>
                ))
            }
        </select>
    </div>);
};


SelectField.defaultProps = {
    label: undefined,
    onChange: () => undefined,
    error: undefined,
    required: false,
    options: [],
    value: '',
    readOnly: false,
    dropDownKeyValue: false
  };
  
  SelectField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    dropDownKeyValue: PropTypes.bool
};


export default SelectField;
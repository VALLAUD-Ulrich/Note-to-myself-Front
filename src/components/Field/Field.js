// == Import : npm
import PropTypes from 'prop-types';
// == Composant
function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
  classname,
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className={`${value.length > 0 ? 'field field--has-content' : 'field'} dark:text-darkTextColor text-lightTextColor`}>
      <input
        className={classname}
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  classname: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
  classname: '',
  placeholder: '',
  name: '',
  onChange: () => {},

};

// == Export
export default Field;

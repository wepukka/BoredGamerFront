import("./DropDownMenu.css");

const DropDownMenu = ({ values, setValue }) => {
  return (
    <div>
      <select
        className="decorated"
        id="dropdown"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {values.map((value, index) => {
          return (
            <option className="dropdown-option" key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export { DropDownMenu };

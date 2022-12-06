const TypeSwitcher = (props: any) => {

    const dropdownChangeHandler = (event: any) => {
        props.onSwitch(event.target.value);
    };

    return (
        <select id="productType" value={props.type} onChange={dropdownChangeHandler}>
            <option value=''>Please select one option</option>
            <option id="Book" value='book'>Book</option>
            <option id="Dvd" value='dvd'>DVD</option>
            <option id="Furniture" value='furniture'>Furniture</option>
        </select>
    );
};

export default TypeSwitcher;

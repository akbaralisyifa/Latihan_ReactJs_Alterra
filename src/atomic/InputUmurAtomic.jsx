
const InputUmurAtomic = (props) => {
    const {type, name, value, onChange} = props
    return (
        <>
            <label>
                {name} : 
                <input 
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                />
            </label><br />
        </>
    )
}


export default InputUmurAtomic;
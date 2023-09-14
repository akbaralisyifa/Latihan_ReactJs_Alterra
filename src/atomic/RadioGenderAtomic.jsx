

const RadioGenderAtomic = ({onChange, checked, name}) =>{
    return (
        <>
            <label>
                {name} :
                <input 
                type="radio"
                name={name}
                value="Pria"
                checked={checked === "Pria"}
                onChange={onChange}
                /> <label>Pria</label>
                <input 
                type="radio"
                name={name}
                value="Wanita"
                checked={checked === "Wanita"}
                onChange={onChange}
                /> <label>Wanita</label>
            </label><br />
        </>
    )
}

export default RadioGenderAtomic;
const UseForm = ({ step, formDetails, formData, setFormData }) => {
    const currentStepDetails = formDetails.find((item) => item[0] === step);
    const fields = currentStepDetails ? currentStepDetails.slice(1) : [];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <>
            {fields.map((field) => {
                if (field.type === "select") {
                    return (
                        <div key={field.name}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <select
                                name={field.name}
                                value={formData[field.name] || ""}
                                onChange={handleChange}
                            >
                                <option value=""></option>
                                <option>Developer</option>
                                <option>Designer</option>
                                <option>Manager</option>
                            </select>
                        </div>
                    );
                } else {
                    return (
                        <div key={field.name}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                name={field.name}
                                onChange={handleChange}
                                value={
                                    field.type === "checkbox"
                                        ? undefined
                                        : formData[field.name] || ""
                                }
                                checked={
                                    field.type === "checkbox"
                                        ? formData[field.name] || false
                                        : undefined
                                }
                            />
                        </div>
                    );
                }
            })}
        </>
    );
};

export default UseForm;

import { useState } from "react";
import UseForm from "../customhooks/form";
import Validation from "../Validation/Validation";

const Main = () => {
    const formDetails = [
        [
            1,
            { label: "FullName", name: "fullname", type: "text" },
            { label: "Email", name: "email", type: "email" }
        ],
        [
            2,
            { label: "Role", name: "role", type: "select" },
            { label: "Accept terms & conditions", name: "terms&conditions", type: "checkbox" }
        ]
    ];

    const [currentstep, setCurrentStep] = useState(1);
    const [formvalues, setFormValues] = useState({});
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = Validation(currentstep, formvalues);
        if (errors) {
            setError(errors);
            return;
        } else {
            setError(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <UseForm
                    step={currentstep}
                    formDetails={formDetails}
                    formData={formvalues}
                    setFormData={setFormValues}
                />
                {error && <span>{error}</span>}
            </form>

            <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                disabled={currentstep === 1}
            >
                Back
            </button>

            <button
                onClick={() => setCurrentStep((prev) => prev + 1)}
                disabled={currentstep === formDetails.length}
            >
                {currentstep === formDetails.length ? "Submit" : "Next"}
            </button>
        </div>
    );
};

export default Main;

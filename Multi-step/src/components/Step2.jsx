import useForm from "../hooks/useForm";

function Step2 ({next, back}){
    const { formData, setFormData } = useForm();

    return(
        <div>
            <h2>Step 2: 
                Contact
            </h2>
            <input ref={emailRef} defaultValue={formData.email} placeholder="Enter Email" />
            <input ref={passwordRef} type="password" defaultValue={formData.password} placeholder="Enter Password" />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Step2;

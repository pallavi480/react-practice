import useForm from "../hooks/useForm";

function Step3 ({back, submit}){
    const { formData } = useForm();

    return(
        <div>
            <h2>Step 3: 
                Review
            </h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Step3;

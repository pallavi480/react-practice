import { useRef } from "react";
import useForm from "../hooks/useForm";

function Step1 ({next}){
    const { formData, setFormData } = useForm();
    const nameRef = useRef();

    const handleNext = () => {
        setFormData({ ...formData, name: nameRef.current.value });
        next();
    }

    return (
        <div>
            <h2>Step 1: 
                Personal Info
            </h2>
            <input ref={nameRef} defaultValue={formData.name} placeholder="Enter Name" />
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Step1;
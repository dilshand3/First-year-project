import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Admin = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset, // Add reset function
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("product", data.product);
        formData.append("price", data.price);
        formData.append("Description", data.Description);
        formData.append("Image", data.Image[0]);

        let r = await fetch("http://localhost:3030/api/new/product/addingProduct", {
            method: "POST",
            body: formData
        });
        let res = await r.text();
        console.log(data, res);

        // Reset form and show success message
        reset();
        setImagePreview(null);
        setSuccessMessage("Product added successfully!");
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input 
                    type="file" 
                    accept="image/*" 
                    {...register("Image", { required: { value: true, message: "Image is required" } })} 
                    placeholder='Image' 
                    onChange={handleImageChange}
                />
                {imagePreview && <img src={imagePreview} alt="Selected" className="image-preview" />}
                
                <input 
                    type="text" 
                    required 
                    placeholder='productname'  
                    {...register("product", {
                        required: true, 
                        minLength: {
                            value: 4, 
                            message: "product mini 5 character"
                        }, 
                        maxLength: { 
                            value: 20, 
                            message: "product max lenght is 20 character" 
                        }
                    })} 
                    className='bg-black text-white' 
                />
                {errors.product && <div>{errors.product.message}</div>}

                <input 
                    type="number" 
                    required 
                    placeholder='price'  
                    {...register("price", {
                        required: true, 
                        minLength: {
                            value: 2, 
                            message: "price mini 5 character"
                        }, 
                        maxLength: { 
                            value: 5, 
                            message: "price must be 15 character" 
                        }
                    })} 
                    className='bg-black text-white' 
                />
                {errors.price && <div>{errors.price.message}</div>}

                <textarea 
                    required 
                    placeholder='Description' 
                    {...register("Description", {
                        required: true, 
                        minLength: {
                            value: 10, 
                            message: "Description must be at least 10 characters"
                        }
                    })} 
                    className='bg-black text-white' 
                />
                {errors.description && <div>{errors.description.message}</div>}

                <input 
                    disabled={isSubmitting} 
                    type="submit" 
                    value="Add Product" 
                    className='border-black submit-button' 
                />
            </form>

            {successMessage && <div className="success-message">{successMessage}</div>}

            <style jsx>{`
                .form-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 600px;
                    margin: auto;
                    padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }
                .image-preview {
                    max-width: 100%;
                    height: auto;
                    margin-top: 1rem;
                }
                .submit-button {
                    background-color: #000;
                    color: #fff;
                    border: 2px solid #000;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                    transition: background-color 0.3s, border-color 0.3s;
                }
                .submit-button:hover {
                    background-color: #444;
                    border-color: #444;
                }
                .success-message {
                    margin-top: 1rem;
                    color: green;
                    text-align: center;
                }
                @media (max-width: 600px) {
                    .form-container {
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </>
    )
}

export default Admin
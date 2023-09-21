import React from "react";
import styles from './ComponentStyles.module.css';
import { useState } from "react";
import validate from './Validation';

export default function Form (props) {

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]: value});
        validate(property, {...form, [property]: value}, errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.login(form);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.divLogin}>
                <div className={styles.divLoginImg}>
                    <div className={styles.loginImg}/>
                </div>
                <div className={styles.divLoginLabelInput}>
                    <label className={styles.loginLabel} htmlFor="email">EMAIL</label>
                    <input 
                        className={styles.loginInput} 
                        type="text" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                    ></input>
                    <label className={styles.loginErrorLabel}>{errors.email}</label>
                </div>
                <div className={styles.divLoginLabelInput}>
                    <label className={styles.loginLabel} htmlFor="password">PASSWORD</label>
                    <input 
                        className={styles.loginInput} 
                        type="password" 
                        name="password" 
                        value={form.password}
                        onChange={handleChange}
                    ></input>
                    <label className={styles.loginErrorLabel}>{errors.password}</label>
                </div>
                <button className={styles.loginButton} type="submit">SUBMIT</button>
            </div>
        </form>
    );
}
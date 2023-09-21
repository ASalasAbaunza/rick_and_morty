export default function Validate (property, form, errors, setErrors) {
    if (property === 'email') {
        if (!form.email) {
            setErrors({...errors, email: 'E-mail missing'});
        } else {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email) && form.email.length < 35) {
                setErrors({...errors, email: ''});
            } else {
                setErrors({...errors, email: 'Invalid e-mail'});
            }
        }
    } else {
        if (!form.password) {
            setErrors({...errors, password: 'Password missing'});
        } else {
            if (form.password.length > 5 && form.password.length < 11) {
                let numbers = 0;
                for (let i=0; i<form.password.length; i++) {
                    if (form.password.charCodeAt(i) > 47 && form.password.charCodeAt(i) < 58) {
                        numbers++;
                    }
                }
                if (numbers !== 0) {
                    setErrors({...errors, password: ''});
                } else {
                    setErrors({...errors, password: 'Password must have at least one number'});
                }
            } else {
                setErrors({...errors, password: 'Invalid password'});
            }
        }
    }
}
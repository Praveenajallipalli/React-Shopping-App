import { Formik, useFormik } from "formik";

export default function FormikDemo(){
    const formik = useFormik({
        initialValues : {
            UserName : '',
            Password : '',
            City : '',
            Subscribe:true
        },
        // onSubmit : values => {
        //     alert(JSON.stringify(values));
        // }
        onSubmit : values => {
            alert(`${values.UserName}\nSubscribe : ${values.Subscribe==true?"Subscribed":"Not Subscribed"}`)
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Hyderabad</option>
                        </select>
                    </dd>
                    {/* <dt>Subbscribe</dt> */}
                    <dd className="form-switch"><input type="checkbox" onChange={formik.handleChange} checked={formik.values.Subscribe} className="form-check-input" name="Subscribe"/></dd> Subscribe
                </dl>
                <button>Register</button>
            </form>
            {/* <h2>User Details</h2>
            {formik.values.UserName} */}
        </div>
    )
}
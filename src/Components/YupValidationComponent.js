import { useFormik, Formik, Field, ErrorMessage, Form} from "formik";
import * as yup from 'yup';

export default function YupValidationComponent(){
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={
                {
                    UserName:'',
                    Email:'',
                    Age:'',
                    City:''
                }}
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4,'Name too short').max(10,'Name too long').required('Name Required'),
                        Email: yup.string().email('Inavlid Email').required('Email Required'),
                        Age: yup.number().required('Age Required'),
                        City: yup.string()      
                    })
                }
                onSubmit={
                    values => {
                        alert(JSON.stringify(values));
                    }
                } 
            >
                {/* <Form>
                    {
                        <div>
                            <dl>
                                <dt>UserName</dt>
                                <dd><Field name="UserName" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field name="Age" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                                <dt>City</dt>
                                <dd>
                                    <Field name="City" as="select">
                                        <option>Delhi</option>
                                        <option>Hyderabad</option>
                                    </Field>
                                </dd>
                                <dd className="text-danger"><ErrorMessage name="City"></ErrorMessage></dd>
                            </dl>
                            <button>Register</button>
                        </div> 
                    }
                </Form> */}
                {
                    fields => 
                        <Form>
                        {
                        <div>
                            <dl>
                                <dt>UserName</dt>
                                <dd><Field name="UserName" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="UserName"></ErrorMessage></dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Email"></ErrorMessage></dd>
                                <dt>Age</dt>
                                <dd><Field name="Age" type="text"></Field></dd>
                                <dd className="text-danger"><ErrorMessage name="Age"></ErrorMessage></dd>
                                <dt>City</dt>
                                <dd>
                                    <Field name="City" as="select">
                                        <option>Delhi</option>
                                        <option>Hyderabad</option>
                                    </Field>
                                </dd>
                                <dd className="text-danger"><ErrorMessage name="City"></ErrorMessage></dd>
                            </dl>
                            <button disabled={fields.isValid?false:true}>Register</button>
                        </div> 
                    }
                    </Form>
                    
                }
            </Formik>
        </div>
    )
}
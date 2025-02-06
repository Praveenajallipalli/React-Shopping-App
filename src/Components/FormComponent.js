import { useState } from "react";


export default function FormCOmponent(){
    const [users] = useState([
        {userId:'J'},
        {userId:'John'},
        {userId:'John12'},
        {userId:'david'},
        {userId:'John_nit'},
    ]) 
    const [userMsg, setUserMsg] = useState("");
    const [isUserValid, setIsUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);
    const [cityMsg, setCityMsg] = useState("");
    const [userDetails, setUserDetails] = useState({UserId:'', Password:'', City:''});


    function VerifyUserId(e){
        for(var user of users){
            if(user.userId == e.target.value){
                setUserMsg("User Id is Taken - Try Another");
                setIsUserValid(false);
                break;
            }
            else{
                setUserMsg("User Id Available");
                setIsUserValid(true);
            }
        }
    }

    function hideUserMsg(e){
        if(e.target.value==''){
            setUserMsg("User Id is Required");
        }else{
            setUserMsg('');
        }
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/)){     // it checks for atlest one capital lettor
            setPwdMsg('Strong Password');
        }else{
            if(e.target.value.length<4){
                setPwdMsg('Poor Password');
            }else{
                setPwdMsg('Weak Password');
            }
        }
    }

    function hidePwdMsg(){
        setPwdMsg('');
        setCapsStatus(false);
    }

    function VerifyCaps(e){
        if(e.keyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=90){
            setCapsStatus(true);
        }else{
            setCapsStatus(false);
        }
    }

    function VerifyCity(e){
        if(e.target.value=="not city"){
            setCityMsg("Please select your city");
        }
        else{
            setCityMsg("");
        }
    }

    function handleUserIdChange(e){
        setUserDetails({
            UserId: e.target.value,
            Password: userDetails.Password,
            City: userDetails.City
        })
    }

    function handlePasswordChange(e){
        setUserDetails({
            UserId: userDetails.UserId,
            Password: e.target.value,
            City: userDetails.City
        })
    }

    // function handleCityChange(e){
    //     setUserDetails({
    //         UserId: userDetails.UserId,
    //         Password: userDetails.Password,
    //         City: e.target.value
    //     })
    // }

    function RegisterClick(){
        alert(JSON.stringify(userDetails));
    }

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input onKeyUp={VerifyUserId} onBlur={hideUserMsg} onChange={handleUserIdChange} type="text"/></dd>
                <dt className={isUserValid==true? "text-success":"text-danger"}>{userMsg}</dt>
            </dl>
            <dt>Password</dt>
            <dd><input type="password" onKeyUp={VerifyPassword} onBlur={hidePwdMsg} onKeyPress={VerifyCaps} onChange={handlePasswordChange} /></dd>
            <dd>{pwdMsg}</dd>
            <dd className={capsStatus==true?'d-block':'d-none'}>
                <span className="bi bi-exclamation-triangle text-warning">Caps ON</span>
            </dd>
            <dt>Your City</dt>
            <dd>
                <select onChange={VerifyCity}>
                    <option value="not city">Select your city</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Hyderabad">Hyderabad</option>
                </select>
            </dd>
            <dd>{cityMsg}</dd>
            <button onClick={RegisterClick}>Register</button>
        </div>
    )
}
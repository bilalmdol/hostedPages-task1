import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Stack, Container } from "@mui/material"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio"
import axios from "axios";
import Navbar from "./Navbar";

const SignUp = () => {

    const navigate = useNavigate();

    //using useState hook to store input textField values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("Male");
    // const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [dob, setDob] = useState(new Date());
    const [save, setSave] = useState(false);
    const [msg, setMsg] = useState("User");


    //handling date change
    const handleDateChange = (date) => {
        console.log(date);
        setDob(date);
    };

    // Function to hit post API
    const handleSignUp = (e) => {

        //input validations for all fields to be entered
        if (!firstName || !lastName || !email || !password || !gender || !dob || !phone ||
            !address || !city || !zip || !country) {
            alert("Please fill all the fields!!")
            return;
        }
        // prevents unneccessary event actions 
        e.preventDefault();

        //axios library to request server routes
        axios({
            method: 'post',
            url: 'http://localhost:5001/signup',
            data: { firstName, lastName, email, password, gender, dob, phone, address, city, zip, country }
        })
            .then((res) => {
                console.log("Successfully Posted!", res)
                if (res.status == 200) {
                    setSave(true);
                    setMsg(res.data + "!")
                    alert(firstName + " you have signed up!")
                }
                else {
                    console.log("Something went wrong :(")
                }
            })
            .catch((err) => { console.log("Error", err) });
    }

    const handleLogin = () => {
        navigate("/login", { state: { msg: msg } })

    }

    return (
        <>
            <Navbar />
            <Container maxWidth={"sm"} style={{ "marginTop": "2rem" }}>
                {/* <h2>Ordway's Registeration Form!</h2> */}

                <Stack spacing={3} >
                    <TextField id="fname" label="First Name" variant='outlined' onChange={(e) => { setFirstName(e.target.value) }} />
                    <TextField id="lname" label="Last Name" variant='outlined' onChange={(e) => { setLastName(e.target.value) }} />
                    <TextField id="email" label="Email" variant='outlined' onChange={(e) => { setEmail(e.target.value) }} />
                    <TextField id="password" label="Password" type="password" variant='outlined' onChange={(e) => { setPassword(e.target.value) }} />
                    <RadioGroup defaultValue="Male" name="gender-buttons-group" onChange={(e) => { setGender(e.target.value) }} >
                        <Stack direction={"col"} spacing={"5"}>
                            <h4 style={{ "fontWeight": "lighter" }}>Gender</h4>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    style={{ "marginLeft": "2rem" }}
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date of Birth"
                                    value={dob}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                        </Stack>
                    </RadioGroup>
                    {/* <TextField id="dob" label="dob" variant='outlined' onChange={(e) => { setDob(e.target.value) }} /> */}
                    <TextField id="phone" label="Phone" variant='outlined' onChange={(e) => { setPhone(e.target.value) }} />
                    <TextField id="address" label="Address" variant='outlined' onChange={(e) => { setAddress(e.target.value) }} />
                    <TextField id="city" label="City" variant='outlined' onChange={(e) => { setCity(e.target.value) }} />
                    <TextField id="zip" label="Zip" variant='outlined' onChange={(e) => { setZip(e.target.value) }} />
                    <TextField id="country" label="Country" variant='outlined' onChange={(e) => { setCountry(e.target.value) }} />

                    {(save) ?
                        <Button variant="contained" style={{ backgroundColor: "rgb(255, 155, 0)", width: "100px" }} onClick={handleLogin}>login</Button>
                        : <Button variant="contained" style={{ backgroundColor: "#1976d2", width: "100px" }} onClick={handleSignUp}>sign up</Button>

                    }
                </Stack>

                {/* <Button variant="contained" onClick={handleLogin}>Got to login?</Button> */}

            </Container>
        </>
    );
}

export default SignUp;



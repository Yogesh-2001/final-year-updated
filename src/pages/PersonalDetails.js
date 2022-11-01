import { Typography } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/personaldetails.css";

const Personaldetails = () => {
    const [text, settext] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        stream: "",
        rollno: "",
        division: "",
    });
    const handlechange = (e) => {
        e.preventDefault();
        settext({ ...text, [e.target.name]: e.target.value });
    };
    const submitme = () => {
        console.log(text);
    };
    return (
        <>
            <section className='col-11 col-md-10 col-lg-8 mx-auto d-flex flex-column '>


                <div className='d-flex flex-wrap' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' className='text-center my-3 w-100'>Personal Details</Typography>
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='text' label='First Name' />
                    <TextField className='col-md-3 col-5 my-3' type='text' label='Middle Name' />
                    <TextField className='col-md-3 col-8 my-3' type='text' label='Last Name' />
                    <TextField className='col-md-3 col-12 my-3' type='date' label='dob' />
                    <TextField className='col-md-3 col-12 my-3' type='number' label='Phone No' />
                    <TextField className='col-md-3 col-12 my-3' type='email' label='E-mail' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' variant='standard' type='file' required label='profile photo' />
                </div>

                <div className='d-flex flex-wrap' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' className='text-center my-3 w-100'>Educational Details</Typography>
                    <Typography variant='h5' className=' my-2 w-100'>class 10th Details</Typography>
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='text' label='School Name ' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='text' label='10th board ' />
                    <TextField className='col-md-3 col-5 my-3' type='text' label='class 10th %' />

                    <Typography variant='h5' className='my-2 w-100'>class 12th / Diploma Details</Typography>
                    <TextField className='col-md-3 col-5 my-3' type='text' label='college name' />
                    <TextField className='col-md-3 col-5 my-3' type='text' label='12th board' />
                    <TextField className='col-md-3 col-5 my-3' type='number' label='12th/Diploma % ' />

                </div>

                <div className='d-flex flex-wrap' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h4' className='text-center my-3 w-100'>Engineering Details</Typography>
                    <FormControl className='col-md-3 col-5 my-3 ms-2'>
                        <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                        >
                            <MenuItem value={'Computer Engineering'}>Computer Engineering</MenuItem>
                            <MenuItem value={'IT Engineering'}>IT Engineering</MenuItem>
                            <MenuItem value={'Electronics Engineering'}>Electronics Engineering</MenuItem>
                            <MenuItem value={'Electronics & Telecommunication Engineering'}>Electronics & Telecommunication Engineering</MenuItem>
                            <MenuItem value={'Bio-Medical Engineering'}>Bio-Medical Engineering</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className='col-md-3 col-5 my-3 ms-2'>
                        <InputLabel id="demo-simple-select-label">Division</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"

                        >
                            <MenuItem value={'A'}>A</MenuItem>
                            <MenuItem value={'B'}>B</MenuItem>

                        </Select>
                    </FormControl>
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 1 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 2 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 3 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 4 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 5 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' required label='sem 6 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' type='number' label='sem 7 sgpa' />
                    <TextField className='col-md-3 col-5 my-3 ms-2' variant='standard' type='file' required label='resume' />
                </div>

            </section>
        </>
    );
};

export default Personaldetails;
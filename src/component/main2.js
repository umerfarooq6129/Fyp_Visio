import React from 'react'
// import Mainpg from '../mainpg.jpg'
import { NavLink } from "react-router-dom";
import './index.css'
// import options from './api/options';
import Img from '../mainimg.png'
import Mainbg from '../mainbg.png'
import options from './api/options'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Main = () => {

    return (
        <>

            <div className="main2 container">
                <div className="main m-4 " style={{
                    backgroundImage: `url(${Mainbg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%'
                    // height: '100%'
                }} >
                    <div className="row">
                        <div className="container main-set col-6">
                            <h1 className='text'>Visio Spark Quiz</h1>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}

                            <Form.Group className='mb-4'>
                                <Form.Label>Enter organizer name:</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter your full name" />
                            </Form.Group>
                            
                            <Form.Group className="mb-4">
                                <Form.Label>Select Round</Form.Label>
                                <Form.Select >
                                    {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Select Timer</Form.Label>
                                <Form.Select >
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                    <option value="60">60</option>
                                </Form.Select>
                            </Form.Group>

                            <div className="d-grid gap-2 mt-3">
                                <Button type="submit" className="btn btn">

                                    <NavLink to="/start" style={{ color: 'white',textDecoration:'none' }} >Submit</NavLink>
                                </Button>
                            </div>
                        </div>
                        <div className="mainimg col-6">
                            <img src={Img} alt="" /> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main

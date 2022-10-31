import React, { useEffect, useState } from 'react'
import "./style.css"
import Data from './Data'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'


const Search = () => {


    const [data, setdata] = useState(Data);
    const [copy_data, setCopy_data] = useState([]);

    const chanegData = (e) => {
       
        let changeData = e.toLowerCase();

        if (changeData == "") {
            setCopy_data(data);
        } else {
            let storedata = copy_data.filter((ele, k) => {
                return ele.restaurant.toLowerCase().match(changeData);
            });

            setCopy_data(storedata)
        }
    }


    useEffect(() => {

        setTimeout(() => {
            setCopy_data(Data);
        }, 1000);

    }, [])

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtcZUGRKuDadxhH4LGCDTRRqMXHqzqTbCmQ&usqp=CAU" style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} />
            </div>


            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }} onClick={(e)=>{e.preventDefault()}}>Search</button>
            </Form>


            <section className='itam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants Near You</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    <Cards data={copy_data} /> 
                </div>
            </section>
            
        </>
    )
}

export default Search
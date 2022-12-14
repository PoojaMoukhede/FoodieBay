import React from 'react'
import Card from 'react-bootstrap/Card'

const Cards = ({ data }) => {
    
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.img} />

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.restaurant}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{element.address}</h5>
                                        <span>{element.price}</span>
                                    </div>


                                    <div className="lower-img-td"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.trandingimg} className="trendimg" alt="" />
                                        <p>{element.somedata}</p>
                                        <img src={element.delimg} className="delimg" alt="" />
                                    </div>
                                </div>

                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default Cards
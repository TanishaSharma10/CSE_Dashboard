import { Divider } from '@mui/material';
import React from 'react';
import "./cart.css";
//import { products } from '../home/productdata';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import prod from "./product1.jpeg";


const Cart = () => {

    const { id } = useParams("");
    // console.log(id);
    const [inddata, setIndedata] = useState("");
    // console.log([inddata]);


    useEffect(() => {
        const getinddata = async () => {
            const res = await fetch(`/getproductsone/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            // console.log(data);

            if (res.status !== 201) {
                alert("no data available")
            } else {
                // console.log("ind mila hain");
                setIndedata(data);
            }
        };
        getinddata();

    }, [id]);

    return (
        <div className="cart_section">
        { inddata && Object.keys(inddata).length &&
            <div className="cart_container">
                <div className="left_cart">
                    <img src={inddata.detailUrl} alt="img" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Like</button>
                        <button className='cart_btn2'>Dislike</button>
                    </div>

                </div>
                <div className="right_cart">
                    <h3>{inddata.title.shortTitle}</h3>
                    <h4>{inddata.title.longTitle}</h4>
                    <Divider />
                    <p className="mrp">{inddata.price.mrp}</p>
                    <p>Hands On Workshop <span style={{ color: "#B12704" }}>{inddata.discount}</span> </p> <p> <span style={{ color: "#B12704" }}>  </span> </p>
                    <div className="discount_box">
                        <h5>Tech Used: <span style={{ color: "#111" }}>TABLEAU</span></h5>
                        <h4>Date:<span style={{ color: "#111", fontWeight: 600 }}>28 Nov, 2023</span></h4> <p> <span style={{ color: "#111", fontWeight: 600 }}>C Block at 11AM</span> </p>
                    </div>
                    <p className='description' >{inddata.tagline}:<span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                </div>
            </div>


        }
        </div>
    )
}



export default Cart
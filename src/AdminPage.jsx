import { useEffect, useState } from "react";
import TdAppbar from "./TdAppbar";
import TabComponent from "./TabComponent";
import { useRecoilValue } from "recoil";
import { tabValue } from "./store/atoms/tabValue";
import { Typography } from "@mui/material";

function AdminPage() {
    const [menu, setMenu] = useState([]);
    const [burger, setBurger] = useState([]);
    const [wrap, setWrap] = useState([]);
    const [slider, setSlider] = useState([]);
    const tabValueDiv = useRecoilValue(tabValue);
    useEffect(() => {
        async function callMe() {
            try {
                const response = await fetch("http://localhost:3000/menu", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const result = await response.json();
                if (result) {
                    setMenu(result.menu);
                    let burgerArray = [];
                    let wrapArray = [];
                    let sliderArray = [];
                    result.menu.map((item) => {
                        if (item.title == "burger") {
                            { burgerArray.push(item) }
                        } else if (item.title == "wrap") {
                            { wrapArray.push(item) }
                        }
                        else {
                            { sliderArray.push(item) }
                        }
                    })
                    setBurger(burgerArray);
                    setWrap(wrapArray);
                    setSlider(sliderArray);
                }

            } catch (error) {
                console.log(error);
            }
        }
        callMe();
    }, [])

    return <>
        <TdAppbar />
        <TabComponent />
        {tabValueDiv === 0 ? (<ItemCard burger={burger} />)
            : tabValueDiv === 1 ? (<ItemCard burger={wrap} />)
                : (<ItemCard burger={slider} />)}
        {/* <RectangleCard /> */}

    </>
}
function DisplayMenu(props) {
    return (
        <div style={{
            marginLeft: "50px",
            marginTop: "50px"
        }}>

            {props.menu.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2><br />
                    <h3>{item.description}</h3><br />
                    <h3>{item.price}</h3><br /> <br />
                </div>
            ))}
        </div>
    );
}
function ItemCard(props) {
    return (<div style={{
        width: "90%",
        height: "500px",
        marginLeft: "70px",
        marginTop: "20px",
        backgroundColor: "grey",
        padding: "20px",
        display: "flex",
        flexWrap: "nowrap",
        gap:"20px", 
        justifyContent: "flex-start",
        overflowY: "scroll"
    }}>
        {props.burger.map(item => (
            <RectangleCard value={item} />
        ))}
    </div>);
}
function RectangleCard(props) {
    return (
        <div style={{
            width: '300px',
            height: '50px',
            maxHeight: '500px',
            backgroundColor: 'lightblue',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h3>{props.value.description}</h3>
            <p>Rs.{props.value.price}</p>
        </div>
    );
}


export default AdminPage;
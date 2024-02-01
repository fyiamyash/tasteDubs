import { useEffect, useState } from "react";
import TdAppbar from "./TdAppbar";
import TabComponent from "./TabComponent";
import { useRecoilValue } from "recoil";
import { tabValue } from "./store/atoms/tabValue";
import SpeedDialComponent from "./SpeedDialComponent";

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
    if(localStorage.getItem("token") !=="null")
    {
        return <>
       
        <TdAppbar />
        <TabComponent />
        {tabValueDiv === 0 ? (<ItemCard burger={burger} />)
            : tabValueDiv === 1 ? (<ItemCard burger={wrap} />)
                : (<ItemCard burger={slider} />)}

        <SpeedDialComponent />

    </>
    }
    return <>
        <TdAppbar />
        <TabComponent />
        {tabValueDiv === 0 ? (<ItemCard burger={burger} />)
            : tabValueDiv === 1 ? (<ItemCard burger={wrap} />)
                : (<ItemCard burger={slider} />)}

    </>
}
function ItemCard(props) {
    return (<div style={{
        width: "80%",
        height: "500px",
        marginLeft: "180px",
        marginTop: "20px",
        backgroundColor: "#ffee58",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap:"20px", 
        justifyContent: "flex-start",
        alignContent:"flex-start",
        overflowY: "scroll"
    }}>
        {props.burger.map((item,index) => (
            <RectangleCard key={index} value={item} />
        ))}
    </div>);
}
function RectangleCard(props) {
    if(localStorage.getItem("token") !=="null")
    {
        return (
            <div style={{
                width: '300px',
                height: '50px',
                maxHeight: '500px',
                backgroundColor: 'transparent',
                borderRadius: '10px',
                padding: '10px',
                marginBottom: '20px',
                // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}>
                <h3>{props.value.description}</h3>
                <p>Rs.{props.value.price}</p>
                <p>ID: {props.value._id}</p>
            </div>
        );
    }
    return (
        <div style={{
            width: '300px',
            height: '50px',
            maxHeight: '500px',
            backgroundColor: 'transparent',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '20px',
            // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        }}>
            <h3>{props.value.description}</h3>
            <p>Rs.{props.value.price}</p>
        </div>
    );
}


export default AdminPage;
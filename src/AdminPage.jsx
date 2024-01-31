import { useEffect, useState } from "react";
import TdAppbar from "./TdAppbar";
import TabComponent from "./TabComponent";
import { useRecoilValue } from "recoil";
import { tabValue } from "./store/atoms/tabValue";

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
                    let burgerArray=[];
                    let wrapArray=[];   
                    let sliderArray=[];   
            result.menu.map((item)=>{
                if (item.title =="burger") {
                  {burgerArray.push(item)}
                }else if(item.title=="wrap"){
                    {wrapArray.push(item)}
                }
                else{
                    {sliderArray.push(item)}
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
        {tabValueDiv ===0 ?(<DisplayBuWr burger = {burger} />)
        :tabValueDiv ===1 ?(<DisplayBuWr burger ={wrap} />)
        :(<DisplayBuWr burger ={slider} />)}

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
function DisplayBuWr(props)
{
    return<div style={{
        marginLeft: "50px",
        marginTop: "50px"
    }}>
        {props.burger.map((item, index) => (
            <div key={index}>
                <h2>{item.title}</h2><br />
                <h3>{item.description}</h3><br />
                <h3>{item.price}</h3><br /> <br />
            </div>
        ))}
    </div>
}



export default AdminPage;
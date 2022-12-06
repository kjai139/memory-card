import React from "react";
import testImage from "./imgs/Grossifleur.webp"

function Cards() {
    





    return (
        <div className="cardGrid">
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
            <div className="cards" style={{
                backgroundImage:`url(${testImage})`}}>
            </div>
                
            
        </div>
    )
}

export {Cards}
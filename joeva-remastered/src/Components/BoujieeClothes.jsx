import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoujieeClothes } from "../Actions/getBoujieeClothjes";
import BoujieClothesCard from "./BoujieClothesCard";



export const BoujieeClothes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getBoujieeClothes(dispatch)
    }, [])
    const globalClothes = useSelector((state) => state.clothes.boujieeClothes);
  return (
    <div className="clothesWrapper">
        <div className="clothesHeaderContainer">
            <div className="clothesHeader">
                <h2>Clothes</h2>
            </div>
            <div className="clothesDescription">
                <p>The finest clothes you will ever see on the market!</p>
            </div>
        </div>
        <div className="clothesProductsContainer">
            <div className="clothesProductsHeader">
                <h4>Products</h4>
            </div>
            {globalClothes.map((item, index) =>{
                return (
                <>
                    <div className="clothesCardWrapper">
                        <BoujieClothesCard key={index} item={item} />
                    </div>
                </>
                )
            })}
        </div>
    </div>
  )
};

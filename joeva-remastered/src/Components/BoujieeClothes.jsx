import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoujieeClothes } from "../Actions/getBoujieeClothjes";



export const BoujieeClothes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getBoujieeClothes(dispatch)
    }, [])
    const globalClothes = useSelector((state) => state.clothes.boujieeClothes);
    console.log("this is my console log", globalClothes)
  return (
    <div>

    </div>
  )
};

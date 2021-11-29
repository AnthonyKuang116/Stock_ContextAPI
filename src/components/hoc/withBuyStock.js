import React from 'react';
import { useState } from "react";
import { StockContext } from "../Contexts/StockContext"

export const withBuyStockData = (WrappedComponent) => {
    return () => {
        const [stockNum, setStockNum] = useState(0);

        const handleAdd = () => {
            setStockNum(stockNum + 1);
        }

        const handleSub = () => {
            if (stockNum > 0) {
                setStockNum(stockNum - 1);
            }
        }
        return (
            <StockContext.Provider value={{stockNum, handleAdd, handleSub}}>
                <WrappedComponent />
            </StockContext.Provider>
        )
    }

}

export default withBuyStockData;
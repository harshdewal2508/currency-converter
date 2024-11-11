import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((data) => setCurrencyInfo(data["rates"]));
    }, [currency]);

    console.log(currencyInfo);
    return currencyInfo;
};

export default useCurrencyInfo;
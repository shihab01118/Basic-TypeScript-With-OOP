{
    //  keyof
    interface Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;
    }

    const myCar : Car = {
        brand: "tesla",
        model: "model s",
        year: 2024,
        isElectric: true
    }

    // console.log(myCar["brand"])

    const getPropertyValue = (obj: Car, key: keyof Car) => {
        console.log(obj[key])
    }

    getPropertyValue(myCar, "year")


    // 
}
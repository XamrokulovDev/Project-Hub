// import images 
import data from "../assets/data/data.svg"

export interface Portfolio {
    id: number,
    img: string,
    title: string,
    link: string,
    discription?: string
}

export const portfolio: Portfolio[] = [
    {
        id: 1,
        img: data,
        title: "V.I.P Burger",
        link: data,
        discription: "See Site",
    },
    {
        id: 2,
        img: data,
        title: "V.I.P Burger",
        link: "https://react.dev/",
        discription: "See Site",
    },
    {
        id: 3,
        img: data,
        title: "V.I.P Burger",
        link: "https://react.dev/",
        discription: "See Site",
    },
    {
        id: 4,
        img: data,
        title: "V.I.P Burger",
        link: "https://react.dev/",
        discription: "See Site",
    },
    {
        id: 5,
        img: data,
        title: "V.I.P Burger",
        link: "https://react.dev/",
        discription: "See Site",
    },
    {
        id: 6,
        img: data,
        title: "V.I.P Burger",
        link: "https://react.dev/",
        discription: "See Site",
    },
]
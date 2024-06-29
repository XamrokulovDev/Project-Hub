// import images 
import data from "../assets/data/data.svg"
import team from "../assets/data/team.svg"
import uzum from "../assets/data/uzum.svg"
import qalampir from "../assets/data/qalampir.svg"
import olcha from "../assets/data/olcha.svg"

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

export interface Team {
    id: number,
    img: string,
    title: string,
    category: string,
}

export const teamData: Team[] = [
    {
        id: 1,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Front End",
    },
    {
        id: 2,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Back End",
    },
    {
        id: 3,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Front End",
    },
    {
        id: 4,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Back End",
    },
    {
        id: 5,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Front End",
    },
    {
        id: 6,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Back End",
    },
    {
        id: 7,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Full Stack",
    },
    {
        id: 8,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Full Stack",
    },
    {
        id: 9,
        img: team,
        title: "Saidahmad Rasulov",
        category: "Full Stack",
    },
]

export interface Servis {
    id: number;
    tarif:string;
    title1:string;
    price: string;
    reja:string;
    text1:string;
    text2:string;
    text3:string;
    text4:string;
    text5:string;

}
export const text: Servis[]=[
    {
        id:1,
        tarif:'START',
        title1:'Страницы интернет-магазина полностью индексируются',
        price:'1 850 000 UZS',
        reja:'План включает:',
        text1:'Разработка сайта',
        text2:'200 продуктов',
        text3:'Каталог и категории',
        text4:'Поиск ',
        text5:'Обратная связь'
    },
    {
        id:2,
        tarif:'PRO',
        title1:'Страницы интернет-магазина полностью индексируются',
        price:'ПО СОГЛАШЕНИЮ',
        reja:'План включает:',
        text1:'Все на тарифе Start',
        text2:'1000 продуктов',
        text3:'Интеграция с платежными системами',
        text4:'Dashboard ',
        text5:'Поддержка 8/5'

    },
    {
        id:3,
        tarif:'PREMIUM',
        title1:'Страницы интернет-магазина полностью индексируются',
        price:'ПО СОГЛАШЕНИЮ',
        reja:'План включает:',
        text1:'Все на тарифах Start и Pro   ',
        text2:'4000 продуктов',
        text3:' Мобильное приложение',
        text4:'Интеграция с 1C',
        text5:'Оплата через карты'
    },
    {
        id:4,
        tarif:'PLATINUM',
        title1:'Страницы интернет-магазина полностью индексируются',
        price:'ПО СОГЛАШЕНИЮ',
        reja:'План включает:',
        text1:'Добавление новых функции',
        text2:'Создание логотипа и брендинга',
        text3:' Рассрочка',
        text4:'Голосовой поиск',
        text5:'Обратная связь',

    },
]

export interface swiper {
    img: string;
    link: string;
}

export const swiper: swiper[]= [
    {
        img: uzum,
        link: "https://uzum.uz/ru/"
    },
    {
        img: qalampir,
        link: "https://uzum.uz/ru/"
    },
    {
        img: olcha,
        link: "https://uzum.uz/ru/"
    },
    {
        img: qalampir,
        link: "https://uzum.uz/ru/"
    },
    {
        img: olcha,
        link: "https://uzum.uz/ru/"
    },
    {
        img: uzum,
        link: "https://uzum.uz/ru/"
    },
    {
        img: qalampir,
        link: "https://uzum.uz/ru/"
    },
    {
        img: olcha,
        link: "https://uzum.uz/ru/"
    }
]
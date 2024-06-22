
export interface Person {
    id: number;
    img: string;
    name: string;
    jobs: string;
}

export const array: Person[] = [
    {
        id: 1,
        img: "",
        name: 'John',
        jobs: 'FrontEnd Developer',
    },
    {
        id: 2,
        img: "",
        name: 'Jeck',
        jobs: 'FrontEnd Developer',
    },
    {
        id: 3,
        img: "",
        name: 'Brayn',
        jobs: 'FrontEnd Developer',
    },
    {
        id: 4,
        img: "",
        name: 'Andryu',
        jobs: 'FullStack Developer',
    },
    {
        id: 5,
        img: "",
        name: 'Bob',
        jobs: 'FullStack Developer',
    },
    {
        id: 6,
        img: "",
        name: 'Bob',
        jobs: 'BackEnd Developer',
    },
    {
        id: 7,
        img: "",
        name: 'Bob',
        jobs: 'BackEnd Developer',
    },
    {
        id: 8,
        img: "",
        name: 'Bob',
        jobs: 'BackEnd Developer',
    },
];


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
        tarif:'Start',
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
        tarif:'Platinum',
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


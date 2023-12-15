import { Images } from "../assets/Images"

export const data = {
    header:
    {
        phone: "(225) 555-0118",
        mail: "michelle.rivera@example.com",
        offerMsg: "Follow Us and get a chance to win 80% off",
        socialsURL: { instagram: "instagram.com", youtube: "youtube.com", facebook: "facebook.com", twitter: "twitter.com" },
        companyName: "Bandage",
    },
    home:
    {
        heroTop: {
            slides:
                [
                    {
                        h5: "SUMMER 2020",
                        h1: "NEW COLLECTION",
                        h4: "We know how large objects will act, but things on a small scale.",
                        altText: 'Summer 2020 Products',
                        caption: 'Summer 2020',
                        src: Images.home.heroTop.summerHeroTop,
                        key: 1,
                    },
                    {
                        h5: "WINTER 2020",
                        h1: "NEW COLLECTION",
                        h4: "We know how large objects will act, but things on a small scale.",
                        altText: 'Winter 2020 Products',
                        caption: 'Winter 2020',
                        src: Images.home.heroTop.winterHeroTop,
                        key: 2,
                    },
                ]
        },
        categories:
        {
            men: { name: "men", img: Images.home.categories.men },
            women: { name: "women", img: Images.home.categories.women },
            accessories: { name: "accessories", img: Images.home.categories.accessories },
            kids: { name: "kids", img: Images.home.categories.kids },
        },
        bestSellerProducts:
            [
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product1InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product2InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product3InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product4InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product5InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product6InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product7InBS },
                { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.home.bestSellerProducts.product8InBS },
            ],
        heroBot:
        {
            slides:
                [
                    {
                        h5: "SUMMER 2020",
                        h1: "Vita Classic Product",
                        h4: "We know how large objects will act, We know how are objects will act, We know",
                        price: 16.48,
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: Images.home.heroBot.summerHeroBot,
                        key: 1,
                    },
                    {
                        h5: "WINTER 2020",
                        h1: "Vita Classic Product",
                        h4: "We know how large objects will act, We known how are objects will act, We know",
                        price: 18.48,
                        altText: 'SUMMER 2020 Products',
                        caption: 'SUMMER 2020',
                        src: Images.home.heroBot.winterHeroBot,
                        key: 2,
                    },
                ]
        },
        popularProduct:
        {
            h5: "SUMMER 2020",
            h1: "Part of the Neural Universe",
            h4: "We know how large objects will act, but things on a small scale.",
            src: Images.home.popularProduct,
        },
        featuredPosts:
            [
                {
                    src: Images.home.featuredPosts.post1,
                    title: "Loudest à la Madison #1 (L'integral)",
                    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date: "22 April 2021",
                    comments: 10,
                    learnMore: "Lorem ipsum falan fıstık",
                    key: 1
                },
                {
                    src: Images.home.featuredPosts.post2,
                    title: "Loudest à la Madison #1 (L'integral)",
                    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date: "22 April 2021",
                    comments: 10,
                    learnMore: "Lorem ipsum falan fıstık",
                    key: 2,
                }, {
                    src: Images.home.featuredPosts.post3,
                    title: "Loudest à la Madison #1 (L'integral)",
                    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    date: "22 April 2021",
                    comments: 10,
                    learnMore: "Lorem ipsum falan fıstık",
                    key: 3
                }
            ]
    },
    productList: {
        categories: [
            {
                title: "CLOTHS",
                amount: 5,
                src: Images.productList.categories.category1,
                key: 1,
            },
            {
                title: "CLOTHS",
                amount: 5,
                src: Images.productList.categories.category2,
                key: 2
            },
            {
                title: "CLOTHS",
                amount: 5,
                src: Images.productList.categories.category3,
                key: 3
            },
            {
                title: "CLOTHS",
                amount: 5,
                src: Images.productList.categories.category4,
                key: 4
            },
            {
                title: "CLOTHS",
                amount: 5,
                src: Images.productList.categories.category5,
                key: 5
            },
        ],
        products: [
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product1 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product2 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product3 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product4 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product5 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product6 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product7 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product8 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product9 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product10 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product11 },
            { name: "Graphic Design", category: "English Department", price: 16.48, discountedPrice: 6.48, colors: ["blue", "green", "orange", "purple"], img: Images.productList.products.product12 },
        ],
    },
    contact: {
        backgroundSrc: Images.contact.backgroundImg,
        locations: [
            { city: "Paris", address: "1901 Thorn ridge Cir.", postCode: "75000 Paris", phone: "+451 215 215", fax: "+451 215 215" },
            { city: "New York", address: "2715 Ash Dr. San Jose.", postCode: "75000 Paris", phone: "+451 215 215", fax: "+451 215 215" },
            { city: "Berlin", address: "4140 Parker Rd.", postCode: "75000 Paris", phone: "+451 215 215", fax: "+451 215 215" },
            { city: "Lonodon", address: "3517 W. Gray St. Utica.", postCode: "75000 Paris", phone: "+451 215 215", fax: "+451 215 215" },
        ]
    },
    about: {
        aboutUsBg: Images.about.aboutUsBg,
        statics: { customers: 15, visitors: 150, countries: 15, partners: 100 },
        videoBg: Images.about.videoBg,
        employees: [
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee1, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee2, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee3, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee4, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee5, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee6, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee7, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee8, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
            { fullname: "Username", department: "Profession", src: Images.about.employees.employee9, facebookURL: "facebook.com", instagramURL: "instagram.com", twitterURL: "twitter.com" },
        ],
        workWithUs: Images.about.workWithUs,
    },
    productPage: {
        name: "Floating Phone",
        rate: 4,
        reviews: 10,
        price: "1,139.33",
        availability: "In Stock",
        descriptionShort: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
        color: ["blue", "green", "orange", "black"],
        slides: [
            Images.productPage.firstImgOfProduct, 
            Images.productPage.midImgOfProduct,
        ],
        descriptionSrc: Images.productPage.lastImgOfProduct,
    }
    ,
    team:{
        hero:{headline:Images.team.hero.headline, others:Images.team.hero.others}
    }
}
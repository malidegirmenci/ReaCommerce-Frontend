import { Images } from "../assets/Images"

export const data = {
    header:
    {
        phone:"(225) 555-0118",
        mail:"michelle.rivera@example.com",
        offerMsg:"Follow Us and get a chance to win 80% off",
        socialsURL: {instagram:"instagram.com",youtube:"youtube.com", facebook:"facebook.com", twitter:"twitter.com"},
        companyName:"Bandage",
    },
    home:
    {
        hero:{
            slides : [
                {
                    h5: "SUMMER 2020",
                    h1: "NEW COLLECTION",
                    h4: "We know how large objects will act, but things on a small scale.",
                    altText: 'Summer 2020 Products',
                    caption: 'Summer 2020',
                    src: Images.hero.summer,
                    key: 1,
                },
                {
                    h5: "WINTER 2020",
                    h1: "NEW COLLECTION",
                    h4: "We know how large objects will act, but things on a small scale.",
                    altText: 'Winter 2020 Products',
                    caption: 'Winter 2020',
                    src: Images.hero.winter,
                    key: 2,
                },
            ]
        }
        
    },
    
}
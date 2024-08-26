export const navbarData = {

    navLinks : [
         {
            id:1,
            title: 'Home',
            path: '/'
         },

         {
            id:2,
            title: 'About Us',
            path:'/about-us',
            dropdown:[
                {id:21 , title:'Company Profile' , path:'/about-us/company-profile'},
                {id:22 , title: 'Vision and Mission' , path: '/about-us/vision-and-mission'},
                {id:23 , title:'Awards and Recognition' , path:'/about-us/awards-and-recognition'},
                {id:24 , title:'Terms and Condition' , path:'/about-us/terms-and-condition'},
                {id: 25 , title:'FAQ' , path:'/about-us/faq'}
            ]
         },

         {
            id:3,
            title:'Product Range',
            path: '/product-range',
            dropdown:[
             {id:31 , title:'Insecticides' ,path:'/product-range/insecticides'},
             {id:32 , title:'Fungicides' ,path:'/product-range/fungicides'},
             {id:33 , title:'Herbicides' ,path:'/product-range/herbicides'},
             {id:34 , title:'Fertilizers' , path:'/product-range/fertilizers'},
             {id:35 , title:'Bio Products' , path:'/product-range/bio-products'},
             {id:36 , title:'Micro Nutrients' ,path:'/product-range/micro-nutrients'},
             {id:37 , title:'Plant Growth Regulators' ,path:'/product-range/plant-growth-regulators'},
            ]
         },

         {
            id:4,
            title:'Gallery',
            path:'/gallery'
         },

         {
            id:5,
            title:'Contact Us',
            path:'/contact-us',
            dropdown: [
                {id:51 , title:'Contact' , path:'/contact-us/contact' },
                {id:52 , title:'Branches' , path:'/contact-us/bramches'}

            ]
         }

        
    ]
}
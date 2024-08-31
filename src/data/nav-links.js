import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";


export const navbarData = {
 navItems : [
   { label: 'Home', path: '/' },
   {
     label: 'About Us',
     path: '/about',
     dropdown: [
       { label: 'Company Profile', path: '/about/company-profile' },
       { label: 'Vision and Mission', path: '/about/vision' },
       { label: 'Awards and Recognition', path: '/about/awards' },
       { label: 'Terms and Condition', path: '/about/terms' },
       { label: 'FAQ', path: '/about/faq' },
     ],
   },
   {
     label: 'Product Range',
     path: '/products/insecticides',
     dropdown: [
       { label: 'Insecticides', path: '/products/insecticides' },
       { label: 'Fungicides', path: '/products/fungicides' },
       { label: 'Herbicides', path: '/products/herbicides' },
       { label: 'Fertilizers', path: '/products/fertilizers' },
       { label: 'Bio Products', path: '/products/bioproducts' },
       { label: 'Micro Nutrients', path: '/products/micronutrients' },
       { label: 'Plant Growth Regulators', path: '/products/plantgrowth' },
     ],
   },
   {
     label: 'Gallery',
     path: '/photo-gallery',
     
   },
   
   {
     label: 'Contact Us',
     path: '/contact/contact-us',
     dropdown: [
       { label: 'Contact', path: '/contact/contact-us' },
       { label: 'Branches', path: '/contact/branches' },
     ],
   },
   
 ],

 


  socialLinks : [
   { 
    title : "facebook",
    link: "https://www.facebook.com/oswalcropprotection",
    icon : FaFacebook ,
    color: "#316FF6",

    },

   {title : "instagram",
    link: "https://www.instagram.com/oswalcrop/",
    icon : FaSquareInstagram,
    color: "#E4405F",
},
   { title : "youtube",
    link: "https://www.youtube.com/channel/UCEZxl9GCwmS2POmzUWXkhMg",
    icon : FaYoutube,
    color: "#FF0000",
},
   { title : "whatsapp",
    link: "https://wa.me/+919599500406",
    icon : IoLogoWhatsapp,
    color: "#027148",
},
   {title : "linkedin",
    link: "https://www.linkedin.com/in/ramesh-bansal-29b203299/",
    icon : FaLinkedinIn,
    color: "#0077B5 ",
},
 ]

}
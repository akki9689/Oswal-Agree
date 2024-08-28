

export const navbarData = {
 navItems : [
   { label: 'Home', path: '/' },
   {
     label: 'About Us',
     path: '/about',
     dropdown: [
       { label: 'Company Profile', path: '/about/companyprofile' },
       { label: 'Vision and Mission', path: '/about/vision' },
       { label: 'Awards and Recognition', path: '/about/awards' },
       { label: 'Terms and Condition', path: '/about/terms' },
       { label: 'FAQ', path: '/about/faq' },
     ],
   },
   {
     label: 'Product Range',
     path: '/products',
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
     path: '/gallery',
     
   },
   
   {
     label: 'Contact Us',
     path: '/contact',
     dropdown: [
       { label: 'Contact', path: '/contactUs/contact' },
       { label: 'Branches', path: '/contactUs/branches' },
     ],
   },
   
 ],

  socialLinks : [
   { url: 'https://www.facebook.com'},
   { url: 'https://instagram.com'},
   { url: 'https://youtube.com'},
   { url: 'https://whatsapp.com'},
   { url: 'https://linkedin.com'},
 ]

}
import React from 'react';

import Protection from '../common/Protection'
import  { protectionData } from '../../data/home/protectionData'
const ctparseText = (text) => {
  return text
    .replace(/Oswal Crop Protection Pvt. Ltd./g, '<strong>Oswal Crop Protection Pvt. Ltd.</strong>')
    .replace(/Mr. Ramesh Bansal/g, '<strong>Mr. Ramesh Bansal</strong>')
    .replace(/ISO 9001:2015 certified company/g, '<strong>ISO 9001:2015 certified company</strong>');
};
export const Companyprotection = () => {
  return (
    <Protection data={protectionData} parseText={ctparseText} />
  )
};

export default Companyprotection;

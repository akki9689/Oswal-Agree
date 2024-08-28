import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Popupname from '../common/Popupname';
const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);
  const faqData = [
    {question: "What is the Difference Between Fertilisers and Pesticides?",
        answer: "Fertiliser is a chemical substance that makes land and soil fertile for better growth of crops. While pesticides are the chemical substance that protects the crop and land from pests that can infect the crops.", },
    {question: "What are the different types of pesticides?",answer: "Pesticides can be classified as herbicides that kill weeds, insecticides that kill insects, fungicides that prevent fungus, and rodenticides that prevent rodents from inhabiting.",},
    {question: "What is the difference between pesticide and insecticide?",answer: "Pesticide is a broader term involving various pests that control the reproduction or inhabitation of weeds, bacteria, fungi, insects, and other detrimental micro-organisms. While insecticide is a type of pesticide that only controls insect growth and inhabitation.",},
    {question: "What is the difference between herbicides and pesticides?",answer: "Herbicides are a specific type of pesticide that controls and restricts the growth of weeds and unwanted vegetation on farm fields. Also, pesticides consist of a wide variety such as insecticides, herbicides, weedicides, molluscicides, and fungicides that control the growth of a variety of pests that can impact crop cultivation & harvests.",},
    {question: "What is the most common pesticide?",answer: "Ans. Chlorpyrifos is one of the most used pesticides introduced in 1965 which protects crops like corn, soybeans, apples, broccoli and others. In addition, this pesticide has applications even in non-agricultural settings like golf courses.",},
    {question: "Why do farmers need Pesticides?",answer: "Farmers need pesticides to protect their crops and land from a variety of pests such as insects, rodents, fungi, weeds, bacteria, and others that can disrupt the growth of crops. Furthermore, they help farmers to increase their crop yield and farm productivity by being able to grow 2-3 crops per year.",},
    {question: "What is chemical pesticide?",answer: "Chemical pesticides are chemicals that are used to kill insects. Pests can be insects on those plants which include thrips, aphids, whiteflies, mites, bugs, larvae and etc. Chemical pesticides also kill rodents, and disease-causing pathogens such as fungi, bacteria, and viruses that cause major losses in agricultural crops. Based on the pests they control, insecticides are classified into insecticides, fungicides, miticides, nematicides, rodenticides, herbicides, defoliants, and plant growth regulating agents.",},
    {question: "Is this chemical pesticide safe or not?",answer: "Chemical pesticides are used to kill insects that are harmful to plants. They are toxic and harmful. Hence while using chemical insecticide, there is a need to strictly read the product label and follow it accordingly. If there is a safety period between use and consumption, toxicity may be reduced. Unless and until otherwise the label claims it is safe, it is not safe.",},
    {question: "Is this pesticide organic or chemical?",answer: "Naturally occurring chemical pesticides are made from chemicals unless the label claims it is non-chemical. Chemical pesticide toxicity is indicated by the intensity of the toxic nature of chemical pesticides.",},
    {question: "How should I use this insecticide?",answer: "Pesticides are classified on the basis of which it controls or manages insecticides, fungicides, miticides, nematicides, rodenticides, herbicides, defoliants and plant growth regulating agents. The label which will be provided along with the insecticides will guide you about how to use, when to use, what is safe or unsafe, safety period etc. Experts can also guide the users.",},
    {question: "Can this insecticide be used with others or should it be single?",answer: "Chemical insecticides are recommended in singles with the goal of killing a particular pest. Combination with other insecticides is generally not recommended. However, one class of insecticides may be compatible with another class of insecticides such as insecticides, fungicides or bactericides or plant growth regulators and such information is provided in the label of insecticides, which is to be followed strictly.",},
    {question: "Is this insecticide sufficient for disease and pest control?",answer: "One insecticide cannot control both the disease and the pest, a separate fungicide or bactericide should be used for any type of diseases and an insecticide for the target pest. Some molecules can work for both but very rare.",},
    {question: "Is this insecticide effective against the moth?",answer: "Pesticides are used to manage or control a particular problem may be a disease, may be a pest and may be a nematode or any other agent that is harmful to plants. If the insecticide is an insecticide using against the target pest and if it is used as per the label with proper dosage then surely the pest can be controlled.",},
    {question: "Will this insecticide be effective against the disease?",answer: "Pesticides are used to manage or control a particular problem may be a disease, may be a pest and may be a nematode or any other agent that is harmful to plants. If the insecticide is an insecticide using against the target disease and if it is used as per the label with proper dosage then surely the disease can be controlled.",},
    {question: "How long do I have to wait to harvest after applying an insecticide?",answer: "Chemical pesticides recommended to control or manage pests are certainly made of harmful or dangerous ingredients. The manufacturer will provide a protection time to the crop after the insecticide has been applied. This will be suggested by the developer and communicated with users to keep pesticides safe. All information will be given on the label and everyone must read the information on the label before using the insecticide.",},
    
  ];
 
  useEffect(() => {
    if (expandedIndex !== null) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [expandedIndex]);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="p-8">
        <div><Popupname title='FREQUENTLY ASKED QUESTIONS'/></div>
      <div className="w-10/12 mt-16 mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-4 ml-0 mmd:ml-20">
            <div className="flex items-center cursor-pointer " onClick={() => handleToggle(index)}>
              <FontAwesomeIcon
                icon={expandedIndex === index ? faMinus : faPlus}
                className="mr-2 text-[rgb(0,121,54)]"
              />
              <h3
                className={`text-base font-bold transition-colors duration-300 ${
                  expandedIndex === index ? 'text-gray-500' : 'text-[rgb(0,121,54)]'
                }`}
              >
                {item.question}
              </h3>
            </div>
            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: expandedIndex === index ? height : '0px' }}
              ref={contentRef}
            >
              <p className="mt-2 ml-8 text-md">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
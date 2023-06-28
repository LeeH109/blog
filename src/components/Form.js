import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";
import React, { useState } from "react";
import { addCard } from "../redux/cardSlice";
const Form = ({setClickButton}) => {
    const card = useSelector((state=>state.card))
    const dispatch = useDispatch()
    // console.log(card.cards);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    // const handleSave =()=>{
    //     setClickButton(false)
    // }
    // console.log(card.cards);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setClickButton(false)
        const add = {
         title:title,
         description:description,
        };

        dispatch(addCard(add));
      };
  return (
    
    
     <form onSubmit={handleSubmit}> 
      <div class="mx-auto container py-20 px-6">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div class="rounded">
            <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-2">
                  Title
                </h4>
                <div class="mb-3">
                  <Input data={title} setData={setTitle} />
                </div>
                <p class="text-gray-800 dark:text-gray-100 text-sm">
                  Descriptions
                </p>
                <div class="mb-3 mt-2">
                  <Input type="textarea"
                  data={description}  setData={setDescription} />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <button
                    // onClick={handleSave}
                    className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800
                     text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                    aria-label="edit note"
                    role="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      color="white"
                      width="800px"
                      height="800px"
                      viewBox="0 0 512 512"
                      version="1.1"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="add-copy"
                          fill="#000000"
                          transform="translate(42.666667, 42.666667)"
                        >
                          <path
                            d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
                            id="Shape"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
   
  );
};

export default Form;

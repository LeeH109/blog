import React from 'react';
import { useSelector } from 'react-redux';

const ListCard = () => {
    const listCard = useSelector((state)=>state.card)
    // console.log(listCard.cards[0].color);
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    

    return (
        <div>
            {/* list card  */}
            <div>
                <div class="mx-auto container py-20 px-6">

            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               
            {listCard.cards.map((card,index)=>(
             <div class="rounded">
             {/* {card.color} */}
                    <div className={`  w-full  flex flex-col justify-between
                     dark:bg-gray-800 bg-white
                      dark:border-gray-700
                       rounded-lg border mb-6 py-5 px-4
                       bg-${card.color}-200
                       `}
                     
                       
                        >

                        <div>
                            <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">
                           {card.title} </h4>
                            <p class="text-gray-800 dark:text-gray-100 text-sm">
                          {card.description} </p>
                        </div>
                        <div>
                            <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                                <p class="text-sm">{currentDay}/{currentMonth}</p>
                                <button class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black" aria-label="edit note" role="button">
                                    <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                 </div>
           
            ))}
            </div>
               
                </div>
                </div>
        </div>
    );
};

export default ListCard;
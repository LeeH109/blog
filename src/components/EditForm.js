import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { updateCard } from '../redux/cardSlice';
import { useDispatch } from 'react-redux';

const EditForm = ({ editMode, card, index,handleCancel }) => {
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [color, setColor] = useState(card.color);
  const colors = ['red', 'yellow', 'orange', 'teal', 'violet'];
  const dispatch = useDispatch();

  const handleColor = (color) => {
    setColor(color);
  };

  const handleUpdateNote = (index, e) => {
    e.preventDefault();
    const updatedCard = {
      index: index,
      title: title,
      description: description,
      color: color,
    };
    dispatch(updateCard(updatedCard));
    handleCancel(index)
  };

  return (
    <div>
      <form
        className={`${
          editMode ? 'right-1/4' : '-right-full'
        } w-4/5 bg-white fixed top-0 h-3/5 items-center shadow-2xl md:x-[35vw] xl:max-w-[32vw] transition-all duration-300 z-20 px-4 my-2 mb-2 lg:px-[35px]`}
      >
        <div class="mx-auto container py-9 px-6">
          <div class="grid sm:grid-cols-1 ">
            <h3 className="text-center font-bold mb-5 text-2xl">Update Note</h3>
            {/* {index} */}
            <div class="rounded">
              <div class="w-full h-[250px] flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-2">Title</h4>
                  <div class="mb-3">
                    <Input data={title} setData={setTitle} />
                  </div>
                  <p class="text-gray-800 dark:text-gray-100 text-sm">Descriptions</p>
                  <div class="mb-3 mt-2">
                    <Input type="textarea" data={description} setData={setDescription} />
                  </div>
                  <div className="flex container w-full m-auto">
                    <div className="flex my-2">
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className={`p-3 mx-3 rounded-full border-gray-200 border-[1px] hover:border-black duration-300 ease-in-out ${
                            color === card.color ? 'border-black' : ''
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColor(color)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div class="mt-6 flex items-center justify-between text-gray-800 dark:text-gray-100">
                    <Button text="x" onClick={() => handleCancel(index)} />
                    <button
                      onClick={(e) => handleUpdateNote(index, e)}
                      className="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center
                      justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
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
                       strokeWidth="1"
                       fill="none"
                       fillRule="evenodd"
                     >
<g
                         id="add-copy"
                         fill="#000000"
                         transform="translate(42.666667, 42.666667)"
                       >
<path
                           d="M213.333333,0 C95.51296,0 0,95.51296 0,213.333333 C0,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,0 213.333333,0 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z"
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
</div>
);
};

export default EditForm;
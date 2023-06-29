import React from "react";

const Input = ({ type, data, setData, label  }) => {

  return (
    <div>
      <label> {label} </label>
      {type === "textarea" ? (
        <textarea
          type="text"
          className="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) 

      :
        (
        <input
          type="text"
          placeholder={data}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </div>
  );
};

export default Input;
// : type==="file" ? (
//   <input
//     type="file"
//     placeholder={data}
//     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     onChange={(e) => setData(e.target.value)}

//   />
// )
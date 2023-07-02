import React, { useState } from "react";
import Update from "./Update";
import Button from "../components/components/Button";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [clickButton, setClickButton] = useState(false);

  const handleClickUpdate = () => {
    console.log("1");
    setIsOpen(true);
  };
  const handleClickButton = () => {
    setClickButton(!clickButton);
    console.log(clickButton);
  };

  return (
    <div>
      {/* <div className="flex"> */}
      <div class="font-poppins antialiased overflow-hidden">
        <div id="view" class="h-full w-screen flex flex-row w-full">
          <div className="w-1/6 max-w-[300px]:hidden  ">
            <Sidebar />
          </div>
          <div className=" w-5/6 ">
            <div className=" container m-auto flex mt-10">
              <div className="w-3/5 flex m-auto ">
                <img
                  src={user.avt}
                  class="w-[150px] h-[150px] bg-cover rounded-full shadow-lg
                   border-red-50 border-[3px] "
                  alt="Avatar"
                />
                <div className="ml-28 mt-3">
                  <p className="uppercase font-3xl font-bold"> {user.name} </p>
                  <p className="mb-1 mt-1"> {user.age} </p>
                  <p className="mb-5 mt-1"> {user.bio} </p>
                  <Button text="Edit Profile" onClick={handleClickUpdate} />
                  
                </div>
              
              </div>
              {/*  */}
            
             
            </div>
            <hr class="h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700 w-4/6 m-auto "/>
            <h4 className="text-center mb-1">New Note</h4>
<div className=" container flex m-auto justify-center ">

{clickButton ? (
                <div className="">
                  <Button text="x" onClick={handleClickButton} />
                  <Form setClickButton={setClickButton} clickButton={clickButton}
                   handleClickButton={handleClickButton} />
                   
                </div>
              ) : (
                <div>
                  <Button text="+" onClick={handleClickButton} />
                </div>
              )}
</div>
            <div className="mr-4" >
            <ListCard  />
            </div>


            {/*  */}
            <div>
              <div className="w-full">
                {isOpen ? <Update setIsOpen={setIsOpen} isOpen={isOpen} /> : <></>}
              </div>
              

              <div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Button text="Update" onClick={handleClickUpdate} type="success" />
      <div className="w-full">
      {isOpen ? (
          <Update setIsOpen={setIsOpen} />
      ):(
        <></>
      )}
    
      </div>
      {clickButton ?(
        <div>
        <Button text="x" onClick={handleClickButton} />
        <Form setClickButton={setClickButton}  />
        </div>
         
      ):( <div>
        <Button text="+" onClick={handleClickButton} />
      
      </div>
     
       )}
        
    
      <div>
        <ListCard/>
      </div> */}
    </div>
  );
};

export default Home;

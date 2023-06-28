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
      <div class="font-poppins antialiased">
        <div id="view" class="h-full w-screen flex flex-row">
          <Sidebar />
          <div className="flex-1">
            <div className="w-3/5 container m-auto flex mt-3">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                class="w-36 rounded-full shadow-lg"
                alt="Avatar"
              />
              <div>
                <p className="uppercase"> {user.name} </p>
                <p> {user.age} </p>
              </div>
            </div>
            <div>
              <Button
                text="Update"
                onClick={handleClickUpdate}
                type="success"
              />
              <div className="w-full">
                {isOpen ? <Update setIsOpen={setIsOpen} /> : <></>}
              </div>
              {clickButton ? (
                <div>
                  <Button text="x" onClick={handleClickButton} />
                  <Form setClickButton={setClickButton} />
                </div>
              ) : (
                <div>
                  <Button text="+" onClick={handleClickButton} />
                </div>
              )}

              <div>
                <ListCard />
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

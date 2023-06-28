import React, { useState } from "react";
import Input from "../components/components/Input";
import Button from "../components/components/Button";
import { update } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Update = ({ setIsOpen }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //  console.log(user);
  //
  const [name, setName] = useState("Hạnh Nguyễn");
  const [age, setAge] = useState("20");
  const [avt, setAvt] = useState("avt");
  //  console.log(name);
  //  console.log(age);
  const listAvt = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(avt);
    setIsOpen(false);
    const updateUser = {
      name: name,
      age: age,
      avt: avt,
    };
    dispatch(update(updateUser));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          {/* edit */}

          <div>
            <div class="mb-6">
              <Input label="Name" data={user.name} setData={setName} />
            </div>
            <div class="mb-6">
              <Input
                label="Age"
                data={user.age}
                setData={setAge}
                type="textarea"
              />
            </div>
            <label> ảnh đại diện</label>

            {listAvt.map((item,index ) =>(
  <div className="flex container w-4/5 m-auto flex-row ">
    <img  src={item} className="w-[30px]" />
    </div>
            )
 )}
            {/* <img  alt="https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7" /> */}
          </div>
          <Button text="Save" />

          <p> Anh </p>
          <div>{}</div>
        </section>
      </form>
    </div>
  );
};

export default Update;

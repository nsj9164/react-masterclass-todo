import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("FirstName")} placeholder="FirstName" />
        <input {...register("LastName")} placeholder="LastName" />
        <input {...register("UserName")} placeholder="UserName" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

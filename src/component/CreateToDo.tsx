import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atom";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    // 여기에 함수를 쓴다면, 함수의 리턴값이 새로운 state + 현재 state에 쉽게 접근할 수 있음
    // toDos.push ::: 렌더링 다시 발생하지 X, 기존의 toDos를 mutate하고 있어

    // [oldToDos] -> 배열(배열안에 배열이 됨) [...oldToDos] -> 배열 안의 요소 반환
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To DO",
        })}
        placeholder="Write a to do"
      />

      <button>Add</button>
    </form>
  );
}

export default CreateToDo;

import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-4 border border-solid border-black p-4"
    >
      <label>First Name</label>
      <input
        {...register("firstName")}
        className="border border-solid border-black"
      />
      <label>Gender Selection</label>
      <select
        {...register("gender")}
        className="border border-solid border-black"
      >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

import { StyledLogin } from "../componentStyles/Login.styled";
import { useForm } from "react-hook-form";
import { handleSave } from "../utils/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormData } from "../types/types";
import FormInput from "./FormInput";
import { useUserData } from "../context/UserContext";
// shema for form valiation
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: `field can't be empty` })
    .max(256, { message: `max number of characters is 256` }),
  age: z
    .number({
      invalid_type_error: `you must enter your age`,
    })
    .positive()
    .int()
    .gte(12, {
      message: `you must be 12 years old or older`,
    }),
  email: z.string().email(),
});

// props type
type Props = {
  setIsLoged: (isLoged: boolean) => void;
};

const Login = ({ setIsLoged }: Props) => {
  const { register, control, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { errors } = formState;
  const { setLogedUser } = useUserData();
  return (
    <StyledLogin>
      <form
        onSubmit={handleSubmit((formValues) => {
          handleSave(formValues, setIsLoged, setLogedUser);
        })}
      >
        <FormInput
          {...register("name")}
          labelText="Name"
          error={errors.name?.message}
          notice=""
        />

        <FormInput
          {...register("age", { valueAsNumber: true })}
          labelText="Age"
          error={errors.age?.message}
          notice="you must be 12 or older"
        />
        <FormInput
          {...register("email")}
          labelText="Email"
          error={errors.email?.message}
          notice=""
        />
        <div className="submit-button">
          <button type="submit" value="submit">
            ENTER
          </button>
        </div>
      </form>
    </StyledLogin>
  );
};

export default Login;

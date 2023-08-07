import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup
    .string()
    .email('You must provide a valid email adress')
    .required('Email adress is required'),
  password: yup.string().min(7).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(
      logIn({
        email: data.email,
        password: data.password,
      })
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label>
        Login
        <input type="email" {...register('email')} placeholder="Email" />
        {errors.email && <p>{errors.email?.message}</p>}
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

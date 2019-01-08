import * as React from 'react';
import styled from 'src/Theme/styled-components';
import capitalize from 'src/Utils/capitalize';
import { LOGIN_VIEW } from 'src/Constants';

const Input = styled.input`
  background: white !important;
  border: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: none;
  color: ${props => props.theme.textColor};
  transition: border-color 0.15s ease-in-out;
  padding: 12px;
  font-size: 14px;
  width: 300px;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.skyBlue};
  }
  &:-internal-autofill-selected {
    background-color: white !important;
  }
`;

type LoginFormProps = {
  view: LOGIN_VIEW;
};

const LoginForm: React.SFC<LoginFormProps> = ({
  view,
}): React.ReactElement<LoginFormProps> => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): any =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <form>
        <p>
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={onChange}
          />
        </p>
        <p>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={onChange}
          />
        </p>
        <p>
          <button type="submit">{capitalize(view)}</button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

import styled from 'styled-components';
import { StyledComponentProps } from '../../types/styled';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.button.label};
  min-width: 165px;
  width: auto;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
`;

const SubmitButton: React.FC<StyledComponentProps> = ({
  children,
  className,
}) => {
  return <Button className={className}>{children}</Button>;
};

export default SubmitButton;

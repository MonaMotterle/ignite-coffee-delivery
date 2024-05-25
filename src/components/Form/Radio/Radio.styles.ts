import styled from 'styled-components';

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s;
  border: 1px solid ${(props) => props.theme.base.button};
  background: ${(props) => props.theme.base.button};

  color: ${(props) => props.theme.base.text};

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.base.hover};
  }

  &[data-state='true'] {
    border: 1px solid ${(props) => props.theme.brand.purple.default};
    background: ${(props) => props.theme.brand.purple.light};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.brand.purple.default};
  }
`;

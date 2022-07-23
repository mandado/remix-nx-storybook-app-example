import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Merge } from 'type-fest';
import { input, InputProps as InputPropsStyle } from './style';

type InputProps = Merge<
  ComponentPropsWithoutRef<'input'>,
  InputPropsStyle
>;
type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { variant, size, type, className, ...restProps } = props;
  return (
    <input
      {...restProps}
      ref={ref}
      className={input({ variant, size, class: className })}
      type={type}
    />
  );
})

export default Input;

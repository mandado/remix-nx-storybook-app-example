import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Merge } from 'type-fest';
import { input, InputProps as InputPropsStyle } from './style';

type InputProps = Merge<
  ComponentPropsWithoutRef<'input'>,
  InputPropsStyle
>;
type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { variant, size, className, ...restProps } = props;

  console.log(
    input({ class: className, variant, size })
  )

  return (
    <input
      {...restProps}
      ref={ref}
      className={input({ variant, size })}
      type="text"
    />
  );
})

export default Input;

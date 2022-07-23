import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Merge } from 'type-fest';
import { button, ButtonProps as ButtonPropsStyle } from './style';

type ButtonProps = Merge<
  ComponentPropsWithoutRef<'button'>,
  ButtonPropsStyle
>;
type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { variant, size, children, ...otherProps } = props;
  return (
    <button ref={ref} className={button({ size, variant })} {...otherProps}>
      {children}
    </button>
  );
});

export default Button;

import cn from "classnames";
interface Props {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: React.FC<Props> = ({
  children,
  className,
  el = "div",
  clean
}) => {
  const rootClassName = cn(className);

  let Component: React.ComponentType<
    React.HTMLAttributes<HTMLDivElement>
  > = el as any;

  return (
    <Component className={`${rootClassName} container`}>
      {children}
    </Component>
  );
};

export default Container;

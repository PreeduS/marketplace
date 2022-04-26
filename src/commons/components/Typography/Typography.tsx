import { Wrapper } from './Typography.styled';

type Props = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  marginTop?: string;
  marginBottom?: string;
  onClick?: React.MouseEventHandler;
  style?: Object;
};

const Typography = ({
  children,
  as,
  marginTop,
  marginBottom,
  onClick,
  style = {},
}: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      as={as}
      marginTop={marginTop}
      marginBottom={marginBottom}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export default Typography;

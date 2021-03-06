import { Wrapper } from './Typography.styled';

export type Props = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  onClick?: React.MouseEventHandler;
  style?: Object;
};

const Typography = ({
  children,
  as,
  marginTop,
  marginBottom,
  marginLeft,
  onClick,
  style = {},
}: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      as={as}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export default Typography;

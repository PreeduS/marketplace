import { Wrapper } from './Asset.styled';
import Typography from 'src/commons/components/Typography';

type Props = {
  imageUrl?: string;
  link?: string;
  title?: string;
};

const Asset = ({ imageUrl, link, title }: Props) => {
  return (
    <Wrapper
      onClick={link ? () => window.open(link, '_blank') : undefined}
      imageUrl={imageUrl}
    >
      <Typography as='h5' style={{ cursor: 'pointer' }}>
        {title}
      </Typography>
    </Wrapper>
  );
};

export default Asset;

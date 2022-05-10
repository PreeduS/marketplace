import React from 'react';
import {
  Wrapper,
  IconContainer,
  Details,
  Description,
  TagsContainer,
} from './BoxItem.styled';
import Typography from 'src/commons/components/Typography';

import { Tag, TagTypeName } from 'carbon-components-react';

import { useNavigate } from 'react-router-dom';

type Props = {
  id?: number;
  title: React.ReactNode;
  details: React.ReactNode;
  description: React.ReactNode;
  disabled?: boolean;
  tags?: { id: number; label: string }[];
  icon?: React.ReactNode;
  tagType?: TagTypeName;
};

const BoxItem = ({
  id,
  title,
  details,
  description,
  disabled,
  tags,
  icon,
  tagType = 'cool-gray',
}: Props) => {
  const navigate = useNavigate();

  const clickHandler = React.useMemo(() => {
    if (disabled) {
      return undefined;
    }
    return () => {
      if (id !== undefined) {
        navigate(`/product/${id}`);
      }
    };
  }, [id, disabled, navigate]);

  return (
    <Wrapper disabled={disabled}>
      <IconContainer>{icon}</IconContainer>

      <Typography as='h5' marginBottom='.25rem' onClick={clickHandler}>
        {title}
      </Typography>
      {false && <Details>{details}</Details>}
      <Description>{description}</Description>

      <TagsContainer>
        {/*<Tag type='cool-gray' size='sm'>
            Quantum
          </Tag>*/}
        <div>
          {tags &&
            tags.map(value => (
              <Tag key={value.id} type={tagType} size='sm'>
                {value.label}
              </Tag>
            ))}
        </div>
      </TagsContainer>
    </Wrapper>
  );
};

export default BoxItem;

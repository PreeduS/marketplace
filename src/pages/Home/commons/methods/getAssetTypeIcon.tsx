import { assetType } from 'src/commons/data/constants';

import {
  ChartBubblePacked32,
  Course32,
  Application32,
  Carbon32,
} from '@carbon/icons-react';

export const assetTypeIcons = {
  [assetType.algorithms.id]: ChartBubblePacked32,
  [assetType.educationCourses.id]: Course32,
  [assetType.application.id]: Application32,
  [assetType.thirdPartyAssets.id]: Carbon32,
};

const getAssetTypeIcon = ({ assetTypeId }: { assetTypeId: number }) => {
  const Component = assetTypeIcons[assetTypeId];

  if (Component) {
    return <Component />;
  }
  return null;
};

export default getAssetTypeIcon;

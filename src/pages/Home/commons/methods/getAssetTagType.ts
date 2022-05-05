import { assetType } from 'src/commons/data/constants';

import {  TagTypeName } from 'carbon-components-react';


 
export const assetTypeTagType = {
  [assetType.algorithms.id]: 'teal',
  [assetType.educationCourses.id]: 'cyan',
  [assetType.application.id]: 'blue',
  [assetType.thirdPartyAssets.id]: 'cool-gray',
}

const getAssetTagType = ({assetTypeId}:{assetTypeId: number}) => {
  return assetTypeTagType[assetTypeId] as TagTypeName
}

export default getAssetTagType
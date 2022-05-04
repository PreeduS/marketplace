export const assetType = {
  educationCourses: {
    id: 1,
    label: 'Education',
  },
  algorithms: {
    id: 2,
    label: 'Algorithms',
  },
  application: {
    id: 3,
    label: 'Application',
  },
  thirdPartyAssets: {
    id: 4,
    label: 'Partners?',
  },
};

export type AssetTypeKeys = keyof typeof assetType;

export const tag = {
  algebra: {
    id: 1,
    label: 'Algebra',
  },
  quantumMachineLearning: {
    id: 2,
    //label: 'Quantum Machine Learning',
    label: 'Machine Learning',
  },
  optimization: {
    id: 3,
    label: 'Optimization',
  },
  chemistry: {
    id: 4,
    label: 'Chemistry',
  },
};
export type TagTypeKeys = keyof typeof tag;

export const filters = {
  assetType: (Object.keys(assetType) as AssetTypeKeys[]).map(
    key => assetType[key]
  ),
  tag: (Object.keys(tag) as TagTypeKeys[]).map(key => tag[key]),
};

/*
  quantumSolutions: {
    id: 1,
    label: 'Quantum solutions'
  },
*/

/*
  foundation: {
    id: 1,
    label: 'Foundation',
  },
*/

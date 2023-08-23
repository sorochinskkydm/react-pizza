import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='130' cy='113' r='100' />
    <rect x='20' y='396' rx='10' ry='10' width='80' height='25' />
    <rect x='160' y='395' rx='10' ry='10' width='80' height='25' />
    <rect x='20' y='237' rx='0' ry='0' width='220' height='20' />
    <rect x='20' y='286' rx='0' ry='0' width='220' height='60' />
  </ContentLoader>
);

export default Skeleton;

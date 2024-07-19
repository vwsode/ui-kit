import { FC } from 'react';
import { STest } from './Test.styles';

type TestProps = {
  text: string;
};

export const Test: FC<TestProps> = ({ text }) => {
  return <STest>{text}</STest>;
};

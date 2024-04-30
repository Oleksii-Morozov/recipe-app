import Svg, { Path } from 'react-native-svg';

type MoneyIconProps = {
  color?: string;
};

const MoneyIcon = ({ color = '#F3F3F3' }: MoneyIconProps) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M5.45326 4.86109L4.56963 9.01822M15.4304 6.98179L14.5467 11.1389M3.6699 1.44056L18.4508 4.58234C18.961 4.69078 19.2797 5.22539 19.1625 5.77641L17.466 13.7581C17.3489 14.3091 16.8403 14.6679 16.3301 14.5594L1.5492 11.4177C1.039 11.3092 0.720349 10.7746 0.837465 10.2236L2.53402 2.24191C2.65115 1.69089 3.15969 1.33212 3.6699 1.44056ZM12.0786 8.44182C11.8346 9.58976 10.7061 10.3226 9.55819 10.0786C8.41024 9.83456 7.67743 8.70614 7.92144 7.55819C8.16544 6.41024 9.29386 5.67744 10.4418 5.92144C11.5898 6.16544 12.3226 7.29387 12.0786 8.44182Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MoneyIcon;
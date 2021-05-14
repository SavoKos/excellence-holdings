import { createFromIconfontCN } from '@ant-design/icons';

const CreatedIcon = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2539603_4djoo3xkjwr.js'],
});

const Icon = ({ type, style, clicked }) => {
  return (
    <CreatedIcon
      type={type}
      onClick={clicked}
      style={{ fontSize: '25px', cursor: 'pointer', ...style }}
    />
  );
};

export default Icon;

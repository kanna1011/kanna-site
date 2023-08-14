import React from 'react';

type ContentsTitleProps = {
  text: string;
};

const ContentsTitle: React.FC<ContentsTitleProps> = ({ text }) => {

  const textStyle: React.CSSProperties = {
    fontSize: '30px',
    background: 'linear-gradient(transparent 60%, #FFC6A7 0%)',
    paddingLeft: '5px',
    paddingRight: '5px',
    color: '#414141'
  };

  return (
    <div style={{ position: 'relative', display: 'block' }}>
      <div>
        <span style={textStyle}>
            {text}
        </span>
      </div>
    </div>
  );
};

export default ContentsTitle;

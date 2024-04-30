import { useState } from 'react';

export const MouseEnterWrapper = ({ mouseEnterCallbak, children }) => {
  const [isActive, setIsActive] = useState(false);

  const mouseEnterHandler = () => {
    setIsActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <MouseEnterWrapper mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </MouseEnterWrapper>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <MouseEnterWrapper mouseEnterCallbak={mouseEnterCallbak}>
      <p>{content}</p>
    </MouseEnterWrapper>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <MouseEnterWrapper mouseEnterCallbak={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </MouseEnterWrapper>
  );
};

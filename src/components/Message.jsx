import  React,  {  useMemo  }  from  "react";
import { useTransition, animated } from '@react-spring/web';

const Message = ({ message }) => {
  const items = useMemo(() =>
    message.split("").map((letter, index) => ({
      letter: letter,
      key: `${index}`
    })),
    [message]
  );

  const transitions = useTransition(items, {
    trail: 35,
    from: { 
      opacity: 0,
      y: 0
    },
    enter: { 
      opacity: 1,
      y: 5
    },
    leave: { 
      opacity: 0,
      y: 0
    }
  });

  return (
    <div className="dialogMessage">
      {transitions((style, item) => (
        <animated.span  style={{
          ...style,
          marginRight: item.letter === " " ? "0.3em" : "0"
        }}>
          {item.letter}
        </animated.span>
      ))}
    </div>
  );
};

export default Message;

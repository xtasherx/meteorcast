import { useState } from 'preact/hooks';

const TemplateComponent = ({ title = 'Template Component' }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="template-component">
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default TemplateComponent;

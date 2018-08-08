import React from 'react';
import LeftPane from './component/contextApi/Leftpane';
import RightPane from './component/contextApi/RightPane';
import Counter from './component/contextApi/Counter';
import { SampleProvider } from './contexts/sample';
import { AnotherProvider } from './contexts/another';
import './index_contextApi.css';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

const App = () => {
  return (
    <AppProvider
      contexts={[SampleProvider, AnotherProvider]}
    >
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
      <Counter />
    </AppProvider>
  );
};

export default App;
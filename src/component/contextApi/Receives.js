import React from 'react';
// import { SampleConsumer } from '../../contexts/sample';
import { useSample } from '../../contexts/sample';

// const Receives = () => {
const Receives = ({ value }) => {
  return (
    /*
    <SampleConsumer>
      {
        (sample) => (
          <div>
            Current Setting Value : {sample.state.value}
          </div>
        )
      }
    </SampleConsumer>
    */
    <div>
      Current Setting Value : {value}
    </div>
  )
}

// export default Receives;
export default useSample(Receives);
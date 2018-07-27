import React from 'react';
import { Map, List } from 'immutable';


//  Obj => Map
const obj = Map({
    foo: 1,
    inner: Map({
        bar: 10
    })
});
console.log(obj.toJS());

//  array => List
const arr = List([
    Map({ foo: 1 }),
    Map({ bar: 2 })
]);
console.log(arr.toJS());

//   set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

//  get
console.log(obj.get('foo'));
console.log(arr.get(0));

nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

nextObj = nextObj.setIn(['inner', 'bar'], 20);
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.getIn([0, 'foo']));

nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());


const Immutable = () => {
    return (
        <div>

        </div>
    );
};

export default Immutable;
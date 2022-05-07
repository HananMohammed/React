import React, {useState} from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <form>
      <input
        type="text"
        placeholder="firstname"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="lastname"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value })}
      />
      <h2>Your first name : {name.firstName}</h2>
      <h2>Your first name : {name.lastName}</h2>
      <h2>{ JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
import React from 'react';
import Nav from './components/Navbar';
import CoolButton from './coolbutton/CoolButton';
import FormField from './formfield/FormField';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <div>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>

    </div>
  )
};

export default App;

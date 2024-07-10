# STEPS

## SETTING REACT AND MATERIAL UI

### In the terminal, create a react app with 

npx create-react-app refer-and-earn

### STEP 2 - Go to directory
cd refer-and-earn

### STEP 3 run the server (Optional)
npm start

### STEP 4 start in vscode 
code .

### STEP 5 Clear some files
Clear App.js and App.css and add this in index.css

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto";
}

### STEP 6 Install mui
#### In the terminal, paste this from:
##### https://mui.com/material-ui/getting-started/installation/

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

### STEP 7 Font Link in public/index.html
On the same page, Google web font heading

## CREATE COMPONENTS

### Component folder

In src folder, create a folder named components

### Component 1

In componenet, create 1st component layout

const Hero = () => {
    return <div>Hello</div>;
};

export default Hero;

### Export to App.js

import './App.css';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { ProjectsProvider, SelectedProjectProvider } from './components/context';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';

const App = ({ darkModeDefault = false}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
  <SelectedProjectProvider >
      <ProjectsProvider>
        <div className="App">
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >  
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider> 
  )
}

export default App;
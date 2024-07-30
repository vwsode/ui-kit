import { GlobalStyles } from './components/GlobalStyles';
import { Lozenge } from './components/Lozenge';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

function App() {
  return (
    <ThemeProvider themeName="standard">
      <GlobalStyles>
        <div>
          <Lozenge appearance="default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic accusamus fuga, nisi dolor officiis iste
            cupiditate et minus obcaecati soluta.
          </Lozenge>
          <Lozenge appearance="inprogress">Label</Lozenge>
          <Lozenge appearance="moved">Label</Lozenge>
          <Lozenge appearance="new">Label</Lozenge>
          <Lozenge appearance="removed">Label</Lozenge>
          <Lozenge appearance="success" maxWidth={20}>
            Label
          </Lozenge>
        </div>
        <div>
          <Lozenge isBold={true} appearance="default">
            Label
          </Lozenge>
          <Lozenge isBold={true} appearance="inprogress">
            Label
          </Lozenge>
          <Lozenge isBold={true} appearance="moved">
            Label
          </Lozenge>
          <Lozenge isBold={true} appearance="new">
            Label
          </Lozenge>
          <Lozenge isBold={true} appearance="removed">
            Label
          </Lozenge>
          <Lozenge isBold={true} appearance="success">
            Label
          </Lozenge>
        </div>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;

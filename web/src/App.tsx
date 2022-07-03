import { IntlProvider } from "react-intl";
import { messages } from "./i18n";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <IntlProvider locale="pt-BR" defaultLocale="en" messages={messages}>
      <Routes />
      {GlobalStyle()}
    </IntlProvider>
  );
}

export default App

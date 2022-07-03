import { IntlProvider } from "react-intl";
import { AuthProvider } from "./contexts/auth";
import { messages } from "./i18n";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  GlobalStyle();

  return (
    <IntlProvider locale="pt-BR" defaultLocale="en" messages={messages}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </IntlProvider>
  );
}

export default App

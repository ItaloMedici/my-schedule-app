import { IntlProvider } from "react-intl";
import { AuthProvider } from "./contexts/auth";
import ToastProvider from "./contexts/toast";
import { messages } from "./i18n";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  GlobalStyle();

  return (
    <IntlProvider locale="pt-BR" defaultLocale="en" messages={messages}>
      <AuthProvider>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </AuthProvider>
    </IntlProvider>
  );
}

export default App

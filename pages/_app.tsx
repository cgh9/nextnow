// Imports
import "@styles/global.scss";

// Types
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';

// Export application
export default appWithTranslation (function LootRNG({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
})

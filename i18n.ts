import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales } from "./src/config"

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    // locale: currentLocale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

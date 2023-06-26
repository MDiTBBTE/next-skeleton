import { useTranslation } from "@services/i18n"

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  )
}

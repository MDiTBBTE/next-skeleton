import { useTranslation } from "@services/i18n/client"
import { languages } from "@services/i18n/settings"
import Link from "next/link"
import { Trans } from "react-i18next"

const LanguageSwitcher = ({ lng }) => {
  const { t } = useTranslation(lng, "footer")

  return (
    <div>
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      <div>
        {languages
          .filter((l) => lng !== l)
          .map((l, index) => {
            return (
              <span key={l}>
                {index > 0 && " or "}
                <Link href={`/${l}`}>{l}</Link>
              </span>
            )
          })}
      </div>
    </div>
  )
}

export default LanguageSwitcher

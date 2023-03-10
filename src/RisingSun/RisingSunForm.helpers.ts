import {
  CTA_TEXT_MAP,
  PRIMARY_SUCCESS_MESSAGE_MAP,
  PRIMARY_TEXT,
  SECONDARY_SUCCESS_MESSAGE_MAP,
  SECONDARY_TEXT_MAP,
  SUCCESSFUL_CTA_TEXT_MAP,
  THEME_MAP,
  AFFILIATE_LINKS_MAP,
} from "./RisingSunForm.constants";
import { IExtractParams } from "./RisingSunForm.interfaces";
import { RisingSunThemeType } from "./RisingSunForm.types";

const getRisingSunTheme = (theme: RisingSunThemeType = "bounty") => {
  return {
    ctaText: CTA_TEXT_MAP[theme],
    successfulCtaText: SUCCESSFUL_CTA_TEXT_MAP[theme],
    primaryText: PRIMARY_TEXT,
    secondaryText: SECONDARY_TEXT_MAP[theme],
    primarySuccessMessage: PRIMARY_SUCCESS_MESSAGE_MAP[theme],
    secondarySuccessMessage: SECONDARY_SUCCESS_MESSAGE_MAP[theme],
    theme: THEME_MAP[theme],
    affiliateLinks: AFFILIATE_LINKS_MAP[theme],
  };
};

const extractParams = ({ queryString }: IExtractParams) =>
  Object.fromEntries(new URLSearchParams(queryString.split("?")[1])) as {
    theme: RisingSunThemeType;
  };

export { getRisingSunTheme, extractParams };

import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";
import "./RisingSunForm.css";
import {
  ISailthruClient,
  IWindowWithSailthru,
} from "./RisingSunForm.interfaces";

import {
  SAILTHRU_CUSTOMER_ID_MAP,
  SAILTHRU_LIST_NAME_MAP,
  AFFILIATE_LINKS_MAP,
  TRUE,
} from "./RisingSunForm.constants";
import { extractParams, getRisingSunTheme } from "./RisingSunForm.helpers";
import { RisingSunThemeType } from "./RisingSunForm.types";

const RisingSun = () => {
  const scriptElementByClass = document.querySelector("#js-rising-sun-script");
  const queryString = scriptElementByClass?.getAttribute("src") as string;

  const { theme: themeParam } = extractParams({ queryString });
  const {
    ctaText,
    primarySuccessMessage,
    primaryText,
    secondarySuccessMessage,
    secondaryText,
    successfulCtaText,
    theme,
  } = getRisingSunTheme(String(themeParam) as RisingSunThemeType);

  const [email, setEmailValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [hasSeenPopup, setHasSeenPopup] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState<boolean>(false);
  const [sailthruClient, setSailthruClient] =
    useState<ISailthruClient["Sailthru"]>();

  const handleUpdateEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmailValue(value);
  };

  const handleSubmitRisingSun = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!sailthruClient) {
      return;
    }

    sailthruClient.init({
      customerId: String(SAILTHRU_CUSTOMER_ID_MAP[themeParam]),
    });
    sailthruClient.integration("userSignUp", {
      email,
      lists: {
        [SAILTHRU_LIST_NAME_MAP[themeParam]]: true,
      },
      onSuccess: () => {
        setIsSignUpSuccessful(true);
      },
      onError: () => {
        setError("Looks like that is not a valid email please try again");
      },
    });
  };

  const handleCloseRisingSun = () => {
    localStorage.setItem(`hasSeen${theme}Popup`, TRUE);

    setIsOpen(!isOpen);

    const header = document.querySelector(".header") as HTMLElement;
    const advert = document.querySelector(".ad") as HTMLElement;

    if (advert) {
      advert.style.zIndex = "unset";
    }

    if (header) {
      header.style.zIndex = "unset";
    }
  };

  const handleOnCloseRisingSunSuccess = () => {
    handleCloseRisingSun();
    window.location.href = AFFILIATE_LINKS_MAP[themeParam];
  };

  useEffect(() => {
    const { Sailthru }: ISailthruClient = window as IWindowWithSailthru;
    const isHasSeenPopupInLocalStorage = localStorage.getItem(
      `hasSeen${theme}Popup`
    );

    setSailthruClient(Sailthru);

    if (isHasSeenPopupInLocalStorage === TRUE) {
      setHasSeenPopup(true);

      return;
    }

    setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    const header = document.querySelector(".header") as HTMLElement;
    const advert = document.querySelector(".ad") as HTMLElement;

    if (header) {
      header.style.zIndex = "0";
    }

    if (advert) {
      advert.style.zIndex = "0";
    }
  }, []);

  const visuallyHiddenCloseIconText = "Close the popup";

  return hasSeenPopup ? null : isOpen ? (
    <>
      <form
        onSubmit={handleSubmitRisingSun}
        className={`c-${theme}-rising-sun-form`}
        method="post"
        role="dialog"
      >
        <button
          className={`c-${theme}-close-button`}
          type="button"
          onClick={handleCloseRisingSun}
        >
          <div className={`c-${theme}-close-icon`} />
          <span className="h-hide-visually">{visuallyHiddenCloseIconText}</span>
        </button>

        <div className={`c-${theme}-rising-sun-form__wrapper`}>
          <h1 className={`c-${theme}-rising-sun-form__heading`}>
            {isSignUpSuccessful ? primarySuccessMessage : primaryText}
          </h1>
          <p className={`c-${theme}-rising-sun-form__sub-heading`}>
            {isSignUpSuccessful ? secondarySuccessMessage : secondaryText}
          </p>

          {isSignUpSuccessful ? (
            <button
              className={`c-${theme}-successful-rising-sun__submit`}
              type="button"
              onClick={handleOnCloseRisingSunSuccess}
            >
              {successfulCtaText}
            </button>
          ) : (
            <>
              <label
                className={`c-${theme}-rising-sun-form__label h-hide-visually`}
                htmlFor="email"
              >
                Email:
              </label>
              {error ? <div style={{ color: "#e42732" }}>{error}</div> : null}
              <input
                className={`c-${theme}-rising-sun-form__input`}
                id="email"
                name="email"
                placeholder="Enter email address"
                type="email"
                onChange={handleUpdateEmailValue}
              />
              <button
                className={`c-${theme}-rising-sun-form__submit`}
                type="submit"
              >
                {ctaText}
              </button>
              <p className={`c-${theme}-rising-sun-form__copy`}>
                By signing up, you agree to receive marketing communications in
                accordance with our{" "}
                <a
                  className={`c-${theme}-rising-sun-form__tandc`}
                  href="https://www.aremedia.com.au/privacy/"
                >
                  Privacy Policy
                </a>
                . You may unsubscribe at any time.
              </p>
            </>
          )}
        </div>
      </form>
      <button
        className={`c-${theme}-successful-rising-sun__overlay`}
        type="button"
        onClick={handleOnCloseRisingSunSuccess}
      />
    </>
  ) : null;
};

export default RisingSun;

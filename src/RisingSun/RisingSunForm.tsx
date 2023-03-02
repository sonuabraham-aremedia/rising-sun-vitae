import React, { useState, useEffect, SyntheticEvent } from "react";
import "./RisingSunForm.css";
import {
  ISailthruClient,
  IWindowWithSailthru,
} from "./RisingSunForm.interfaces";

import {
  DEFAULT_RISING_SUN_CTA_TEXT,
  DEFAULT_RISING_SUN_PRIMARY_TEXT,
  DEFAULT_RISING_SUN_SECONDARY_TEXT,
  DEFAULT_RISING_SUN_SIGN_UP_PRIMARY_SUCCESS_MESSAGE,
  DEFAULT_RISING_SUN_SIGN_UP_SECONDARY_SUCCESS_MESSAGE,
  DEFAULT_RISING_SUN_TERMS,
  DEFAULT_SUCCESSFUL_CTA_TEXT,
  SAILTHRU_CUSTOMER_ID,
  SAILTHRU_LIST_NAME,
  TRUE,
} from "./RisingSunForm.constants";

const RisingSun = () => {
  const scriptElementByClass = document.querySelector("#js-rising-sun-script");

  const srcByClass = scriptElementByClass?.getAttribute("src") as string;

  function saveQueryParams(url: string): Record<string, string> {
    const queryParams: Record<string, string> = {};
    const queryString = url.split("?")[1];

    if (queryString) {
      const pairs = queryString.split("&");
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split("=");
        queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(
          pair[1] || ""
        );
      }
    }

    return queryParams;
  }

  const savedQueryParams = saveQueryParams(srcByClass);

  const ctaText = savedQueryParams["ctaText"] ?? DEFAULT_RISING_SUN_CTA_TEXT;
  const successfulCtaText =
    savedQueryParams["successfulCtaText"] ?? DEFAULT_SUCCESSFUL_CTA_TEXT;
  const primaryText =
    savedQueryParams["primaryText"] ?? DEFAULT_RISING_SUN_PRIMARY_TEXT;
  const secondaryText =
    savedQueryParams["secondaryText"] ?? DEFAULT_RISING_SUN_SECONDARY_TEXT;
  const primarySuccessMessage =
    savedQueryParams["primarySuccessMessage"] ??
    DEFAULT_RISING_SUN_SIGN_UP_PRIMARY_SUCCESS_MESSAGE;
  const secondarySuccessMessage =
    savedQueryParams["secondarySuccessMessage"] ??
    DEFAULT_RISING_SUN_SIGN_UP_SECONDARY_SUCCESS_MESSAGE;
  const termsAndConditions =
    savedQueryParams["termsAndConditions"] ?? DEFAULT_RISING_SUN_TERMS;
  const theme = savedQueryParams["theme"] ?? "bounty";

  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sailthruClient, setSailthruClient] =
    useState<ISailthruClient["Sailthru"]>();
  const [error, setError] = useState<string>("");
  const [hasSeenPopup, setHasSeenPopup] = useState(false);
  const [email, setEmailValue] = useState("");

  const handleSubmitRisingSun = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!sailthruClient) {
      return;
    }

    sailthruClient.init({ customerId: SAILTHRU_CUSTOMER_ID });
    sailthruClient.integration("userSignUp", {
      email,
      lists: {
        [SAILTHRU_LIST_NAME]: true,
      },
      onSuccess: () => {
        setIsSignUpSuccessful(true);
        setError("");
      },
      onError: () => {
        setError("Looks like that is not a valid email please try again");
      },
    });
  };

  const handleUpdateEmailValue = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;

    setEmailValue(value);
  };

  const handleCloseRisingSun = () => {
    setIsOpen(!isOpen);
    localStorage.setItem("hasSeenPopup", TRUE);
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
    setIsSignUpSuccessful(false);

    handleCloseRisingSun();
  };

  useEffect(() => {
    const { Sailthru }: ISailthruClient = window as IWindowWithSailthru;
    const isHasSeenPopupInLocalStorage = localStorage.getItem("hasSeenPopup");

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
        target="dummy-iframe"
      >
        <button
          className={`c-${theme}-close-button`}
          type="button"
          onClick={handleCloseRisingSun}
        >
          <span className="h-hide-visually">{visuallyHiddenCloseIconText}</span>
          <div className={`c-${theme}-close-icon`} />
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
              {error ? <div style={{ color: "red" }}>{error}</div> : null}
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
                {termsAndConditions}
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

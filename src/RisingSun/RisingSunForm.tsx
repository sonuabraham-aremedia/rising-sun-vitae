import React, { useState, useEffect, SyntheticEvent } from "react";
import "./risingSunForm.css";
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
  // interface IExtractParams {
  //   queryString: string;
  // }
  // const extractParams = ({ queryString }: IExtractParams) => Object.fromEntries(new URLSearchParams(queryString.split('?')[1]));
  // const { param1, param2, param3 } = extractParams({ queryString });
  // const {
  //   ctaText = DEFAULT_RISING_SUN_CTA_TEXT,
  //   successfulCtaText = DEFAULT_SUCCESSFUL_CTA_TEXT,
  //   primaryText = DEFAULT_RISING_SUN_PRIMARY_TEXT,
  //   secondaryText = DEFAULT_RISING_SUN_SECONDARY_TEXT,
  //   primarySuccessMessage = DEFAULT_RISING_SUN_SIGN_UP_PRIMARY_SUCCESS_MESSAGE,
  //   secondarySuccessMessage = DEFAULT_RISING_SUN_SIGN_UP_SECONDARY_SUCCESS_MESSAGE,
  //   termsAndConditions = DEFAULT_RISING_SUN_TERMS,
  //   theme = "bounty",
  // }: RisingSunFormURLParams = useParams();

  // const queryParams = new URLSearchParams(window.location.search);

  // const scriptElement = document.querySelector(
  //   'script[src="https://dokyjxpxv2g53.cloudfront.net/assets/index-3c4ae23f.js"]'
  // );

  const scriptElementByClass = document.querySelector("#js-rising-sun-script");
  // comment this out and HARD CODE IT IN FOR NOW FOR LOCAL USE ONLY
  // const src = scriptElement?.getAttribute("src");

  // This is for local use only hard code
  // const src =
  //   "https://dokyjxpxv2g53.cloudfront.net/assets/index-b6350917.js?theme=who";

  const srcByClass = scriptElementByClass?.getAttribute("src") as string;
  // const queryParams = new URLSearchParams(src.split("?")[1]);
  // const bareBonesWithByClass = new URLSearchParams(src?.split("?")[1]);
  // const bareBoness = src.split("?");

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

  // Example usage
  const savedQueryParams = saveQueryParams(srcByClass);

  console.log(savedQueryParams, "RESULT"); // Output: { "theme": "who" }
  console.log("AND THE THEME IS ", savedQueryParams["theme"]);

  // console.log({ bareBonesWithByClass });
  // console.log({ srcByClass });
  // console.log({ src });
  // console.log({ bareBoness });
  // console.log({ scriptElementByClass });
  // console.log({ scriptElement });
  // console.log({ queryParams });

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

const PRIMARY_TEXT_MAP = Object.freeze({
  aww: "aww",
  aww_food: "Want 15% off at Adore Beauty?",
  beauty_crew: "Want 15% off at Adore Beauty?",
  beauty_heaven: "Want 15% off at Adore Beauty?",
  better_homes: "Want 20% off at The Iconic?",
  bounty: "Want 10% off your first order?",
  elle: "Want 15% off at Adore Beauty?",
  gourmet_traveller: "Want 20% off at The Iconic?",
  home_beautiful: "Want 20% off at The Iconic?",
  homes_to_love: "Want 20% off at The Iconic?",
  marie_claire: "Want 15% off at Adore Beauty?",
  new_idea: "Want 20% off at The Iconic?",
  now_to_love: "Want 20% off at The Iconic?",
  who: "Want 15% off at Adore Beauty?",
});

const SECONDARY_TEXT_MAP = Object.freeze({
  aww: "aww",
  aww_food:
    "Subscribe for the best of Women's Weekly Food, delivered straight to your inbox.",
  beauty_crew:
    "Subscribe for the best of Beauty Crew delivered straight to your inbox.",
  beauty_heaven:
    "Subscribe for the best of Beauty Heaven (plus product sampling opportunities).",
  better_homes:
    "Subscribe for the best of Better Homes and Gardens delivered straight to your inbox.",
  bounty:
    "Sign up to receive the latest discounts, as well as parenting and lifestyle tips.",
  elle: "Subscribe for the best of Elle Australia, delivered straight to your inbox.",
  gourmet_traveller:
    "Subscribe for the best of Gourmet Traveller, delivered straight to your inbox.",
  home_beautiful:
    "Subscribe for the best of Home Beautiful delivered straight to your inbox.",
  homes_to_love:
    "Subscribe for the best of Homes To Love delivered straight to your inbox.",
  marie_claire:
    "Subscribe for the best of Marie Claire Australia, delivered straight to your inbox.",
  new_idea:
    "Subscribe for the best of New Idea, delivered straight to your inbox.",
  now_to_love:
    "Subscribe for the best of Now To Love, delivered straight to your inbox.",
  who: "Subscribe for the best of Who Mag, delivered straight to your inbox.",
});

const SUCCESSFUL_CTA_TEXT_MAP = Object.freeze({
  aww: "aww",
  aww_food: "Shop now",
  beauty_crew: "Shop now",
  beauty_heaven: "Shop now",
  better_homes: "Shop now",
  bounty: "Shop now",
  elle: "Shop now",
  gourmet_traveller: "Shop now",
  home_beautiful: "Shop now",
  homes_to_love: "Shop now",
  marie_claire: "Shop now",
  new_idea: "Shop now",
  now_to_love: "Shop now",
  who: "Shop now",
});

const PRIMARY_SUCCESS_MESSAGE_MAP = Object.freeze({
  aww: "aww",
  aww_food:
    "You've successfully subscribed to the Women's Weekly Food newsletter!",
  beauty_crew: "You've successfully subscribed to the Beauty Crew newsletter!",
  beauty_heaven:
    "You've successfully subscribed to the Beauty Heaven newsletter!",
  better_homes: "Welcome! We're so excited to have you.",
  bounty: "Welcome, we're so excited to have you!",
  elle: "You've successfully subscribed to the Elle newsletter!",
  gourmet_traveller:
    "You've successfully subscribed to the Gourmet Traveller newsletter!",
  home_beautiful: "Welcome! We're so excited to have you.",
  homes_to_love: "Welcome! We're so excited to have you.",
  marie_claire:
    "You've successfully subscribed to the Marie Claire newsletter!",
  new_idea: "You've successfully subscribed to the New Idea newsletter!",
  now_to_love: "You've successfully subscribed to the Now To Love newsletter!",
  who: "You've successfully subscribed to the Who newsletter!",
});

const SECONDARY_SUCCESS_MESSAGE_MAP = Object.freeze({
  aww: "aww",
  aww_food:
    "Get 20% off The Iconic using the discount code send to your email.",
  beauty_crew:
    "Get 15% off Adore Beauty using the discount code send to your email.",
  beauty_heaven:
    "Get 15% off Adore Beauty using the discount code send to your email.",
  better_homes:
    "Get 20% off The Iconic using the discount code send to your email.",
  bounty:
    "Get 10% off your first order by using the discount code sent to your email at checkout.",
  elle: "Get 15% off Adore Beauty using the discount code send to your email.",
  gourmet_traveller:
    "Get 20% off The Iconic using the discount code send to your email.",
  home_beautiful:
    "Get 20% off The Iconic using the discount code send to your email.",
  homes_to_love:
    "Get 20% off The Iconic using the discount code send to your email.",
  marie_claire:
    "Get 15% off Adore Beauty using the discount code send to your email.",
  new_idea:
    "Get 20% off The Iconic using the discount code send to your email.",
  now_to_love:
    "Get 20% off The Iconic using the discount code send to your email.",
  who: "Get 15% off Adore Beauty using the discount code send to your email.",
});

const CTA_TEXT_MAP = Object.freeze({
  aww: "aww",
  aww_food: "Sign up and get 20% off",
  beauty_crew: "Sign up and get 15% off",
  beauty_heaven: "Sign up and get 15% off",
  better_homes: "Sign up and get 20% off",
  bounty: "Get 10% off Now",
  elle: "Sign up and get 15% off",
  gourmet_traveller: "Sign up and get 20% off",
  home_beautiful: "Sign up and get 20% off",
  homes_to_love: "Sign up and get 20% off",
  marie_claire: "Sign up and get 15% off",
  new_idea: "Sign up and get 20% off",
  now_to_love: "Sign up and get 20% off",
  who: "Sign up and get 15% off",
});

const THEME_MAP = Object.freeze({
  aww: "aww",
  aww_food: "awwfood",
  beauty_crew: "beautycrew",
  beauty_heaven: "beautyheaven",
  better_homes: "betterhomesandgardens",
  bounty: "bounty",
  elle: "elle",
  gourmet_traveller: "gourmettraveller",
  home_beautiful: "homebeautiful",
  homes_to_love: "homestolove",
  marie_claire: "marieclaire",
  new_idea: "newidea",
  now_to_love: "nowtolove",
  who: "who",
});

const SAILTHRU_CUSTOMER_ID_MAP = Object.freeze({
  aww: "aww",
  aww_food: "847e7314e4e23782726bfba5a3df5173",
  beauty_crew: "946e250ce6ac0607a04919a3dbf4c1fe",
  beauty_heaven: "8c4ced2361660d9daa66342a500d03b8",
  better_homes: "a4f6255ebb25f4675d5d7a6fa24c08aa",
  bounty: "4220513e3177b12871e218889d56eafb",
  elle: "a85d0169102c8845c405b7b26f012766",
  gourmet_traveller: "7a5fac90dd0d64d8df85d3491315bcd6",
  home_beautiful: "4b8787cb5c11196b80417bf8c1ced39a",
  homes_to_love: "8a9982a9d3a428927b52dfa27e6d76d5",
  marie_claire: "ba9b8dfedfb987e9486b2fbb8c220255",
  new_idea: "81d34a3dbfdc66f8b1a2aa6600d0a08f",
  now_to_love: "edf14b161b84e87366a9f8055aec5a46",
  who: "e0a6c91492a46f4a3a7ef3143efd28c3",
});

const SAILTHRU_LIST_NAME_MAP = Object.freeze({
  aww: "rs-aww-welcome",
  aww_food: "rs-aww-food-welcome",
  beauty_crew: "rs-beauty-crew-welcome",
  beauty_heaven: "rs-beauty-heaven-welcome",
  better_homes: "rs-better-homes-welcome",
  bounty: "rs-bounty-welcome",
  elle: "rs-elle-welcome",
  gourmet_traveller: "rs-gourmet-traveller-welcome",
  home_beautiful: "rs-home-beautiful-welcome",
  homes_to_love: "rs-homes-to-love-welcome",
  marie_claire: "rs-marie-claire-welcome",
  new_idea: "rs-new-idea-welcome",
  now_to_love: "rs-now-to-love-welcome",
  who: "rs-who-welcome",
});

const TRUE = "TRUE";

export {
  TRUE,
  CTA_TEXT_MAP,
  SUCCESSFUL_CTA_TEXT_MAP,
  PRIMARY_TEXT_MAP,
  SECONDARY_TEXT_MAP,
  PRIMARY_SUCCESS_MESSAGE_MAP,
  SECONDARY_SUCCESS_MESSAGE_MAP,
  THEME_MAP,
  SAILTHRU_CUSTOMER_ID_MAP,
  SAILTHRU_LIST_NAME_MAP,
};

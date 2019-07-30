// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

defaultTokens.fontSizeHeadingDisplay =
  'calc(55px + (154 - 55) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.lineHeightHeading = '1.02';

defaultTokens.fontSizeHeadingTitle1 =
  'calc(30px + (90 - 30) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle1 = '600';

defaultTokens.fontSizeHeadingTitle2 =
  'calc(22px + (58 - 22) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle2 = '600';

defaultTokens.fontSizeHeadingTitle3 =
  'calc(19px + (40 - 19) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle3 = '600';

defaultTokens.fontSizeHeadingTitle4 =
  'calc(16px + (28 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle4 = '600';

defaultTokens.fontSizeHeadingTitle5 =
  'calc(14px + (24 - 14) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontWeightHeadingTitle5 = '600';

defaultTokens.fontSizeTextSmall =
  'calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextNormal =
  'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.fontSizeTextLarge =
  'calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)))';

// Button normal
defaultTokens.fontSizeButtonNormal =
  'calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.borderRadiusNormal = `6px`;

defaultTokens.paddingButtonNormal =
  'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320))) calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))';
defaultTokens.heightButtonNormal = `auto`;

// Font family
defaultTokens.fontFamily = `"Circular Pro", -apple-system, ".SFNSText-Regular", "San Francisco", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`;

// Button with only icon small
defaultTokens.widthIconMedium = `calc(24px + (32 - 24) * ((100vw - 320px) / (1920 - 320)))`;
defaultTokens.paddingButtonWithoutText =
  'calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)))';

const landing = {
  bodyPadding: 'calc(1rem + 7.02vw)',
};

export default {
  orbit: defaultTokens,
  rtl: false,
  landing: landing,
};

import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';

const space = {
  none: 0,
  small: '5px',
  medium: '10px',
  large: '20px',
  xlarge: '30px',
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop'],
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['end', 'center', 'space-between', 'space-areound'],
    alignItems: ['center'],
    alignSelf: ['flex-start'],
    position: ['static', 'fixed'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: ['5px', '10px', '15px', '60px'],
    width: ['144px', '280px', '480px', '520px', '5%', '35%', '60%', '100%'],
    height: ['144px', '260px', '280px', '480px', '520px', 'auto'],
    bottom: ['auto', 0],
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

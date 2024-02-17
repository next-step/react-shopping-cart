import '@testing-library/jest-dom';
import 'jest-styled-components';
import { jestPreviewConfigure } from 'jest-preview';
// TODO: To add your global css here

jestPreviewConfigure({
  // Opt-in to automatic mode to preview failed test case automatically.
  autoPreview: true,
});

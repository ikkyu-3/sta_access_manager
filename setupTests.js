/* eslint-disable import/no-extraneous-dependencies */
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
/* eslint-enable import/no-extraneous-dependencies */

enzyme.configure({ adapter: new Adapter() });

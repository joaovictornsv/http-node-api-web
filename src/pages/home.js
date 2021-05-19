import mainDiv from '../components/divs/mainDiv.js';
import groupButtons from '../components/divs/groupButtons.js'
import headerMain from '../components/divs/headerMain.js'

import resetCSS from '../utils/reset.js'

resetCSS();

function HomePage() {
  mainDiv.initOnRoot();
  mainDiv.append(headerMain);
  mainDiv.append(groupButtons);
}

export default HomePage();

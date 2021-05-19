import mainDiv from '../components/divs/mainDiv.js';
import groupButtons from '../components/divs/groupButtons.js'
import headerHome from '../components/divs/headerHome.js'

import resetCSS from '../utils/reset.js'

resetCSS();

function HomePage() {
  mainDiv.initOnRoot();
  mainDiv.append(headerHome);
  mainDiv.append(groupButtons);
}

export default HomePage();

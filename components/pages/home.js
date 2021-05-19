import mainDiv from '../divs/mainDiv.js';
import groupButtons from '../divs/groupButtons.js'
import headerMain from '../divs/headerMain.js'

function HomePage() {
  mainDiv.initOnRoot();
  mainDiv.append(headerMain.component);
  mainDiv.append(groupButtons.component);
}

export default HomePage;

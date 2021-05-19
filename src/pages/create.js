import mainDiv from '../components/divs/mainDiv.js';
import resetCSS from '../utils/reset.js'
import createForm from '../components/forms/createForm.js'

resetCSS();

function CreatePage() {
  mainDiv.initOnRoot();
  mainDiv.append(createForm);
}

export default CreatePage();

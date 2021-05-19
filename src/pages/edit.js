import mainDiv from '../components/divs/mainDiv.js';
import resetCSS from '../utils/reset.js'
import editForm from '../components/forms/editForm.js'
import headerEdit from '../components/divs/headerEdit.js'

resetCSS();

function EditPage() {
  mainDiv.initOnRoot();
  mainDiv.append(headerEdit);
  mainDiv.append(editForm);
}

export default EditPage();

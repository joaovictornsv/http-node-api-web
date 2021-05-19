function makeInput(config={}) {
  let initialPlaceholder = config.placeholder || 'Type here';
  let initialValue = config.value || null;
  let initialId = config.id || 'input_id';
  let initialType = config.type || 'text';

  const component = document.createElement('input');
  component.required = true;
  initialValue && component.setValue(initialValue);
  component.setType(initialType)
  component.setID(initialId);
  component.setPlaceholder(initialPlaceholder);
  component.setMinMax(0, 200);

  return component
}

export default makeInput;
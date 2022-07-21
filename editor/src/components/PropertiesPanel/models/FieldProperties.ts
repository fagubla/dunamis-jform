import Props from './Properties';

const FieldProperties: any = {
  get(id: string) {
    return this[id] ? this[id] : this['TextField'];
  },
  TextField: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('placeholder'),
    Props.build('defaultValue'),
    Props.build('hint'),
    Props.build('label'),
    Props.build('description'),
    Props.build('validation'),
    Props.build('validationMessage'),
    Props.build('mask'),
    Props.build('maxLength'),
    Props.build('textTransform'),
    Props.build('required'),
    Props.build('readOnly'),
    Props.build('multi'),
    Props.build('trim'),
    Props.build('restrictMaxLength'),
  ],
  TextArea: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('placeholder'),
    Props.build('defaultValue'),
    Props.build('hint'),
    Props.build('rows'),
    Props.build('label'),
    Props.build('description'),
    Props.build('validation'),
    Props.build('validationMessage'),
    Props.build('mask'),
    Props.build('maxLength'),
    Props.build('textTransform'),
    Props.build('required'),
    Props.build('readOnly'),
    Props.build('multi'),
    Props.build('trim'),
    Props.build('restrictMaxLength'),
  ],
  DateTime: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('placeholder'),
    Props.build('required'),
  ],
  Dropdown: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('items'),
    Props.build('placeholder'),
    Props.build('required'),
  ],
  Checkbox: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('label'),
    Props.build('description'),
    Props.build('validation'),
    Props.build('validationMessage'),
    Props.build('mask'),
    Props.build('maxLength'),
    Props.build('textTransform'),
    Props.build('required'),
    Props.build('readOnly'),
    Props.build('multi'),
    Props.build('trim'),
    Props.build('restrictMaxLength'),
  ],
  CheckboxGroup: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('items'),
    Props.build('required'),
  ],
  DatePicker: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('placeholder'),
    Props.build('hint'),
    Props.build('required'),
  ],
  Grid: [Props.build('type'), Props.build('variable')],
  Image: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('alt'),
  ],
  MultipleFile: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('required'),
  ],
  RadioGroup: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('items'),
    Props.build('required'),
  ],
  Rating: [Props.build('type'), Props.build('variable')],
  RichText: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('placeholder'),
  ],
  Submit: [Props.build('type'), Props.build('variable')],
  Suggest: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('hint'),
    Props.build('placeholder'),
  ],
  Time: [
    Props.build('type'),
    Props.build('variable'),
    Props.build('placeholder'),
  ],
};

export default FieldProperties;

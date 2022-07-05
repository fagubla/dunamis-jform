import { ref } from '@vue/composition-api';

export const dynamicPropertyDefault = (props: any, context: any) => {
  const data = ref(props.config);
  const input = (v: string) => {
    context.emit('input', v);
  };
  const change = (value: string) => {
    context.emit('change', value);
  };
  return { data, input, change };
};
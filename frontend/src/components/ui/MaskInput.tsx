import { ReactElement } from 'react';
import ReactInputMask, { Props as ReactInputMaskProps } from 'react-input-mask';

type MaskInputProps = Omit<ReactInputMaskProps, 'children' | 'maskChar'>;

export const MaskInput = ({
  value,
  onChange,
  ...rest
}: MaskInputProps): ReactElement => {
  return (
    <ReactInputMask {...rest} maskChar="" value={value} onChange={onChange}>
      {inputProps => <input {...inputProps} />}
    </ReactInputMask>
  );
};

import { common_types } from 'react-commons-ts';

//
export function refGetBoundingClientRect(
    ref_elm: common_types.RefElmType<HTMLElement>
) {
    return (
        ref_elm.current
            ? ref_elm.current
            : document.getElementsByTagName('div')[0]
    ).getBoundingClientRect();
}

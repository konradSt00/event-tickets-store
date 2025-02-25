import {PropsWithChildren} from "react";

export const ContentWrapper = (props: PropsWithChildren) => {
    return <div className={'content-wrapper'}>
        {props.children}
    </div>
}
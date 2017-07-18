import React from "react";

interface IBundleProps {
    caption: string;
}

interface IBundleState {}

export class Bundle extends React.Component<IBundleProps,IBundleState> {
    public render(): JSX.Element | null | false {
        return (<div>bundle</div>);
    }
}

export default Bundle;
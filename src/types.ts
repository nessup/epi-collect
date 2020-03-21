import {StaticContext} from "react-router";
import {RouteComponentProps} from "react-router-dom";

export type Activity = {
    timestamp: number,
    activity: string,
    confidence: number
}

export type Location = {
    timestamp: number,
    longitude: number,
    latitude: number,
    accuracy: number,
    activities: Activity[]
}

export type WizardState = {
    locations: Location[]
}

export type WizardRouteComponentProps = RouteComponentProps<{}, StaticContext, WizardState>
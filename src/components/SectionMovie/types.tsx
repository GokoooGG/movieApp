import { ReactNode } from "react";
import { StyleProp,ViewStyle} from "react-native";

export interface Props {
    children : ReactNode;
    style?: StyleProp<ViewStyle>;
    selectionList:Array<string>;
    selected:string;
    keyWord:string;
}
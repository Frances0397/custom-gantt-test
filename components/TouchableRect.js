import { Pressable } from "react-native";
import Svg, { Rect } from "react-native-svg";

export default function TouchableRect({ }) {
    const numberOfDays1 = 3;
    const numberOfDays2 = 4;

    const width1 = numberOfDays1 * 50;
    const width2 = numberOfDays2 * 50;

    const onPress = () => {
        console.log("pressed");
        alert("Ciao, sono un task");
    };

    return (
        <Pressable onPress={onPress}>
            <Svg>
                <Rect x="50" y="52" width={width1} height="50" fill="blue" rx="10" ry="10" />
            </Svg>
        </Pressable>
    );
}
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import Svg, { Line, Rect } from 'react-native-svg';

import TouchableRect from './TouchableRect';

export default function SimpleGantt({ }) {
    const numberOfLines = 6;

    const numberOfDays1 = 3;
    const numberOfDays2 = 4;

    const width1 = numberOfDays1 * 50;
    const width2 = numberOfDays2 * 50;

    const lines = Array.from({ length: numberOfLines }).map((_, index) => ({
        x1: 50 * index, // adjust as needed
        y1: 0,
        x2: 50 * index,
        y2: 200, // adjust as needed
    }));

    const onPress = () => {
        console.log("pressed");
        alert("Ciao, sono un task");
    };

    const onSuca = () => {
        console.log("rettangolo");
        alert("suca");
    }

    return (
        <View>
            <Svg height="100%" width="100%" style={styles.backgroundSvg}>
                {/* Render lines */}
                {lines.map((line, index) => (
                    <Line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke="black"
                        strokeWidth="2"
                        style={{ zIndex: 1 }}
                    />
                ))}
                <Rect x="50" y="0" width="50" height="200" fill="blue" opacity="0.5" />
            </Svg>

            {/* Render rectangle */}
            <TouchableRect />
            {/* <Pressable onPress={onPress} style={styles.pressableContainer}>
                <Svg>
                    <Rect x="50" y="52" width={width1} height="50" fill="blue" rx="10" ry="10" style={{ zIndex: 10 }} />
                </Svg>
            </Pressable>
            <Pressable onPress={onSuca} style={styles.pressableContainer}>
                <Svg>
                    <Rect x="0" y="0" width={width2} height="50" fill="blue" rx="10" ry="10" style={{ zIndex: 15 }} />
                </Svg>
            </Pressable> */}
            {/* <Rect x="50" y="52" width={width1} height="50" fill="blue" rx="10" ry="10" onPress={onPress} />
                <Rect x="0" y="0" width={width1} height="50" fill="blue" rx="10" ry="10" onPress={onSuca()} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundSvg: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: 5
    }
});
import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

export function SkillCard() {
    return (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>
              {skill}
            </Text>
        </TouchableOpacity>
    )
}
import React, {Component} from 'react';
import {observer} from 'mobx-react/native';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import TimerModel from '../stores/TimerModel';

/**
 * @author winterbe
 */
@observer
export default class Timer extends Component {
    static propTypes = {
        model: React.PropTypes.instanceOf(TimerModel),
    };

    render() {
        const {model} = this.props;
        return (
            <View style={styles.view}>
                <Text style={styles.label}>
                    {model.label}
                </Text>
                <Button title={model.running ? 'Stop' : 'Start'}
                        color={model.running ? '#d9534f' : '#337ab7'}
                        onPress={() => model.toggle()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        fontFamily: 'Courier New',
        fontSize: 26,
        width: 160,
        color: '#222'
    }
});
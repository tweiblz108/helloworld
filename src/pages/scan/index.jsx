import Taro, { Component } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'
import './styles.scss'

export default class Scan extends Component {
  render () {
    return <View className="page">
      <Text>this page used for scan code</Text>
    </View>
  }
}
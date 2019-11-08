import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './styles.scss'

export default ({children, height}) => <View style={{width: '100%', height: `${height}px`}} className='footer-area'>
  <View style={{height: `${height}px`, width: '100%', position: 'fixed'}} className='footer-area'>
    {children}
  </View>
</View>

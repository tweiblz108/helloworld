import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import './styles.scss'

export default ({children, renderFooter}) => <View className='page'>
  <View className='content'>
    <View className='content-inner'>
      <ScrollView scrollY style={{height: '100%'}}>{children}</ScrollView>
    </View>
  </View>
  {renderFooter}
</View>

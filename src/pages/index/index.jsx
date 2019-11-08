import Taro, { Component } from '@tarojs/taro'
import { ScrollView, Text, View } from '@tarojs/components'
import { AtCard, AtTabBar } from 'taro-ui'
import * as R from 'ramda'
import './index.scss'
import Footer from '../../components/Footer'
import Page from '../../components/Page'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '券宝',
  }

  state = {
    current: 0,
  }

  handleClick (value) {
    this.setState({
      current: value,
    })
  }

  exampleFooter () {
    return <View style={{height: '100px'}}>
      <View id='xxdfexdf' style={{height: '100%', position: 'fixed'}}><Text>=============</Text></View>
    </View>
  }

  render () {
    const {current} = this.state

    return (
      <Page
        renderFooter={<Footer height={65}>
          <AtTabBar
            tabList={[
              {title: '验券', iconType: 'camera', text: 'new'},
              {title: '发券', iconType: 'share'},
              {title: '我的', iconType: 'user', text: '100', max: '99'},
            ]}
            onClick={value => this.handleClick(value)}
            current={current}
          />
        </Footer>}
      >
        {
          {
            0: <Text>待办事项</Text>,
            1: <Text>拍照</Text>,
            2: <Text>文件夹</Text>
          }[current]
        }
      </Page>
    )
  }
}

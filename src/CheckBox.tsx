import * as React from 'react'
import { View, Text } from 'node-webrender/lib/react'

const CheckBox = ({ text, value }) =>
  <View style={[styles.box, value && styles.boxChecked]}>
  {value && <Text style={styles.checkedCross}>×</Text>}
  </View>

const styles = {
  box: {
    width: 24,
    height: 25,
    marginTop: 1,
    marginRight: 12,
    paddingLeft: 6.5,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#888888'
  },
  
  boxChecked: {
    borderColor: '#ccccff'
  },

  checkedCross: {
    fontSize: 20,
    color: '#eeeeff'
  },
}

export default CheckBox

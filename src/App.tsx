import { execSync } from 'child_process'
import * as React from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Switch } from 'node-webrender/lib/react'
import CheckBox from './CheckBox'

const App = () => {
  const leaves = getLeaves()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40, lineHeight: 60 }}>Brew Cleaner 2000</Text>
        <Text>
          Clean your brew leaves like a boss.
        </Text>

        <View style={{ width: '70%', marginTop: 20 }}>
          <Button title="Click to brew rm selected" style={{ width: 100 }} />
        </View>
      </View>

      <ScrollView>
        {leaves.map((l, i) =>
          <CheckItem key={l} text={l} checked={i > 2} />
        )}
      </ScrollView>
    </View>
  )
}

const CheckItem = ({ text, checked = true }) =>
  <View style={[styles.checkItem, checked && styles.checkItemChecked]}>
    <CheckBox value={checked} text={text} />
    <Text style={[checked && styles.checkItemCheckedText]}>{text}</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    padding: 40,
    borderBottomWidth: 2,
    borderColor: '#cccccc'
  },

  checkItem: {
    padding: 16,
    paddingLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },

  checkItemChecked: {
    backgroundColor: '#0000ff'
  },

  checkItemCheckedText: {
    color: '#ffffff'
  }
})

const getLeaves = () =>
  (execSync('brew leaves', { encoding: 'utf-8' }) as any).trim().split('\n')

export default App

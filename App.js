import { StatusBar } from 'expo-status-bar'

import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import FieldWrapper from './FieldWrapper.component'
import Modal from './Modal.component'
import { ModalPresenterParent } from '@whitespectre/rn-modal-presenter'
import { showCustomAlert } from './CustomAlert.component'

const button1Text = 'React Native standard modal'
const button2Text = 'Whitespectre modal'

const App = () => {
  const handleOpenStandardModal = () => {
    setModalVisible(true)
  }

  const handleOpenWhitespectreModal = () => {
    showAlertFromAlert()
  }

  const [modalVisible, setModalVisible] = useState(false)

  const [currentText, setCurrentText] = useState('')
  const [ontheflyUpdate, setOntheflyUpdate] = useState(undefined)

  const showAlertFromAlert = async () => {
    const ModalContent = (
      <FieldWrapper
        value={currentText}
        onBlur={value => {
          setCurrentText(value)
          setOntheflyUpdate(undefined)
        }}
        onChange={setOntheflyUpdate}
      />
    )
    const modalHandler = await showCustomAlert({
      title: 'Alert from alert',
      body: ModalContent,
      buttons: [
        {
          title: 'OK',
          action: () => {
            console.log('OK Pressed')
            modalHandler.dismiss()
          },
        },
      ],
    })
  }

  return (
    <ModalPresenterParent>
      <View style={styles.container}>
        <Text>
          The same field wrapper (also below) is in a regular Modal and in a
          Whitespectre modal
        </Text>
        <View style={{ margin: 20 }}>
          <Button title={button1Text} onPress={handleOpenStandardModal} />
          <Button title={button2Text} onPress={handleOpenWhitespectreModal} />
        </View>
        <StatusBar style="auto" />
        <View>
          <Text>
            App state: <Text style={{ fontWeight: 'bold' }}>{currentText}</Text>
          </Text>
          <Text>
            Field on the fly update:{' '}
            <Text style={{ fontWeight: 'bold' }}>{ontheflyUpdate}</Text>
          </Text>
          <FieldWrapper
            value={currentText}
            onBlur={value => {
              setCurrentText(value)
              setOntheflyUpdate(undefined)
            }}
            onChange={setOntheflyUpdate}
          />
        </View>
        <Modal
          visible={modalVisible}
          onDismiss={() => {
            setModalVisible(false)
            setOntheflyUpdate(undefined) // just in case
          }}
        >
          <FieldWrapper
            value={currentText}
            onBlur={value => {
              setCurrentText(value)
              setOntheflyUpdate(undefined)
            }}
            onChange={setOntheflyUpdate}
          />
        </Modal>
      </View>
    </ModalPresenterParent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App

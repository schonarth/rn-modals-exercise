import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import {
  ModalContentProps,
  showModal,
  enqueueModal,
} from '@whitespectre/rn-modal-presenter'

const defaultButton = { title: 'Got It' }

export const showCustomAlert = ({
  title,
  body,
  buttons = [defaultButton],
  enqueue = false,
}) => {
  console.log('showCustomAlert', title, body, buttons, enqueue)
  if (enqueue) {
    return enqueueModal(CustomAlert, {
      title,
      body,
      buttons,
    })
  } else {
    return showModal(CustomAlert, {
      title,
      body,
      buttons,
    })
  }
}

const CustomAlert = ({ dismiss, title, body, buttons }) => {
  console.log('CustomAlert', title, body, buttons)
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {body}
          {buttons.map((button, index) => {
            return (
              <View key={index} style={styles.button}>
                <Button
                  title={button.title}
                  onPress={button.action ?? (() => dismiss())}
                />
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  modal: {
    borderRadius: 16,
    backgroundColor: 'white',
    width: '100%',
    overflow: 'hidden',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 33,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 19,
    lineHeight: 28,
  },
  detail: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
  },
  button: {
    width: '100%',
    marginTop: 32,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 14,
    right: 30,
  },
})

export default CustomAlert

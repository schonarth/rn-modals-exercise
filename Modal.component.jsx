import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'

const ModalComponent = ({ visible, onDismiss, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.')
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderColor: 'silver',
            borderWidth: 1,
          }}
        >
          <TouchableOpacity onPress={onDismiss}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>Modal Content</Text>
          {children}
        </View>
      </View>
    </Modal>
  )
}

export default ModalComponent

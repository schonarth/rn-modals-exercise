import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const FieldWrapper = ({ value, onBlur, onChange, ...rest }) => {
  const [internalValue, setInternalValue] = useState(value)

  const handleBlur = () => {
    onBlur?.(internalValue)
    setInternalValue('')
  }

  const handleChange = text => {
    setInternalValue(text)
    onChange?.(text)
  }

  const blur = () => {
    textInputRef.current.blur()
  }

  const handleKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      blur()
    }
  }

  const handleFocus = () => {
    setInternalValue(value)
  }

  const textInputRef = React.createRef()

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        ref={textInputRef}
        value={internalValue}
        onBlur={handleBlur}
        onChangeText={handleChange}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        {...rest}
      />

      {/* This is handled more gracefully in the real world */}
      <TouchableOpacity onPress={blur}>
        <Text>Click here to blur the field</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FieldWrapper

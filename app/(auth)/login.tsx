import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/'); 
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold mb-6">Đăng Nhập</Text>
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className="px-6 py-3 bg-blue-500 rounded-lg"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold">Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
}

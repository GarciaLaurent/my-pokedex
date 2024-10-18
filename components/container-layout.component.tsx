import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className="flex-1 bg-[#CC0000] lg:mx-auto">{children}</SafeAreaView>;
};

import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-[#f67373] sm:w-full md:w-[768px] lg:mx-auto lg:w-[1024px] ">
      {children}
    </SafeAreaView>
  );
};

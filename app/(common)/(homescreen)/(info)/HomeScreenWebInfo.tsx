import ThemedText from '@/components/CustomComponents/ThemedText';
import ThemedView from '@/components/CustomComponents/ThemedView';
import {applyShadow, cn} from '@/utilities/Styling';
import {HomeScreenData} from '@/assets/data/HomeScreen';
import React from 'react';
import {Icon} from '@/components/ui/icon';
import {View} from 'react-native';
import Animated, {Easing, FadeIn, FadeInDown} from 'react-native-reanimated';
import {web} from '@/utilities/CommonFunctions';
import {useInView} from '@/hooks/inView';

const {intro, features, outro} = HomeScreenData.aboutMe;

const HomeScreenWebInfo = () => {

  return (
    <ThemedView className={styleMerge('w-full bg-tertiary-200 rounded-xl p-5')}>
      <ThemedText className={styleMerge('font-saira-stencil-semibold text-start text-3xl text-[45px] text-left')}>ABOUT ME...!</ThemedText>
      <ThemedText className={styleMerge('font-nunito-medium  text-left text-xl pb-5')}>{intro}</ThemedText>
      <View className={'flex flex-row flex-wrap items-center justify-evenly w-full gap-5'}>
        {features.map((feature, index) => (
          <FeatureCard feature={feature} index={index} key={index} />
        ))}
      </View>
      <ThemedText className={styleMerge('font-nunito-medium  text-left text-xl m-5')}>{outro}</ThemedText>
    </ThemedView>
  );
};

const FeatureCard = ({feature, index}: {feature: {icon: any; label: string; color: string}; index: number}) => {
  const {ref, inView} = useInView();

  return (
    <div ref={ref} style={{width: '30%'}}>
      {inView && (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(500)}>
          <View className={styleMerge('w-full h-32 flex flex-col items-center justify-center border border-secondary-700 rounded-xl bg-secondary-100 hover:scale-105 transition-all duration-500 p-3', applyShadow('md'))}>
            <Icon as={feature.icon} size={50} className={styleMerge(feature.color)} />
            <ThemedText className={styleMerge('h-1/3 text-center font-nunito-bold text-lg')}>{feature.label}</ThemedText>
          </View>
        </Animated.View>
      )}
    </div>
  );
};

export default HomeScreenWebInfo;

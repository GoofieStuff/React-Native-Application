import ThemedView from '@/components/CustomComponents/ThemedView';
import {CustomButton} from '@/components/CustomComponents';
import {getShadow} from '@/utilities/Styling';
import {ScrollView, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import Animated, {FadeInUp,  FadeOutDown, LinearTransition} from 'react-native-reanimated';
import {v4 as uuidv4} from 'uuid';

const Stack = () => {
  const  [stack, setStack] = useState([]  as object[]);

  useEffect(()=>{
    console.log('stack', stack);
  }, [stack]);
  useEffect(() => {
    console.log('Loaded WEB Component.');
  }, []);

  return (
    <ThemedView className={'w-full h-full p-5'}>
      <ThemedView className={'w-full h-4/5 bg-blue-600 p-1 gap-1 overflow-hidden rounded-xl'}> 
        <ThemedView  className={'w-full h-5/6 flex  rounded-xl bg-violet-300 justify-between'}
        >
          <View className={'w-full h-1/3 bg-yellow-300'}></View>
          <View 
            className={'h-2/3 bg-orange-300 '}
          >
            <ScrollView 
            >
              {
                stack.toReversed().map((item, index)=>{
                  return(
                    <Animated.View 
                      entering={FadeInUp.duration(200)}
                      exiting={FadeOutDown.duration(200)}
                      layout={LinearTransition.duration(200)}
                      key={item?.id } 
                      style={{
                        width:'100%',
                        height:80,
                        backgroundColor:'blue',
                        marginBottom:2,
                      }}
                    >
                      <Text className={'text-white text-2xl'}>{item?.value}</Text>
                    </Animated.View>
                  );
                })
              }
            </ScrollView>

          </View>
          
        </ThemedView>
        <ThemedView className={'w-full h-1/6 flex-row justify-around items-center bg-orange-300 rounded-xl'}>
          <CustomButton
            buttonStyle={'h-20 w-20 rounded-full p-0 active:scale-110 transition-all duration-100'}
            containerCssStyle={{
              ...getShadow('md'),
            }}
            buttonText={'POP'}
            textStyle={'font-extrabold text-2xl text-white'}
            onPress={()=>{
              setStack(prev=>{
                const newStack=[...prev];
                newStack.pop();
                return newStack;
              });
            }}
          />
          <CustomButton
            buttonStyle={'h-20 w-20 rounded-full p-0 active:scale-110 transition-all duration-100'}
            containerCssStyle={{
              ...getShadow('md'),
            }}
            buttonText={'RESET'}
            textStyle={'font-extrabold text-2xl text-white'}
            onPress={()=>{
              setStack([]);
            }}
          />
          <CustomButton
            buttonStyle={'h-20 w-20 rounded-full p-0 active:scale-110 transition-all duration-100'}
            containerCssStyle={{
              ...getShadow('md'),
            }}
            buttonText={'PUSH'}
            textStyle={'font-extrabold text-2xl text-white'}
            onPress={()=>{
              setStack(prev=> [...prev, {id: Math.random()+Date.now(), value: Math.floor(Math.random()*10)}]);
            }}
          />

        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default Stack;

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// reduxs
import {useDispatch, useSelector} from 'react-redux';
import { RootState} from '../store';
import { setAnswer, calculateScore } from '../store/store'; // Adjust path as needed


// navigation
import {RootStackParamList} from '../navigations/AppNavigator';

// demo
import {QuestionDemo} from '../utils/data/QuestionDemo';

// icons
import Checked from '../../assets/icons/Check';
import Upload from '../../assets/icons/Upload';
import List from '../../assets/icons/List';

type QuestionnaireScreenNavigationProp = StackNavigationProp<RootStackParamList,'Questionnaire'>;

const QuestionnaireScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<QuestionnaireScreenNavigationProp>();
  const answers = useSelector((state: RootState) => state.questionnaire.answers);

  const handleAnswer = (
    questionIndex: number,
    option: {title: string; score: number},
  ) => {
    dispatch(setAnswer({questionIndex, score: option.score}));
  };

  const handleSubmit = () => {
    dispatch(calculateScore());
    navigation.navigate('Result');
  };


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:wp(2)}}>
        {QuestionDemo.map((list, index) => (
          <View key={index} style={styles.questionContainer}>
            <View style={styles.titleList}>
              <View style={styles.numberContainer}>
                <List width={wp(8)} height={hp(6)}/>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <Text style={styles.question}>{list.question}</Text>
            </View>
            {list.options.map((option, idx) => (
              <TouchableOpacity
                onPress={() => handleAnswer(index, option)} key={idx} activeOpacity={0.5}
                style={[styles.answerListContianer,{backgroundColor:option.score === answers[index]?.score ? '#E1FFEC':'#eeeeee'}]}>
                <Text style={styles.titleText}>{option.title}</Text>
                {option.score === answers[index]?.score && (
                  <Checked width={wp(6)} height={hp(3)}/>
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {answers.length == 5 && <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitContainer}>
          <Text style={styles.submitText}>Submit</Text>
          <Upload width={wp(8)} height={hp(4.5)} color={'#ffffff'}/>
        </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  numberContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:-hp(1.5),
    marginRight:wp(1)
  },
  numberText:{
    position:'absolute',
    fontSize:wp(3.5),
    fontWeight:'bold',
    color:'#000000',
  },
  titleList:{
    width:wp(90),
    flexDirection:'row',
    alignItems:'center',
  },
  submitText:{
    color:'#ffffff',
    fontSize:wp(4),
    fontWeight:'bold',
    marginRight:wp(3)
  },
  submitContainer:{
    flexDirection:'row',
    borderRadius:wp(10),
    paddingHorizontal:wp(8),
    paddingVertical:hp(1),
    marginRight:wp(5),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#00A63B',
    shadowOffset:{width:0,height:8},
    shadowColor:'#000000',
    shadowOpacity:0.1,
    shadowRadius:wp(4),
    elevation:2
  },
  footerContainer:{
    bottom:hp(4),
    alignSelf:'flex-end',
    position:'absolute',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    backgroundColor:'transparent',
  },
  titleText: {
    fontSize: wp(3.7),
    color: '#000000',
  },
  answerListContianer: {
    borderRadius: wp(1),
    backgroundColor: '#eeeeee',
    marginVertical: hp(0.5),
    paddingVertical: hp(1.7),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionContainer: {
    marginVertical:hp(2)
  },
  question: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:wp(1),
    color: '#000000',
  },
});

export default QuestionnaireScreen;

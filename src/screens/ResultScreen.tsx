import React from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// redux
import {useSelector} from 'react-redux';
import {RootState} from '../store';

// icons
import User from '../../assets/icons/User';
import Ticket from '../../assets/icons/Ticket';
import {QuestionDemo} from '../utils/data/QuestionDemo';
import AnswerArrow from '../../assets/icons/AnswersArrow';
import Shield from '../../assets/icons/Shield';

const ResultScreen = () => {
  const score = useSelector((state: RootState) => state.questionnaire.score);
  const profile = useSelector((state: RootState) => state.questionnaire.profile);
  const answers = useSelector((state: RootState) => state.questionnaire.answers);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer}>
          <User width={wp(15)} height={wp(15)} />
          <Shield width={wp(13)} height={wp(13)}/>
        </View>
        <View>
          <View style={styles.riskContainer}>
            <Text style={styles.resultText}>Your Risk</Text>
            <Text style={styles.resultTitle}>:</Text>
            <View style={styles.profileBackground}>
              <Text
                style={[
                  styles.resultTitle,
                  {
                    color:
                      profile === 'Low'
                        ? '#C6D822'
                        : profile === 'Medium'
                        ? '#ff8800'
                        : '#00A63B',
                  },
                ]}>
                {profile}
              </Text>
            </View>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.resultText}>Your Score</Text>
            <Text style={styles.resultTitle}>:</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ticket width={wp(14)} height={wp(14)} color={profile === 'Low'
                        ? '#C6D822'
                        : profile === 'Medium'
                        ? '#ff8800'
                        : '#00A63B'}/>
              <Text style={styles.scoreText}>{score}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Answers List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: hp(1)}}>
        {QuestionDemo.map((list, index) => (
          <View style={styles.answerContainer} key={index}>
            <Text style={styles.question}>{index + 1}. {list.question}</Text>
            {list.options.map(
              (option, idx) =>
                option.score === answers[index]?.score && (
                  <View key={idx} style={styles.listContainer}>
                    <AnswerArrow  width={wp(6)}  height={hp(4)}  color={'#00A63B'}  />
                    <Text style={styles.listText}>{option.title}</Text>
                  </View>
                ),
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: wp(3),
    backgroundColor: '#ffffff',
  },
  question: {
    fontSize: wp(4),
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -hp(1.5),
    marginRight: wp(1),
  },
  numberText: {
    position: 'absolute',
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#000000',
  },
  listText: {
    fontSize: wp(4),
    color: '#00A63B',
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  listContainer: {
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    paddingBottom: hp(2),
    alignItems: 'center',
    borderBottomWidth: wp(0.1),
    borderColor: '#BEBEBE',
  },
  titleText: {
    fontSize: wp(4),
    color: '#000000',
    fontWeight: 'bold',
  },
  answerContainer: {
    width: wp(100),
    marginTop: hp(2),
  },
  lgText: {
    color: '#ffffff',
    fontSize: wp(4),
    fontWeight: 'bold',
    marginRight: wp(3),
  },
  logoutContainer: {
    width: wp(38),
    flexDirection: 'row',
    alignContent: 'center',
    borderBottomRightRadius: wp(2),
    borderBottomLeftRadius: wp(2),
    alignSelf: 'flex-end',
    height: hp(5.5),
    marginTop: -hp(2.5),
    marginRight: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00A63B',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    shadowRadius: wp(3),
    elevation: 3,
  },
  profileBackground: {
    width: wp(20),
    paddingVertical: hp(0.5),
    marginLeft: wp(2),
  },
  resultTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    // marginLeft: wp(2.5),
  },
  scoreText: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'absolute',
  },
  riskContainer: {
    // marginTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"red"
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  userContainer: {
    backgroundColor: '#00A63B',
    padding: wp(1),
    alignItems:'center',
    borderRadius: wp(10),
    shadowOffset:{width:0,height:8},
    shadowColor:'#000000',
    shadowOpacity:0.1,
    shadowRadius:wp(3),
    elevation:2
  },
  profileContainer: {
    width: wp(90),
    height: hp(20),
    padding: wp(3),
    flexDirection: 'row',
    borderRadius: wp(3),
    backgroundColor: '#E8FFF0',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    shadowRadius: wp(3),
    elevation: 3,
  },
  resultText: {
    width: wp(25),
    fontSize: wp(4.5),
    fontWeight: 'bold',
    marginLeft: wp(2.5),
  },
});

export default ResultScreen;

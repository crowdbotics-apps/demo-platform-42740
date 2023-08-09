import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ZodiacDetailScreen = () => {
  const zodiacData = [{
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    rulingPlanet: 'Mars',
    compatibility: 'Leo, Sagittarius',
    description: 'Aries is the first sign of the zodiac, and that’s pretty much how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going. Whether or not everything gets done is another question altogether, for an Aries prefers to initiate rather than to complete. Do you have a project needing a kick-start? Call an Aries, by all means. The leadership displayed by Aries is most impressive, so don’t be surprised if they can rally the troops against seemingly insurmountable odds—they have that kind of personal magnetism.'
  }, {
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    rulingPlanet: 'Venus',
    compatibility: 'Virgo, Capricorn',
    description: 'Taurus is the second sign of the zodiac, and it’s all about reward. Unlike the Aries love of the game, Taurus loves the rewards of the game. Think physical pleasures and material goods, for those born under this sign revel in delicious excess. They are also a tactile lot, enjoying a tender, even sensual, touch. Taureans adore comfort and like being surrounded by pleasing, soothing things. Along these lines, they also favor a good meal and a fine wine. The good life in all its guises, whether it’s the arts or art of their own making (yes, these folks are artistic as well), is heaven on Earth to the Taurus-born.'
  }, {
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    rulingPlanet: 'Mercury',
    compatibility: 'Libra, Aquarius',
    description: 'Gemini is the third sign of the zodiac, and those born under this sign will be quick to tell you all about it. That’s because they love to talk! It’s not just idle chatter with these folks, either. The driving force behind a Gemini’s conversation is their mind. The Gemini-born are intellectually inclined, forever probing people and places in search of information. The more information a Gemini collects, the better. Sharing that information later on with those they love is also a lot of fun, for Geminis are supremely interested in developing their relationships.'
  } // ... add data for other zodiac signs
  ];

  const renderZodiacDetail = zodiac => {
    return <View style={styles.container}>
        <Text style={styles.name}>{zodiac.name}</Text>
        <Text style={styles.symbol}>{zodiac.symbol}</Text>
        <Text style={styles.label}>Element:</Text>
        <Text style={styles.value}>{zodiac.element}</Text>
        <Text style={styles.label}>Ruling Planet:</Text>
        <Text style={styles.value}>{zodiac.rulingPlanet}</Text>
        <Text style={styles.label}>Compatibility:</Text>
        <Text style={styles.value}>{zodiac.compatibility}</Text>
        <Text style={styles.description}>{zodiac.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daily Horoscope</Text>
        </TouchableOpacity>
      </View>;
  };

  return <SafeAreaView style={styles.safeArea}>
      {renderZodiacDetail(zodiacData[0])}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  symbol: {
    fontSize: 48,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    marginBottom: 15
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ZodiacDetailScreen;
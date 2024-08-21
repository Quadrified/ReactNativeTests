import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from '../../themes/AppColors';

const RecipeCard = ({ recipe }) => (
  <Card theme={{ roundness: 4 }} style={styles.container}>
    <Card.Cover style={styles.coverImage} source={{ uri: recipe?.image }} />
    <View style={styles.cardContentContainer}>
      <Text variant="titleLarge" style={styles.title}>
        {recipe?.name}
      </Text>
      <View style={styles.recipeInfoContainer}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="clock-fast"
            color={AppColors.secondary}
            size={24}
          />
          <Text variant="labelMedium" style={styles.label}>
            {' '}
            {recipe?.cookTimeMinutes} mins
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="account-group"
            color={AppColors.secondary}
            size={24}
          />
          <Text variant="labelMedium" style={styles.label}>
            {'  '}
            {recipe?.servings} {recipe?.servings > 1 ? 'servings' : 'serving'}
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="fire"
            color={AppColors.secondary}
            size={24}
          />
          <Text variant="labelMedium" style={styles.label}>
            {' '}
            {recipe?.caloriesPerServing} calories
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        {recipe?.tags?.map(tag => (
          <Text variant="labelMedium">#{tag} </Text>
        ))}
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  cardContentContainer: {
    padding: 5,
  },
  coverImage: {
    borderRadius: 8,
  },
  title: {
    paddingTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  recipeInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default RecipeCard;

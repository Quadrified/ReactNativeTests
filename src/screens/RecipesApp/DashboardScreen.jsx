import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import AppColors from '../../themes/AppColors';
import { get } from '../../api/api';
import { ALL_RECIPES } from '../../api/endpoints';
import RecipeCard from '../../components/RecipeCard';

const DashboardScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    const response = await get(ALL_RECIPES);
    if (response?.recipes?.length > 0) {
      setRecipes(response?.recipes);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const renderRecipeCard = ({ item }) => <RecipeCard recipe={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Awesome Recipes</Text>
      </View>
      {loading ? (
        <ActivityIndicator
          color={AppColors.primary}
          size={70}
          style={styles.loader}
        />
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={recipe => recipe?.id?.toString()}
          renderItem={renderRecipeCard}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  header: {
    padding: 15,
    backgroundColor: AppColors.primary,
  },
  headerText: {
    color: AppColors.white,
    fontSize: 24,
  },
  loader: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default DashboardScreen;
